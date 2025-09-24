# PayFast Backend Integration

This backend handles PayFast ITN (Instant Transaction Notification) callbacks for secure payment processing.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure PayFast Settings

Update the following in `payfast-notify.js`:

```javascript
const PAYFAST_CONFIG = {
    merchant_id: 'YOUR_MERCHANT_ID',        // Replace with your PayFast merchant ID
    merchant_key: 'YOUR_MERCHANT_KEY',      // Replace with your PayFast merchant key
    passphrase: 'YOUR_PASSPHRASE',          // Replace with your PayFast passphrase (optional)
    validate_url: 'sandbox.payfast.co.za', // Use 'www.payfast.co.za' for production
    validate_path: '/eng/query/validate'
};
```

### 3. Update Frontend Configuration

In `js/payfast-payment.js`, update:

```javascript
const PAYFAST_CONFIG = {
    merchant_id: 'YOUR_MERCHANT_ID',
    merchant_key: 'YOUR_MERCHANT_KEY',
    process_url: 'https://sandbox.payfast.co.za/eng/process', // Use production URL for live
    notify_url: 'https://yourdomain.com/payfast-notify'       // Your backend ITN URL
};
```

### 4. Deploy Backend

Deploy this backend to a server that PayFast can reach (e.g., Heroku, DigitalOcean, AWS, etc.).

### 5. Configure PayFast Dashboard

1. Log into your PayFast merchant dashboard
2. Go to Settings > Integration
3. Set your ITN (Instant Transaction Notification) URL to: `https://yourdomain.com/payfast-notify`
4. Set your Return URL to: `https://yourdomain.com/payment-success.html`
5. Set your Cancel URL to: `https://yourdomain.com/payment-cancelled.html`

## Testing

### Sandbox Testing
1. Use PayFast sandbox credentials
2. Use sandbox URLs in configuration
3. Test with PayFast test card numbers

### Production
1. Switch to production credentials
2. Update URLs to production endpoints
3. Test with small amounts first

## Security Notes

- Always validate ITN signatures
- Verify PayFast source IPs (optional but recommended)
- Use HTTPS for all endpoints
- Store sensitive credentials as environment variables
- Implement proper error handling and logging

## Database Integration

Implement the `updateOrderStatus` function to update your database:

```javascript
async function updateOrderStatus(paymentId, status, paymentData) {
    // Your database update logic here
    // Example with MongoDB:
    await Order.findOneAndUpdate(
        { payment_reference: paymentId },
        { 
            payment_status: status,
            payment_data: paymentData,
            updated_at: new Date()
        }
    );
}
```

## Email Integration

Implement the `sendPaymentConfirmationEmail` function:

```javascript
async function sendPaymentConfirmationEmail(paymentId, paymentData) {
    // Your email sending logic here
    // Example with nodemailer or SendGrid
}
```

## Environment Variables

Create a `.env` file for production:

```
PAYFAST_MERCHANT_ID=your_merchant_id
PAYFAST_MERCHANT_KEY=your_merchant_key
PAYFAST_PASSPHRASE=your_passphrase
DATABASE_URL=your_database_url
EMAIL_API_KEY=your_email_api_key
```

## Support

For PayFast integration support:
- PayFast Documentation: https://developers.payfast.co.za/
- PayFast Support: support@payfast.co.za