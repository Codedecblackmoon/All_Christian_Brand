
const products = {
    'm1': {
        name: 'Sports Cap',
        price: 'R120.00',
        description: 'Lightweight and breathable sports cap for all outdoor activities. Adjustable strap for a perfect fit.',
        mainImage: './image/m1.png',
        gallery: ['./image/m1.png', './image/m2.png', './image/m3.png', './image/m4.png'],
        rating: 3,
        category: 'Caps'
    },
    'm2': {
        name: 'Woolen Scarf',
        price: 'R150.00',
        description: 'Cozy woolen scarf to keep you warm during chilly weather. Available in multiple colors.',
        mainImage: './image/m2.png',
        gallery: ['./image/m2.png', './image/m5.png', './image/m6.png', './image/m7.png'],
        rating: 5,
        category: 'Scarves'
    },
    'm3': {
        name: 'Leather Belt',
        price: 'R200.00',
        description: 'Durable leather belt with a sleek buckle design, perfect for formal or casual attire.',
        mainImage: './image/m3.png',
        gallery: ['./image/m3.png', './image/m4.png', './image/m5.png', './image/m6.png'],
        rating: 4,
        category: 'Accessories'
    },
    'm4': {
        name: 'Classic Sunglasses',
        price: 'R250.00',
        description: 'UV-protected classic sunglasses for sunny days. A must-have for your outdoor adventures.',
        mainImage: './image/m4.png',
        gallery: ['./image/m4.png', './image/m7.png', './image/m8.png', './image/m9.png'],
        rating: 5,
        category: 'Sunglasses'
    },
    'm5': {
        name: 'Denim Jacket',
        price: 'R500.00',
        description: 'Stylish denim jacket designed for both comfort and durability. Perfect for layering.',
        mainImage: './image/m5.png',
        gallery: ['./image/m5.png', './image/m6.png', './image/m10.png', './image/m11.png'],
        rating: 4,
        category: 'Jackets'
    },
    'm6': {
        name: 'Running Shoes',
        price: 'R800.00',
        description: 'High-performance running shoes for athletes and casual runners alike. Lightweight and comfortable.',
        mainImage: './image/m6.png',
        gallery: ['./image/m6.png', './image/m12.png', './image/m13.png', './image/m14.png'],
        rating: 5,
        category: 'Shoes'
    },
    'm7': {
        name: 'Leather Wallet',
        price: 'R250.00',
        description: 'Premium leather wallet with multiple compartments for cards, cash, and coins.',
        mainImage: './image/m7.png',
        gallery: ['./image/m7.png', './image/m8.png', './image/m9.png', './image/m10.png'],
        rating: 4,
        category: 'Accessories'
    },
    'm8': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/m8.png',
        gallery: ['./image/m8.png', './image/m11.png', './image/m12.png', './image/m13.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'm9': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/m9.png',
        gallery: ['./image/m9.png', './image/m10.png', './image/m14.png', './image/m15.png'],
        rating: 3,
        category: 'Hats'
    },
    'm10': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/m10.png',
        gallery: ['./image/m10.png', './image/m16.png', './image/m17.png', './image/m18.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p1': {
        name: 'Bucket Hat Classic',
        price: 'R180.00',
        description: 'Classic bucket hat design perfect for casual wear. Made with premium materials for lasting comfort and style.',
        mainImage: './image/products/p1.jpeg',
        gallery: ['./image/m9.png', './image/m11.png', './image/m12.png', './image/m10.png'],
        rating: 4,
        category: 'Hats'
    },
    'm12': {
        name: 'Wrist Watch',
        price: 'R1200.00',
        description: 'Elegant wristwatch with a sleek design. Ideal for formal and casual events.',
        mainImage: './image/m12.png',
        gallery: ['./image/m12.png', './image/m13.png', './image/m14.png', './image/m15.png'],
        rating: 5,
        category: 'Accessories'
    },
    'm13': {
        name: 'Formal Shirt',
        price: 'R400.00',
        description: 'Crisp formal shirt made with high-quality fabric. Ideal for office wear.',
        mainImage: './image/m13.png',
        gallery: ['./image/m13.png', './image/m16.png', './image/m17.png', './image/m18.png'],
        rating: 4,
        category: 'Shirts'
    },
    'm14': {
        name: 'Summer Dress',
        price: 'R550.00',
        description: 'Flowy and lightweight summer dress. Perfect for sunny days and beach outings.',
        mainImage: './image/m14.png',
        gallery: ['./image/m14.png', './image/m15.png', './image/m16.png', './image/m19.png'],
        rating: 5,
        category: 'Dresses'
    },
    'm15': {
        name: 'Wool Coat',
        price: 'R1000.00',
        description: 'Luxurious wool coat for a sophisticated and warm winter look.',
        mainImage: './image/m15.png',
        gallery: ['./image/m15.png', './image/m17.png', './image/m18.png', './image/m19.png'],
        rating: 5,
        category: 'Coats'
    },
    'm16': {
        name: 'Running Shorts',
        price: 'R300.00',
        description: 'Breathable running shorts for active lifestyles. Comfortable fit and modern design.',
        mainImage: './image/m16.png',
        gallery: ['./image/m16.png', './image/m17.png', './image/m18.png', './image/m19.png'],
        rating: 4,
        category: 'Activewear'
    },
    'm17': {
        name: 'Gym Bag',
        price: 'R800.00',
        description: 'Spacious and durable gym bag with multiple compartments for all your essentials.',
        mainImage: './image/m17.png',
        gallery: ['./image/m17.png', './image/m18.png', './image/m19.png', './image/m10.png'],
        rating: 4,
        category: 'Bags'
    },
    'm18': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/m18.png',
        gallery: ['./image/m18.png', './image/m19.png', './image/m10.png', './image/m11.png'],
        rating: 5,
        category: 'Bags'
    },
    'm19': {
        name: 'Vintage Hat',
        price: 'R350.00',
        description: 'Stylish vintage hat with a classic design. Adds elegance to any outfit.',
        mainImage: './image/m19.png',
        gallery: ['./image/m19.png', './image/m12.png', './image/m14.png', './image/m15.png'],
        rating: 4,
        category: 'Hats'
    },
    'm20': {
        name: 'Premium T-Shirt',
        price: 'R180.00',
        description: 'High-quality cotton t-shirt designed for maximum comfort and style. Perfect for everyday wear.',
        mainImage: './image/m20.png',
        gallery: ['./image/m20.png', './image/m19.png', './image/m18.png', './image/m17.png'],
        rating: 4,
        category: 'T-Shirts'
    }
};

