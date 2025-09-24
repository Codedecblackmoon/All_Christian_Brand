// PayFast ITN (Instant Transaction Notification) Handler
// This is a Node.js/Express example for handling PayFast notifications
// You'll need to implement this on your backend server

const express = require('express');
const crypto = require('crypto');
const https = require('https');
const querystring = require('querystring');

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PayFast configuration - UPDATE THESE WITH YOUR ACTUAL DETAILS
const PAYFAST_CONFIG = {
    merchant_id: '10000100',        // TODO: Replace with your actual PayFast merchant ID
    merchant_key: 'q1cd2rdny4a53',  // TODO: Replace with your actual PayFast merchant key
    passphrase: 'your_passphrase',  // TODO: Replace with your actual PayFast passphrase (if you set one)
    // Use sandbox for testing, production for live
    validate_url: 'sandbox.payfast.co.za', // Change to 'www.payfast.co.za' for production
    validate_path: '/eng/query/validate'
};

// Valid PayFast server IPs (as of 2024 - verify current IPs from PayFast documentation)
const PAYFAST_VALID_IPS = [
    '197.97.145.144',
    '197.97.145.145',
    '197.97.145.146',
    '197.97.145.147',
    '197.97.145.148'
];

// Function to generate signature for validation
function generateSignature(data, passphrase = '') {
    // Create parameter string
    let paramString = '';
    
    // Sort parameters alphabetically and build string
    const sortedKeys = Object.keys(data).sort();
    for (const key of sortedKeys) {
        if (key !== 'signature') {
            paramString += `${key}=${encodeURIComponent(data[key]).replace(/%20/g, '+')}&`;
        }
    }
    
    // Remove trailing &
    paramString = paramString.slice(0, -1);
    
    // Add passphrase if provided
    if (passphrase) {
        paramString += `&passphrase=${encodeURIComponent(passphrase)}`;
    }
    
    // Generate MD5 hash
    return crypto.createHash('md5').update(paramString).digest('hex');
}

// Function to validate with PayFast
function validateWithPayFast(data) {
    return new Promise((resolve, reject) => {
        const postData = querystring.stringify(data);
        
        const options = {
            hostname: PAYFAST_CONFIG.validate_url,
            path: PAYFAST_CONFIG.validate_path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        
        const req = https.request(options, (res) => {
            let responseData = '';
            
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            
            res.on('end', () => {
                resolve(responseData.trim() === 'VALID');
            });
        });
        
        req.on('error', (error) => {
            reject(error);
        });
        
        req.write(postData);
        req.end();
    });
}

// PayFast ITN endpoint
app.post('/payfast-notify', async (req, res) => {
    try {
        console.log('PayFast ITN received:', req.body);
        
        const data = req.body;
        
        // 1. Verify the source IP (optional but recommended)
        const clientIP = req.ip || req.connection.remoteAddress;
        console.log('Request from IP:', clientIP);
        
        // Note: In production, you might want to verify the IP is from PayFast
        // if (!PAYFAST_VALID_IPS.includes(clientIP)) {
        //     console.log('Invalid IP address');
        //     return res.status(400).send('Invalid IP');
        // }
        
        // 2. Verify the signature
        const receivedSignature = data.signature;
        const calculatedSignature = generateSignature(data, PAYFAST_CONFIG.passphrase);
        
        if (receivedSignature !== calculatedSignature) {
            console.log('Invalid signature');
            return res.status(400).send('Invalid signature');
        }
        
        // 3. Validate with PayFast
        const isValid = await validateWithPayFast(data);
        
        if (!isValid) {
            console.log('PayFast validation failed');
            return res.status(400).send('Validation failed');
        }
        
        // 4. Process the payment based on payment status
        const paymentStatus = data.payment_status;
        const paymentId = data.m_payment_id;
        const amount = parseFloat(data.amount_gross);
        
        console.log(`Payment ${paymentId}: Status = ${paymentStatus}, Amount = ${amount}`);
        
        switch (paymentStatus) {
            case 'COMPLETE':
                // Payment successful - update your database
                await updateOrderStatus(paymentId, 'paid', data);
                console.log(`Payment ${paymentId} completed successfully`);
                break;
                
            case 'FAILED':
                // Payment failed - update your database
                await updateOrderStatus(paymentId, 'failed', data);
                console.log(`Payment ${paymentId} failed`);
                break;
                
            case 'PENDING':
                // Payment pending - update your database
                await updateOrderStatus(paymentId, 'pending', data);
                console.log(`Payment ${paymentId} is pending`);
                break;
                
            default:
                console.log(`Unknown payment status: ${paymentStatus}`);
        }
        
        // 5. Send success response to PayFast
        res.status(200).send('OK');
        
    } catch (error) {
        console.error('Error processing PayFast ITN:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Function to update order status in your database
async function updateOrderStatus(paymentId, status, paymentData) {
    // TODO: Implement your database update logic here
    // This is where you would update your order/payment records
    
    console.log(`Updating order ${paymentId} to status: ${status}`);
    
    // Example database update (replace with your actual database logic):
    /*
    try {
        await db.orders.update(
            { payment_reference: paymentId },
            { 
                payment_status: status,
                payment_data: paymentData,
                updated_at: new Date()
            }
        );
        
        // Send confirmation email to customer if payment is complete
        if (status === 'paid') {
            await sendPaymentConfirmationEmail(paymentId, paymentData);
        }
        
    } catch (dbError) {
        console.error('Database update error:', dbError);
        throw dbError;
    }
    */
}

// Function to send payment confirmation email
async function sendPaymentConfirmationEmail(paymentId, paymentData) {
    // TODO: Implement email sending logic
    // You could use nodemailer, SendGrid, or any other email service
    
    console.log(`Sending confirmation email for payment ${paymentId}`);
    
    // Example email sending (replace with your actual email logic):
    /*
    const emailData = {
        to: paymentData.email_address,
        subject: 'Payment Confirmation - All Christian Brand',
        html: `
            <h2>Payment Confirmation</h2>
            <p>Dear ${paymentData.name_first} ${paymentData.name_last},</p>
            <p>Your payment has been successfully processed.</p>
            <p><strong>Payment Reference:</strong> ${paymentId}</p>
            <p><strong>Amount:</strong> R${paymentData.amount_gross}</p>
            <p>Thank you for your order!</p>
        `
    };
    
    await emailService.send(emailData);
    */
}

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`PayFast notification server running on port ${PORT}`);
    console.log(`ITN endpoint: http://localhost:${PORT}/payfast-notify`);
});

module.exports = app;