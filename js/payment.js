// // payment.js

// // Initialize Yoco pk_live_b8a3cb9f2rY89ZB51d64
// const yoco = new window.YocoSDK({
//     publicKey: 'pk_live_b8a3cb9f2rY89ZB51d64'

//   });
  
//   // EmailJS configuration
//   const EMAIL_CONFIG = {
//     serviceID: 'service_4b0mwhe',
//     templateID: 'template_oxc16mb',
//     userID: 'm_XcbcDfp4HlS5nKC'
//   };


//   //DIDI pk_test_ed3c54a6gOol69qa7f45
//   // const EMAIL_CONFIG = {
//   //   serviceID: 'service_rpzvisf',
//   //   templateID: 'template_4n0gh6e',
//   //   userID: 'y0aBZvbzvbY1cpD0b'
//   // };
  
//   // Function to format cart items for email
//   function formatCartItemsForEmail(cartItems) {
//     return cartItems.map(item => 
//       `${item.name}- Size: ${item.size} - Quantity: ${item.quantity} - Price: R${item.price}`
//     ).join('\n');
//   }
  
//   // Function to calculate total with shipping
//   function calculateTotal(cartItems) {
//     const subtotal = cartItems.reduce((sum, item) => {
//       return sum + (parseFloat(item.price.replace('R', '')) * item.quantity);
//     }, 0);
//     const shipping = 0; // Fixed shipping cost
//     return subtotal + shipping;
//   }
  
//   // Function to send order confirmation email
//   async function sendOrderConfirmation(orderDetails)
//    {
//     const emailToSendTo = document.getElementById
//     const templateParams = {
//       from_name: orderDetails.customerName,
//       from_email: orderDetails.email,
//       message: `
//         Order Details:
//         ${orderDetails.cartItems}

//         Customer Info:
//         Name: ${orderDetails.customerName}
//         Number: ${orderDetails.PhonNumber}
//         Email: ${orderDetails.email}
        
//         Total Amount: R${orderDetails.total}
//         Shipping Address: ${orderDetails.shippingAddress}
        
//         Payment Status: Successful
//         Transaction ID: ${orderDetails.transactionId}
//       `,
//       to_email: 'gideonlenge96@gmail.com'
//     };
  
//     try {
//       await emailjs.send(
//         EMAIL_CONFIG.serviceID,
//         EMAIL_CONFIG.templateID,
//         templateParams,
//         EMAIL_CONFIG.userID
//       );
//       console.log('Order confirmation email sent successfully');
//     } catch (error) {
//       console.error('Failed to send order confirmation:', error);
//     }
//   }
  
//   // Main payment handler function
//   async function handlePayment(event) {
//     event.preventDefault();
  
//     // Get cart items from localStorage
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const total = calculateTotal(cartItems);
  
//     // Get form data
//     const form = event.target;
//     const customerName = form.querySelector('[name="cardHolder"]').value;
//     const PhonNumber = form.querySelector('[name="PhoneNumber"]').value;
//     const email = form.querySelector('[name="email"]').value;
//     const shippingAddress = form.querySelector('[name="shippingAddress"]').value;
  
//     try {
//       // Initialize Yoco popup payment
//       const result = await yoco.showPopup({
//         amountInCents: Math.round(total * 100),
//         currency: 'ZAR',
//         name: 'All Christian Brand',
//         description: 'Order Payment',
//         callback: async function(result) {
//           if (result.error) {
//             alert("Payment failed: " + result.error.message);
//             return;
//           }
  
//           // Payment successful
//           const orderDetails = {
//             customerName,
//             email,
//             PhonNumber,
//             cartItems: formatCartItemsForEmail(cartItems),
//             total: total.toFixed(2),
//             shippingAddress,
//             transactionId: result.id
//           };
  
//           // Send order confirmation
//           await sendOrderConfirmation(orderDetails);
  
//           // Clear cart and redirect
//           // localStorage.removeItem('cartItems');
//           // alert('Payment successful! Order confirmation has been sent to your email.');
//            await Swal.fire({
//             title: "Payment successful!",
//             text: 'Our team will contact you shortly to confirm your order.',
//             icon: 'success',
//             confirmButtonText: 'OK'
//           });
//           // Clear cart and redirect
//           localStorage.removeItem('cartItems');
//           window.location.href = 'index.html';
//         }
//       });
//     } catch (error) {
//       console.error('Payment error:', error);
//       alert('Payment failed. Please try again.');
//     }
//   }
  
//   // Initialize page
//   function initializePage() {
//     const paymentForm = document.getElementById('paymentForm');
//     if (paymentForm) {
//       paymentForm.addEventListener('submit', handlePayment);
//     }
  
//     // Update order total display
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const total = calculateTotal(cartItems);
//     const orderTotalElement = document.getElementById('orderTotal');
//     if (orderTotalElement) {
//       orderTotalElement.textContent = `R${total.toFixed(2)}`;
//     }

//     // Display delivery option on payment page
//     const deliveryElement = document.getElementById('deliveryOption');
//     if (deliveryElement) {
//       deliveryElement.textContent = getDeliveryDescription();
//     }
//   }
  
//   // Add event listener for page load
//   document.addEventListener('DOMContentLoaded', initializePage);

document.addEventListener("DOMContentLoaded", () => {
  const orderTotalEl = document.getElementById("orderTotal");
  const paymentForm = document.getElementById("paymentForm");

  // ===============================
  // 1. CALCULATE TOTAL
  // ===============================
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const delivery = JSON.parse(localStorage.getItem("selectedDeliveryOption")) || { cost: 0 };

  let subtotal = 0;

  cartItems.forEach(item => {
    subtotal += parseFloat(item.price.replace("R", "")) * item.quantity;
  });

  const total = subtotal + delivery.cost;
  orderTotalEl.textContent = `R${total.toFixed(2)}`;

  // ===============================
  // 2. PAYSTACK PAYMENT
  // ===============================
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = paymentForm.cardHolder.value.trim();
    const phone = paymentForm.PhoneNumber.value.trim();
    const email = paymentForm.email.value.trim();
    const address = paymentForm.shippingAddress.value.trim();

    if (!email || !fullName || !phone || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    const handler = PaystackPop.setup({
      key: "pk_test_b93c574f3e0ed6ecc5e2eec29e6dab854c08d9ca", // 🔴 PAYSTACK PUBLIC KEY ONLY
      email: email,
      amount: Math.round(total * 100), // Paystack uses kobo
      currency: "ZAR",
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: fullName
          },
          {
            display_name: "Phone",
            variable_name: "phone",
            value: phone
          },
          {
            display_name: "Address",
            variable_name: "address",
            value: address
          }
        ]
      },
      callback: function (response) {
        // ✅ PAYMENT SUCCESSFUL
        console.log("Paystack reference:", response.reference);

        // Store reference for backend verification later
        localStorage.setItem("paystackReference", response.reference);

        // Clear cart
        localStorage.removeItem("cartItems");
        localStorage.removeItem("selectedDeliveryOption");
        
        window.location.href = "index.html";
        
      },
      onClose: function () {
        alert("Payment window closed.");
      }
    });

    handler.openIframe();
  });
});