// Handle product clicks
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to all product containers
    const productElements = document.querySelectorAll('.product');
    productElements.forEach(product => {
        product.addEventListener('click', function(e) {
            // Get product ID from image src
            const imgSrc = this.querySelector('img').src;
            const productId = imgSrc.split('/').pop().split('.')[0];
            
            // Store selected product in localStorage
            if (products[productId]) {
                localStorage.setItem('selectedProduct', JSON.stringify(products[productId]));
                // Redirect to product page
                window.location.href = 'product.html';
            }
        });
    });

    // Check if we're on the product page
    if (window.location.pathname.includes('product.html')) {
        loadProductDetails();
    }

    updateCartCounter();
});

// Load product details on the product page
function loadProductDetails() {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (!selectedProduct) return;

    // Update main product imagelll
    const mainImg = document.getElementById('mainImg');
    if (mainImg) mainImg.src = selectedProduct.mainImage;

    // Update product details
    document.querySelector('h3.py-4').textContent = selectedProduct.name;
    document.querySelector('h2').textContent = selectedProduct.price;
    document.querySelector('span').textContent = selectedProduct.description;

    // Update breadcrumb
    document.querySelector('h6').textContent = `Home / ${selectedProduct.category}`;

    // Update small images
    const smallImgs = document.querySelectorAll('.small-img');
    selectedProduct.gallery.forEach((img, index) => {
        if (smallImgs[index]) {
            smallImgs[index].src = img;
        }
    });

    // Update star rating
    const stars = document.querySelectorAll('.star i');
    stars.forEach((star, index) => {
        if (index < selectedProduct.rating) {
            star.className = 'fa-solid fa-star';
        } else {
            star.className = 'fa-regular fa-star';
        }
    });
}

// Handle small image clicks on product page
document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.small-img');
    const mainImage = document.getElementById('mainImg');

    smallImages.forEach(img => {
        img.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});


function updateCartCounter() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartLink = document.querySelector('a[href="cart.html"] i');
    
    if (cartLink) {
        // Remove any existing counter
        const existingCounter = cartLink.parentNode.querySelector('.cart-counter');
        if (existingCounter) {
            existingCounter.remove();
        }

        // Calculate total number of items
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        
        // Create and add counter if there are items
        if (totalItems > 0) {
            const counterSpan = document.createElement('span');
            counterSpan.className = 'cart-counter badge badge-danger';
            counterSpan.style.cssText = `
                position: absolute; 
                top: -8px; 
                right: -8px; 
                background-color: #ed7f02; 
                color: white; 
                border-radius: 50%; 
                padding: 2px 6px; 
                font-size: 0.7rem; 
                line-height: 1;
                min-width: 20px;
                text-align: center;
            `;
            counterSpan.textContent = totalItems;

            // Ensure parent has relative positioning
            cartLink.parentNode.style.position = 'relative';
            cartLink.parentNode.appendChild(counterSpan);
        }
    }
}

// Add to cart function with counter update
function addToCart(product, size, quantity) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const cartItem = {
        name: product.name,
        price: product.price,
        size: size,
        quantity: quantity,
        image: product.mainImage
    };

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => 
        item.name === cartItem.name && item.size === cartItem.size
    );

    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        cartItems.push(cartItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCounter();
    // alert('Item added to cart!');
}
