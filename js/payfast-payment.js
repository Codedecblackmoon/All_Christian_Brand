// PayFast Payment Integration
// This handles the frontend payment flow

// PayFast configuration - UPDATE THESE WITH YOUR ACTUAL DETAILS
const PAYFAST_CONFIG = {
    // TODO: Replace with your actual PayFast merchant details
    merchant_id: '10000100',        // Your PayFast merchant ID
    merchant_key: 'q1cd2rdny4a53',  // Your PayFast merchant key
    // Use sandbox URL for testing, production URL for live
    process_url: 'https://sandbox.payfast.co.za/eng/process', // Change to https://www.payfast.co.za/eng/process for production
    return_url: window.location.origin + '/payment-success.html',
    cancel_url: window.location.origin + '/payment-cancelled.html',
    notify_url: 'YOUR_BACKEND_URL/payfast-notify' // TODO: Replace with your actual backend notify URL
};

// EmailJS configuration for order confirmation
const EMAIL_CONFIG = {
    serviceID: 'service_4b0mwhe',    // TODO: Replace with your EmailJS service ID
    templateID: 'template_oxc16mb',  // TODO: Replace with your EmailJS template ID
    userID: 'm_XcbcDfp4HlS5nKC'     // TODO: Replace with your EmailJS user ID
};

// Function to format cart items for email
function formatCartItemsForEmail(cartItems) {
    return cartItems.map(item => 
        `${item.name} - Size: ${item.size} - Quantity: ${item.quantity} - Price: ${item.price}`
    ).join('\n');
}

// Function to calculate total with selected delivery option
function calculateTotal(cartItems) {
    const subtotal = cartItems.reduce((sum, item) => {
        return sum + (parseFloat(item.price.replace('R', '')) * item.quantity);
    }, 0);
    
    // Get selected delivery option from localStorage
    const deliveryOption = JSON.parse(localStorage.getItem('selectedDeliveryOption')) || { cost: 50 };
    const deliveryCost = deliveryOption.cost;
    
    return subtotal + deliveryCost;
}

// Function to get delivery option description
function getDeliveryDescription() {
    const deliveryOption = JSON.parse(localStorage.getItem('selectedDeliveryOption')) || { option: 'johannesburg' };
    
    switch(deliveryOption.option) {
        case 'collect':
            return 'Collect at Store (FREE)';
        case 'johannesburg':
            return 'Door to Door - Johannesburg (R50.00)';
        case 'outside':
            return 'Door to Door - Outside Johannesburg (R100.00)';
        default:
            return 'Door to Door - Johannesburg (R50.00)';
    }
}

