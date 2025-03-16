// payment.js

// Initialize Yoco
const yoco = new window.YocoSDK({
    publicKey: 'pk_test_ed3c54a6gOol69qa7f45'
  });
  
  // EmailJS configuration
  // const EMAIL_CONFIG = {
  //   serviceID: 'service_4b0mwhe',
  //   templateID: 'template_oxc16mb',
  //   userID: 'm_XcbcDfp4HlS5nKC'
  // };

  const EMAIL_CONFIG = {
    serviceID: 'service_4b0mwhe',
    templateID: 'template_oxc16mb',
    userID: 'm_XcbcDfp4HlS5nKC'
  };
  
  // Function to format cart items for email
  function formatCartItemsForEmail(cartItems) {
    return cartItems.map(item => 
      `${item.name} - Quantity: ${item.quantity} - Price: R${item.price}`
    ).join('\n');
  }
  
  // Function to calculate total with shipping
  function calculateTotal(cartItems) {
    const subtotal = cartItems.reduce((sum, item) => {
      return sum + (parseFloat(item.price.replace('R', '')) * item.quantity);
    }, 0);
    const shipping = 50; // Fixed shipping cost
    return subtotal + shipping;
  }
  
  // Function to send order confirmation email
  async function sendOrderConfirmation(orderDetails) {
    const templateParams = {
      from_name: orderDetails.customerName,
      from_email: orderDetails.email,
      message: `
        Order Details:
        ${orderDetails.cartItems}
        
        Total Amount: R${orderDetails.total}
        Shipping Address: ${orderDetails.shippingAddress}
        
        Payment Status: Successful
        Transaction ID: ${orderDetails.transactionId}
      `,
      to_email: 'gideonlenge96@gmail.com'
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
  async function handlePayment(event) {
    event.preventDefault();
  
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const total = calculateTotal(cartItems);
  
    // Get form data
    const form = event.target;
    const customerName = form.querySelector('[name="cardHolder"]').value;
    const email = form.querySelector('[name="email"]').value;
    const shippingAddress = form.querySelector('[name="shippingAddress"]').value;
  
    try {
      // Initialize Yoco popup payment
      const result = await yoco.showPopup({
        amountInCents: Math.round(total * 100),
        currency: 'ZAR',
        name: 'Your Store Name',
        description: 'Order Payment',
        callback: async function(result) {
          if (result.error) {
            alert("Payment failed: " + result.error.message);
            return;
          }
  
          // Payment successful
          const orderDetails = {
            customerName,
            email,
            cartItems: formatCartItemsForEmail(cartItems),
            total: total.toFixed(2),
            shippingAddress,
            transactionId: result.id
          };
  
          // Send order confirmation
          await sendOrderConfirmation(orderDetails);
  
          // Clear cart and redirect
          localStorage.removeItem('cartItems');
          alert('Payment successful! Order confirmation has been sent to your email.');
          window.location.href = 'index.html';
        }
      });
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  }
  
  // Initialize page
  function initializePage() {
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
      paymentForm.addEventListener('submit', handlePayment);
    }
  
    // Update order total display
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const total = calculateTotal(cartItems);
    const orderTotalElement = document.getElementById('orderTotal');
    if (orderTotalElement) {
      orderTotalElement.textContent = `R${total.toFixed(2)}`;
    }
  }
  
  // Add event listener for page load
  document.addEventListener('DOMContentLoaded', initializePage);