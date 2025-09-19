// payment.js

// Initialize Yoco - BACKUP FILE (not currently used)
const yoco = new window.YocoSDK({
    publicKey: 'pk_live_b8a3cb9f2rY89ZB51d64'  // Changed to live for consistency
  });
  
  // EmailJS configuration  
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
    
    // Get delivery option details
    const deliveryOption = JSON.parse(localStorage.getItem('selectedDeliveryOption')) || { option: 'johannesburg', cost: 50 };
    const subtotal = cartItems.reduce((sum, item) => {
      return sum + (parseFloat(item.price.replace('R', '')) * item.quantity);
    }, 0);
  
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
            deliveryOption: getDeliveryDescription(),
            subtotal: subtotal.toFixed(2),
            deliveryCost: deliveryOption.cost.toFixed(2),
            total: total.toFixed(2),
            shippingAddress,
            transactionId: result.id
          };
  
          // Send order confirmation
          await sendOrderConfirmation(orderDetails);
  
          // Clear cart and delivery option, then redirect
          localStorage.removeItem('cartItems');
          localStorage.removeItem('selectedDeliveryOption');
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
    
    // Display delivery option on payment page
    const deliveryElement = document.getElementById('deliveryOption');
    if (deliveryElement) {
      deliveryElement.textContent = getDeliveryDescription();
    }
  }
  
  // Add event listener for page load
  document.addEventListener('DOMContentLoaded', initializePage);