// Function to generate unique payment reference
function generatePaymentReference() {
    return 'AC_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Function to send order confirmation email
async function sendOrderConfirmation(orderDetails) {
    const templateParams = {
        from_name: orderDetails.customerName,
        from_email: orderDetails.email,
        message: `
            Order Details:
            ${orderDetails.cartItems}
            
            Delivery Option: ${orderDetails.deliveryOption}
            Subtotal: R${orderDetails.subtotal}
            Delivery Cost: R${orderDetails.deliveryCost}
            Total Amount: R${orderDetails.total}
            Shipping Address: ${orderDetails.shippingAddress}
            
            Payment Reference: ${orderDetails.paymentReference}
            Payment Status: Processing via PayFast
        `,
        to_email: 'allchristianbrand@gmail.com' // TODO: Replace with your business email
    };

    try {
        await emailjs.send(
            EMAIL_CONFIG.serviceID,
            EMAIL_CONFIG.templateID,
            templateParams,
            EMAIL_CONFIG.userID
        );
        console.log('Order confirmation email sent successfully');
    } catch (error) {
        console.error('Failed to send order confirmation:', error);
    }
}

// Main payment handler function
async function handlePayFastPayment(event) {
    event.preventDefault();

    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    if (cartItems.length === 0) {
        alert('Your cart is empty. Please add items before proceeding to payment.');
        return;
    }

    const total = calculateTotal(cartItems);
    
    // Get delivery option details
    const deliveryOption = JSON.parse(localStorage.getItem('selectedDeliveryOption')) || { option: 'johannesburg', cost: 50 };
    const subtotal = cartItems.reduce((sum, item) => {
        return sum + (parseFloat(item.price.replace('R', '')) * item.quantity);
    }, 0);

    // Get form data
    const form = event.target;
    const customerName = form.querySelector('[name="cardHolder"]').value;
    const phoneNumber = form.querySelector('[name="PhoneNumber"]').value;
    const email = form.querySelector('[name="email"]').value;
    const shippingAddress = form.querySelector('[name="shippingAddress"]').value;

    // Validate form data
    if (!customerName || !phoneNumber || !email || !shippingAddress) {
        alert('Please fill in all required fields.');
        return;
    }

    // Generate unique payment reference
    const paymentReference = generatePaymentReference();

    // Store order details for later use
    const orderDetails = {
        customerName,
        phoneNumber,
        email,
        cartItems: formatCartItemsForEmail(cartItems),
        deliveryOption: getDeliveryDescription(),
        subtotal: subtotal.toFixed(2),
        deliveryCost: deliveryOption.cost.toFixed(2),
        total: total.toFixed(2),
        shippingAddress,
        paymentReference
    };

    // Store order details in localStorage for success page
    localStorage.setItem('pendingOrder', JSON.stringify(orderDetails));

    try {
        // Send order confirmation email
        await sendOrderConfirmation(orderDetails);

        // Create PayFast payment form and submit
        createPayFastForm(orderDetails, total);

    } catch (error) {
        console.error('Payment initiation error:', error);
        alert('Failed to initiate payment. Please try again.');
    }
}

// Function to create and submit PayFast payment form
function createPayFastForm(orderDetails, totalAmount) {
    // Create form element
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = PAYFAST_CONFIG.process_url;
    form.style.display = 'none';

    // PayFast required parameters
    const paymentData = {
        merchant_id: PAYFAST_CONFIG.merchant_id,
        merchant_key: PAYFAST_CONFIG.merchant_key,
        return_url: PAYFAST_CONFIG.return_url,
        cancel_url: PAYFAST_CONFIG.cancel_url,
        notify_url: PAYFAST_CONFIG.notify_url,
        
        // Order details
        m_payment_id: orderDetails.paymentReference,
        amount: totalAmount.toFixed(2),
        item_name: 'All Christian Brand Order',
        item_description: `Order for ${orderDetails.customerName}`,
        
        // Customer details
        name_first: orderDetails.customerName.split(' ')[0] || orderDetails.customerName,
        name_last: orderDetails.customerName.split(' ').slice(1).join(' ') || '',
        email_address: orderDetails.email,
        cell_number: orderDetails.phoneNumber,
        
        // Additional parameters
        custom_str1: JSON.stringify({
            shippingAddress: orderDetails.shippingAddress,
            deliveryOption: orderDetails.deliveryOption
        }),
        custom_str2: orderDetails.paymentReference
    };

    // Create hidden input fields for each parameter
    Object.keys(paymentData).forEach(key => {
        if (paymentData[key]) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = paymentData[key];
            form.appendChild(input);
        }
    });

    // Add form to document and submit
    document.body.appendChild(form);
    
    // Show loading message
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); display: flex; justify-content: center; 
                    align-items: center; z-index: 9999; color: white; font-size: 18px;">
            <div style="text-align: center;">
                <div style="margin-bottom: 20px;">Redirecting to PayFast...</div>
                <div style="border: 4px solid #f3f3f3; border-top: 4px solid #a18e7f; 
                           border-radius: 50%; width: 40px; height: 40px; 
                           animation: spin 2s linear infinite; margin: 0 auto;"></div>
            </div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    document.body.appendChild(loadingDiv);

    // Submit form after a short delay
    setTimeout(() => {
        form.submit();
    }, 1000);
}

// Initialize page
function initializePayFastPage() {
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', handlePayFastPayment);
    }

    // Update order total display
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const total = calculateTotal(cartItems);
    const orderTotalElement = document.getElementById('orderTotal');
    if (orderTotalElement) {
        orderTotalElement.textContent = `R${total.toFixed(2)}`;
    }
    
    // Display delivery option on payment page
    const deliveryElement = document.getElementById('deliveryOption');
    if (deliveryElement) {
        deliveryElement.textContent = getDeliveryDescription();
    }
}

// Add event listener for page load
document.addEventListener('DOMContentLoaded', initializePayFastPage);