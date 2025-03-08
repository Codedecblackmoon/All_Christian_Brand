
const products = {
    'p1': {
        name: '"CHRIST THE SON" Black Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ central role in the universe.',
        mainImage: './image/product/p1.png',
        gallery: [],
        rating: 4,
        category: 'Hoodies'
    },
    'p2': {
        name: '"Heaven Gate" Black Hoodie',
        price: 'R450.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p2.png',
        gallery: ['./image/product/p40.png', './image/product/p41.png', './image/product/p42.png', './image/product/p2.png'],
        rating: 3,
        category: 'Hoodies'
    },
    'p3': {
        name: '"HE DEFEATED DEATH" Black Hoodie',
        price: 'R450.00',
        description: 'Declare the ultimate victory of Jesus Christ with this powerful design. "Jesus Christ, He Defeated Death" boldly proclaims the triumph of our Savior over the grave.',
        mainImage: './image/product/p3.png',
        gallery: ['./image/product/p29.png', './image/product/p3.png', './image/product/p31.png', './image/product/p32.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p4': {
        name: '"JESUS LOVES YOU" Black Hoodie',
        price: 'R100.00',
        description: 'Share the universal message of God\'s sunconditional love with this heartwarming design."Jesus Loves You" is gently written in a beautiful,cursive font, reminding everyone of the infinite loveand compassion of our Savior.',
        mainImage: './image/product/p4.png',
        gallery: ['./image/product/p26.png', './image/product/p27.png', './image/product/p28.png', './image/product/p33.png'],
        rating: 3,
        category: 'Hoodies'
    },
    'p5': {
        name: '"JESUS SAVES LIVES" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage: './image/product/p5.png',
        gallery: ['./image/product/p5.png', './image/product/p29.png', './image/product/p35.png', './image/product/p39.png'],
        rating: 3,
        category: 'Hoodies'
    },
    'p6': {
        name: '"ADONAI" Black Hoodie',
        price: 'R450.00',
        description: 'Declare your devotion to the Almighty with this powerful design. "Adonai" is a Hebrew title for God, emphasizing His sovereignty and eternal nature.',
        mainImage: './image/product/p6.png',
        gallery: ['./image/product/p6.png', './image/product/p12.png', './image/product/p13.png', './image/product/p15.png'],
        rating: 3,
        category: 'Hoodies'
    },
    'p7': {
        name: 'Knitted Beanie',
        price: 'R450.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p7.png',
        gallery: ['./image/product/p7.png', './image/product/p9.png', './image/product/p10.png', './image/product/p11.png'],
        rating: 3,
        category: 'Hats'
    },
    'p8': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p8.png',
        gallery: ['./image/product/p8.png', './image/product/p16.png', './image/product/p17.png', './image/product/p18.png'],
        rating: 3,
        category: 'Hats'
    },
    'p9': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/product/p9.png',
        gallery: ['./image/product/p9.png', './image/product/p7.png', './image/product/p10.png', './image/product/p11.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p10': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p10.png',
        gallery: ['./image/product/p10.png', './image/product/p7.png', './image/product/p9.png', './image/product/p11.png'],
        rating: 3,
        category: 'Hats'
    },
    'p11': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p11.png',
        gallery: ['./image/product/p11.png', './image/product/p9.png', './image/product/p7.png', './image/product/p10.png'],
        rating: 3,
        category: 'Hats'
    },
    'p12': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p12.png',
        gallery: ['./image/product/p12.png', './image/product/p6.png', './image/product/p13.png', './image/product/p15.png'],
        rating: 3,
        category: 'Hats'
    },
    'p13': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p13.png',
        gallery: ['./image/product/p13.png', './image/product/p12.png', './image/product/p15.png', './image/product/p6.png'],
        rating: 3,
        category: 'Hats'
    },
    'p15': {
        name: 'Sports Cap',
        price: 'R120.00',
        description: 'Lightweight and breathable sports cap for all outdoor activities. Adjustable strap for a perfect fit.',
        mainImage: './image/product/p15.png',
        gallery: ['./image/product/p6.png', './image/product/p15.png', './image/product/p13.png', './image/product/p12.png'],
        rating: 3,
        category: 'Caps'
    },
    'p16': {
        name: 'Woolen Scarf',
        price: 'R150.00',
        description: 'Cozy woolen scarf to keep you warm during chilly weather. Available in multiple colors.',
        mainImage: './image/product/p16.png',
        gallery: ['./image/product/p8.png', './image/product/p17.png', './image/product/p16.png', './image/product/p38.png'],
        rating: 5,
        category: 'Scarves'
    },
    'p17': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p17.png',
        gallery: ['./image/product/p17.png', './image/product/p8.png', './image/product/p13.png', './image/product/p8.png'],
        rating: 3,
        category: 'Hats'
    },
    'p18': {
        name: 'Woolen Scarf',
        price: 'R150.00',
        description: 'Cozy woolen scarf to keep you warm during chilly weather. Available in multiple colors.',
        mainImage: './image/product/p18.png',
        gallery: ['./image/product/p8.png', './image/product/p17.png', './image/product/p18.png', './image/product/p38.png'],
        rating: 5,
        category: 'Scarves'
    },
    'p19': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p19.png',
        gallery: ['./image/product/p19.png', './image/product/p20.png', './image/product/p21.png', './image/product/p22.png'],
        rating: 3,
        category: 'Hats'
    },
    'p20': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p20.png',
        gallery: ['./image/product/p20.png', './image/product/p19.png', './image/product/p21.png', './image/product/p22.png'],
        rating: 3,
        category: 'Hats'
    },
    'p21': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p21.png',
        gallery: ['./image/product/p21.png', './image/product/p22.png', './image/product/p20.png', './image/product/p19.png'],
        rating: 3,
        category: 'Hats'
    },
    'p22': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p22.png',
        gallery: ['./image/product/p22.png', './image/product/p21.png', './image/product/p20.png', './image/product/p19.png'],
        rating: 3,
        category: 'Hats'
    },
    'p23': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p23.png',
        gallery: ['./image/product/p23.png', './image/product/p24.png', './image/product/p25.png', './image/product/p26.png'],
        rating: 3,
        category: 'Hats'
    },
    'p24': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p24.png',
        gallery: ['./image/product/p24.png', './image/product/p23.png', './image/product/p26.png', './image/product/p25.png'],
        rating: 3,
        category: 'Hats'
    },
    'p25': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p25.png',
        gallery: ['./image/product/p5.png', './image/product/p23.png', './image/product/p24.png', './image/product/p25.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p26': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p26.png',
        gallery: ['./image/product/p26.png', './image/product/p27.png', './image/product/p28.png', './image/product/p33.png'],
        rating: 5,
        category: 'Shoes'
    },

    'p27': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p27.png',
        gallery: ['./image/product/p27.png', './image/product/p26.png', './image/product/p28.png', './image/product/p33.png'],
        rating: 5,
        category: 'Shoes'
    },

    'p28': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p28.png',
        gallery: ['./image/product/p28.png', './image/product/p27.png', './image/product/p33.png', './image/product/p26.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p29': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p29.png',
        gallery: ['./image/product/p29.png', './image/product/p30.png', './image/product/p31.png', './image/product/p32.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p30': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/product/p30.png',
        gallery: ['./image/product/p31.png', './image/product/p29.png', './image/product/p32.png', './image/product/p30.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p31': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/product/p31.png',
        gallery: ['./image/product/p31.png', './image/product/p29.png', './image/product/p32.png', './image/product/p30.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p32': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/product/p32.png',
        gallery: ['./image/product/p32.png', './image/product/p31.png', './image/product/p29.png', './image/product/p30.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p33': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p33.png',
        gallery: ['./image/product/p26.png', './image/product/p4.png', './image/product/p28.png', './image/product/p33.png'],
        rating: 3,
        category: 'Hats'
    },
    'p34': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/product/p9.png',
        gallery: ['./image/product/p34.png', './image/product/p7.png', './image/product/p10.png', './image/product/p11.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p35': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p35.png',
        gallery: ['./image/product/p35.png', './image/product/p23.png', './image/product/p24.png', './image/product/p25.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p36': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p36.png',
        gallery: ['./image/product/p36.png', './image/product/p20.png', './image/product/p21.png', './image/product/p22.png'],
        rating: 3,
        category: 'Hats'
    },
    'p37': {
        name: 'Sports Cap',
        price: 'R120.00',
        description: 'Lightweight and breathable sports cap for all outdoor activities. Adjustable strap for a perfect fit.',
        mainImage: './image/product/p37.png',
        gallery: ['./image/product/p6.png', './image/product/p37.png', './image/product/p13.png', './image/product/p12.png'],
        rating: 3,
        category: 'Caps'
    },
    'p38': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p38.png',
        gallery: ['./image/product/p38.png', './image/product/p16.png', './image/product/p17.png', './image/product/p18.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p39': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p39.png',
        gallery: ['./image/product/p39.png', './image/product/p35.png', './image/product/p23.png', './image/product/p24.png'],
        rating: 5,
        category: 'Shoes'
    },  
    'p40': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p40.png',
        gallery: ['./image/product/p40.png', './image/product/p41.png', './image/product/p42.png', './image/product/p2.png'],
        rating: 3,
        category: 'Hats'
    },
    'p41': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p41.png',
        gallery: ['./image/product/p40.png', './image/product/p41.png', './image/product/p42.png', './image/product/p2.png'],
        rating: 3,
        category: 'Hats'
    },
    'p42': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p42.png',
        gallery: ['./image/product/p40.png', './image/product/p41.png', './image/product/p42.png', './image/product/p2.png'],
        rating: 3,
        category: 'Hats'
    },
    'p43': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p43.png',
        gallery: ['./image/product/p40.png', './image/product/p41.png', './image/product/p42.png', './image/product/p43.png'],
        rating: 3,
        category: 'Hats'
    },
    'p44': {
        name: 'Bucket Hat Classic',
        price: 'R180.00',
        description: 'Classic bucket hat design perfect for casual wear. Made with premium materials for lasting comfort and style.',
        mainImage: './image/product/p44.png',
        gallery: ['./image/product/p44.png', './image/product/p45.png', './image/product/p46.png', './image/product/p47.png'],
        rating: 4,
        category: 'Hats'
    },
    'p45': {
        name: 'Bucket Hat Classic',
        price: 'R180.00',
        description: 'Classic bucket hat design perfect for casual wear. Made with premium materials for lasting comfort and style.',
        mainImage: './image/product/p45.png',
        gallery: ['./image/product/p1.png', './image/product/p45.png', './image/product/p46.png', './image/product/p47.png'],
        rating: 4,
        category: 'Hats'
    },
    
    'p46': {
        name: 'Bucket Hat Classic',
        price: 'R180.00',
        description: 'Classic bucket hat design perfect for casual wear. Made with premium materials for lasting comfort and style.',
        mainImage: './image/product/p46.png',
        gallery: ['./image/product/p1.png', './image/product/p45.png', './image/product/p46.png', './image/product/p47.png'],
        rating: 4,
        category: 'Hats'
    },
    'p47': {
        name: 'Bucket Hat Classic',
        price: 'R180.00',
        description: 'Classic bucket hat design perfect for casual wear. Made with premium materials for lasting comfort and style.',
        mainImage: './image/product/p47.png',
        gallery: ['./image/product/p1.png', './image/product/p45.png', './image/product/p46.png', './image/product/p47.png'],
        rating: 4,
        category: 'Hats'
    },
    'p48': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/product/p48.png',
        gallery: ['./image/product/p50.png', './image/product/p51.png', './image/product/p52.png', './image/product/p48.png'],
        rating: 4,
        category: 'Bags'
    },
    'p49': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/product/p49.png',
        gallery: ['./image/product/p59.png', './image/product/p51.png', './image/product/p54.png', './image/product/p48.png'],
        rating: 4,
        category: 'Bags'
    },
    'p50': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/product/p50.png',
        gallery: ['./image/product/p49.png', './image/product/p53.png', './image/product/p50.png', './image/product/p52.png'],
        rating: 4,
        category: 'Bags'
    },
    'p51': {    
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',    
        mainImage: './image/product/p51.png',
        gallery: ['./image/product/p49.png', './image/product/p53.png', './image/product/p50.png', './image/product/p51.png'],
        rating: 4,
        category: 'Bags'
    },
    'p52': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/product/p52.png',
        gallery: ['./image/product/p49.png', './image/product/p53.png', './image/product/p50.png', './image/product/p52.png'],
        rating: 5,
        category: 'Bags'
    },
    'p53': {
        name: 'Travel Backpack',
        price: 'R1100.00',    
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',    
        mainImage: './image/product/p53.png',
        gallery: ['./image/product/p49.png', './image/product/p53.png', './image/product/p50.png', './image/product/p52.png'],
        rating: 4,
        category: 'Bags'
    },
    'p54': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/product/p54.png',
        gallery: ['./image/product/p49.png', './image/product/p53.png', './image/product/p50.png', './image/product/p52.png'],
        rating: 4,
        category: 'Bags'
    },
    'p55': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/product/p55.png',
        gallery: ['./image/product/55.png', './image/product/p56.png', './image/product/p57.png', './image/product/p58.png'],
        rating: 4,
        category: 'Bags'
    },
    'p56': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/product/p56.png',
        gallery: ['./image/product/p55.png', './image/product/p56.png', './image/product/p57.png', './image/product/p58.png'],
        rating: 4,
        category: 'Bags'
    },
    'p57': {
        name: 'Travel Backpack',
        price: 'R1100.00',
        description: 'Comfortable and spacious travel backpack with sturdy straps and waterproof material.',
        mainImage: './image/product/p57.png',
        gallery: ['./image/product/p55.png', './image/product/p56.png', './image/product/p57.png', './image/product/p58.png'],
        rating: 4,
        category: 'Bags'
    },
    'p58': {
        name: 'Vintage Hat',
        price: 'R350.00',
        description: 'Stylish vintage hat with a classic design. Adds elegance to any outfit.',
        mainImage: './image/product/p59.png',
        gallery: ['./image/product/p55.png', './image/product/p56.png', './image/product/p58.png', './image/product/p61.png'],
        rating: 4,
        category: 'Hats'
    },
    'p59': {
        name: 'Vintage Hat',
        price: 'R350.00',
        description: 'Stylish vintage hat with a classic design. Adds elegance to any outfit.',
        mainImage: './image/product/p59.png',
        gallery: ['./image/product/p56.png', './image/product/p57.png', './image/product/p59.png', './image/product/p60.png'],
        rating: 4,
        category: 'Hats'
    },
    'p60': {
        name: 'Vintage Hat',
        price: 'R350.00',
        description: 'Stylish vintage hat with a classic design. Adds elegance to any outfit.',
        mainImage: './image/product/p60.png',
        gallery: ['./image/product/p56.png', './image/product/p57.png', './image/product/p61.png', './image/product/p60.png'],
        rating: 4,
        category: 'Hats'
    },
    'p61': {
        name: 'Vintage Hat',
        price: 'R350.00',
        description: 'Stylish vintage hat with a classic design. Adds elegance to any outfit.',
        mainImage: './image/product/p61.png',
        gallery: ['./image/product/p56.png', './image/product/p57.png', './image/product/p61.png', './image/product/p60.png'],
        rating: 4,
        category: 'Hats'
    },
    'p62': {
        name: 'Premium T-Shirt',
        price: 'R180.00',
        description: 'High-quality cotton t-shirt designed for maximum comfort and style. Perfect for everyday wear.',
        mainImage: './image/product/p62.png',
        gallery: ['./image/product/p62.png', './image/product/p64.png', './image/product/p65.png', './image/product/p66.png'],
        rating: 4,
        category: 'T-Shirts'
    },
    'p63': {
        name: 'Premium T-Shirt',
        price: 'R180.00',
        description: 'High-quality cotton t-shirt designed for maximum comfort and style. Perfect for everyday wear.',
        mainImage: './image/product/p63.png',
        gallery: ['./image/product/p62.png', './image/product/p63.png', './image/product/p65.png', './image/product/p66.png'],
        rating: 4,
        category: 'T-Shirts'
    },
    'p64': {
        name: 'Premium T-Shirt',
        price: 'R180.00',
        description: 'High-quality cotton t-shirt designed for maximum comfort and style. Perfect for everyday wear.',
        mainImage: './image/product/p64.png',
        gallery: ['./image/product/p62.png', './image/product/p63.png', './image/product/p65.png', './image/product/p66.png'],
        rating: 4,
        category: 'T-Shirts'
    },
    'p65': {
        name: 'Premium T-Shirt',
        price: 'R180.00',
        description: 'High-quality cotton t-shirt designed for maximum comfort and style. Perfect for everyday wear.',
        mainImage: './image/product/p65.png',
        gallery: ['./image/product/p62.png', './image/product/p63.png', './image/product/p65.png', './image/product/p66.png'],
        rating: 4,
        category: 'T-Shirts'
    },
    'p66': {
        name: 'Premium T-Shirt',
        price: 'R180.00',
        description: 'High-quality cotton t-shirt designed for maximum comfort and style. Perfect for everyday wear.',
        mainImage: './image/product/p66.png',
        gallery: ['./image/product/p62.png', './image/product/p63.png', './image/product/p65.png', './image/product/p66.png'],
        rating: 4,
        category: 'T-Shirts'
    },
    'p67': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p67.png',
        gallery: ['./image/product/p67.png', './image/product/p68.png', './image/product/p69.png', './image/product/p70.png'],
        rating: 4,
        category: 'Shoes'
    },
    'p68': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p68.png',
        gallery: ['./image/product/p67.png', './image/product/p68.png', './image/product/p69.png', './image/product/p70.png'],
        rating: 4,
        category: 'Shoes'
    },
    'p69': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/product/p69.png',
        gallery: ['./image/product/p71.png', './image/product/p67.png', './image/product/p69.png', './image/product/p68.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p70': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p70.png',
        gallery: ['./image/product/p69.png', './image/product/p67.png', './image/product/p72.png', './image/product/p71.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p71': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/product/p71.png',
        gallery: ['./image/product/p72.png', './image/product/p67.png', './image/product/p69.png', './image/product/p68.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p72': {
        name: 'Graphic Hoodie',
        price: 'R600.00',
        description: 'Comfortable hoodie with eye-catching graphic prints. Perfect for casual outings.',
        mainImage: './image/product/p72.png',
        gallery: ['./image/product/p71.png', './image/product/p70.png', './image/product/p72.png', './image/product/p68.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p73': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p73.png',
        gallery: ['./image/product/p76.png', './image/product/p75.png', './image/product/p74.png', './image/product/p73.png'],
        rating: 4,
        category: 'Hats'
    },
    'p74': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p74.png',
        gallery: ['./image/product/p76.png', './image/product/p75.png', './image/product/p74.png', './image/product/p73.png'],
        rating: 4,
        category: 'Hats'
    },
    'p75': {
        name: 'Knitted Beanie', 
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p75.png',
        gallery: ['./image/product/p76.png', './image/product/p75.png', './image/product/p74.png', './image/product/p73.png'],
        rating: 4,
        category: 'Hats'
    },
    'p76': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p76.png',
        gallery: ['./image/product/p76.png', './image/product/p75.png', './image/product/p74.png', './image/product/p73.png'],
        rating: 4,
        category: 'Hats'
    },
    'p77': {
        name: 'Knitted Beanie',
        price: 'R100.00',
        description: 'Soft and warm knitted beanie to keep you cozy during cold weather.',
        mainImage: './image/product/p77.png',
        gallery: ['./image/product/p76.png', './image/product/p75.png', './image/product/p77.png', './image/product/p73.png'],
        rating: 4,
        category: 'Hats'
    },
    'p78': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p78.png',
        gallery: ['./image/product/p78.png', './image/product/p82.png', './image/product/p79.png', './image/product/p80.png'],
        rating: 4,
        category: 'Shoes'
    },
    'p79': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p79.png',
        gallery: ['./image/product/p79.png', './image/product/p82.png', './image/product/p78.png', './image/product/p80.png'],
        rating: 4,
        category: 'Shoes'
    },
    'p80': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p80.png',
        gallery: ['./image/product/p80.png', './image/product/p82.png', './image/product/p79.png', './image/product/p78.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p81': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p81.png',
        gallery: ['./image/product/p81.png', './image/product/p82.png', './image/product/p79.png', './image/product/p78.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p82': {
        name: 'Casual Sneakers',
        price: 'R900.00',
        description: 'Trendy casual sneakers for everyday wear. Comfortable and stylish.',
        mainImage: './image/product/p82.png',
        gallery: ['./image/product/p81.png', './image/product/p82.png', './image/product/p79.png', './image/product/p78.png'],
        rating: 5,
        category: 'Shoes'
    },
    'p83': {
        name: 'Wrist Watch',
        price: 'R1200.00',
        description: 'Elegant wristwatch with a sleek design. Ideal for formal and casual events.',
        mainImage: './image/product/p83.png',
        gallery: ['./image/product/p85.png', './image/product/p86.png', './image/product/p83.png', './image/product/p84.png'],
        rating: 5,
        category: 'Accessories'
    },
    'p84': {
        name: 'Wrist Watch',
        price: 'R1200.00',
        description: 'Elegant wristwatch with a sleek design. Ideal for formal and casual events.',
        mainImage: './image/product/p84.png',
        gallery: ['./image/product/p85.png', './image/product/p86.png', './image/product/p83.png', './image/product/p84.png'],
        rating: 5,
        category: 'Accessories'
    },
    'p85': {
        name: 'Wrist Watch',
        price: 'R1200.00',        
        description: 'Elegant wristwatch with a sleek design. Ideal for formal and casual events.',
        mainImage: './image/product/p85.png',
        gallery: ['./image/product/p85.png', './image/product/p86.png', './image/product/p83.png', './image/product/p84.png'],
        rating: 5,
        category: 'Accessories'
    },
    'p86': {
        name: 'Wrist Watch',
        price: 'R1200.00',
        description: 'Elegant wristwatch with a sleek design. Ideal for formal and casual events.',
        mainImage: './image/product/p86.png',
        gallery: ['./image/product/p85.png', './image/product/p86.png', './image/product/p83.png', './image/product/p84.png'],
        rating: 5,
        category: 'Accessories'
    },
    'p87': {
        name: 'Wrist Watch',
        price: 'R1200.00',
        description: 'Elegant wristwatch with a sleek design. Ideal for formal and casual events.',
        mainImage: './image/product/p87.png',
        gallery: ['./image/product/p85.png', './image/product/p87.png', './image/product/p83.png', './image/product/p86.png'],
        rating: 5,
        category: 'Accessories'
    },
    'p88': {
        name: 'Formal Shirt',
        price: 'R400.00',
        description: 'Crisp formal shirt made with high-quality fabric. Ideal for office wear.',
        mainImage: './image/product/p88.png',
        gallery: ['./image/product/p88.png', './image/product/p89.png', './image/product/p90.png', './image/product/p91.png'],
        rating: 4,
        category: 'Shirts'
    },
    'p89': {
        name: 'Formal Shirt',
        price: 'R400.00',
        description: 'Crisp formal shirt made with high-quality fabric. Ideal for office wear.',
        mainImage: './image/product/p89.png',
        gallery: ['./image/product/p88.png', './image/product/p89.png', './image/product/p90.png', './image/product/p91.png'],
        rating: 4,
        category: 'Shirts'
    },  
    'p90': {
        name: 'Formal Shirt',
        price: 'R400.00',
        description: 'Crisp formal shirt made with high-quality fabric. Ideal for office wear.',
        mainImage: './image/product/p90.png',
        gallery: ['./image/product/p88.png', './image/product/p89.png', './image/product/p90.png', './image/product/p91.png'],
        rating: 4,
        category: 'Shirts'
    },
    'p91': {
        name: 'Formal Shirt',
        price: 'R400.00',
        description: 'Crisp formal shirt made with high-quality fabric. Ideal for office wear.',
        mainImage: './image/product/p91.png',
        gallery: ['./image/product/p90.png', './image/product/p89.png', './image/product/p88.png', './image/product/p91.png'],
        rating: 4,
        category: 'Shirts'
    },
    'p92': {
        name: 'Summer Dress',
        price: 'R550.00',
        description: 'Flowy and lightweight summer dress. Perfect for sunny days and beach outings.',
        mainImage: './image/product/p92.png',
        gallery: ['./image/product/p92.png', './image/product/p93.png', './image/product/p94.png', './image/product/p95.png'],
        rating: 5,
        category: 'Dresses'
    },
    'p93': {
        name: 'Summer Dress',
        price: 'R550.00',        
        description: 'Flowy and lightweight summer dress. Perfect for sunny days and beach outings.',        
        mainImage: './image/product/p93.png',
        gallery: ['./image/product/p92.png', './image/product/p93.png', './image/product/p94.png', './image/product/p95.png'],
        rating: 5,
        category: 'Dresses'
    },
    'p94': {
        name: 'Summer Dress',
        price: 'R550.00',
        description: 'Flowy and lightweight summer dress. Perfect for sunny days and beach outings.',
        mainImage: './image/product/p94.png',
        gallery: ['./image/product/p92.png', './image/product/p93.png', './image/product/p94.png', './image/product/p95.png'],
        rating: 5,
        category: 'Dresses'
    },
    'p95': {
        name: 'Summer Dress',
        price: 'R550.00',
        description: 'Flowy and lightweight summer dress. Perfect for sunny days and beach outings.',
        mainImage: './image/product/p95.png',
        gallery: ['./image/product/p96.png', './image/product/p95.png', './image/product/p92.png', './image/product/p93.png'],
        rating: 5,
        category: 'Dresses'
    },
    'p96': {
        name: 'Summer Dress',
        price: 'R550.00',
        description: 'Flowy and lightweight summer dress. Perfect for sunny days and beach outings.',
        mainImage: './image/product/p96.png',
        gallery: ['./image/product/p96.png', './image/product/p95.png', './image/product/p92.png', './image/product/p93.png'],
        rating: 5,
        category: 'Dresses'
    },
    'p97': {
        name: 'Summer Dress',
        price: 'R550.00',
        description: 'Flowy and lightweight summer dress. Perfect for sunny days and beach outings.',
        mainImage: './image/product/p97.png',
        gallery: ['./image/product/p96.png', './image/product/p97.png', './image/product/p94.png', './image/product/p93.png'],
        rating: 5,
        category: 'Dresses'
    },
    'p98': {
        name: 'Wool Coat',
        price: 'R1000.00',
        description: 'Luxurious wool coat for a sophisticated and warm winter look.',
        mainImage: './image/product/p98.png',
        gallery: ['./image/product/p104.png', './image/product/p98.png', './image/product/p99.png', './image/product/p100.png'],
        rating: 5,
        category: 'Coats'
    },
    'p99': {
        name: 'Wool Coat',
        price: 'R1000.00',
        description: 'Luxurious wool coat for a sophisticated and warm winter look.',
        mainImage: './image/product/p99.png',
        gallery: ['./image/product/p104.png', './image/product/p98.png', './image/product/p99.png', './image/product/p100.png'],
        rating: 5,
        category: 'Coats'
    },  
    'p100': {
        name: 'Wool Coat',
        price: 'R1000.00',
        description: 'Luxurious wool coat for a sophisticated and warm winter look.',
        mainImage: './image/product/p100.png',
        gallery: ['./image/product/p104.png', './image/product/p98.png', './image/product/p99.png', './image/product/p100.png'],
        rating: 5,
        category: 'Coats'
    },
    'p101': {
        name: 'Wool Coat',
        price: 'R1000.00',
        description: 'Luxurious wool coat for a sophisticated and warm winter look.',
        mainImage: './image/product/p101.png',
        gallery: ['./image/product/p103.png', './image/product/p102.png', './image/product/p101.png', './image/product/p100.png'],
        rating: 5,
        category: 'Coats'
    },
    'p102': {
        name: 'Wool Coat',
        price: 'R1000.00',
        description: 'Luxurious wool coat for a sophisticated and warm winter look.',
        mainImage: './image/product/p102.png',
        gallery: ['./image/product/p103.png', './image/product/p102.png', './image/product/p101.png', './image/product/p100.png'],
        rating: 5,
        category: 'Coats'
    },
    'p103': {
        name: 'Wool Coat',
        price: 'R1000.00',
        description: 'Luxurious wool coat for a sophisticated and warm winter look.',
        mainImage: './image/product/p103.png',
        gallery: ['./image/product/p103.png', './image/product/p102.png', './image/product/p101.png', './image/product/p100.png'],
        rating: 5,
        category: 'Coats'
    },
    'p104': {
        name: 'Wool Coat',
        price: 'R1000.00',
        description: 'Luxurious wool coat for a sophisticated and warm winter look.',
        mainImage: './image/product/p104.png',
        gallery: ['./image/product/p104.png', './image/product/p98.png', './image/product/p99.png', './image/product/p100.png'],
        rating: 5,
        category: 'Coats'
    },
    'p105': {
        name: 'Running Shorts',
        price: 'R300.00',
        description: 'Breathable running shorts for active lifestyles. Comfortable fit and modern design.',
        mainImage: './image/product/p105.png',
        gallery: ['./image/product/p105.png', './image/product/p106.png', './image/product/p107.png', './image/product/p108.png'],
        rating: 4,
        category: 'Activewear'
    },
    'p106': {
        name: 'Running Shorts',
        price: 'R300.00',
        description: 'Breathable running shorts for active lifestyles. Comfortable fit and modern design.',
        mainImage: './image/product/p106.png',
        gallery: ['./image/product/p106.png', './image/product/p107.png', './image/product/p108.png', './image/product/p109.png'],
        rating: 4,
        category: 'Activewear'
    },
    'p107': {
        name: 'Running Shorts',
        price: 'R300.00',
        description: 'Breathable running shorts for active lifestyles. Comfortable fit and modern design.',
        mainImage: './image/product/p107.png',
        gallery: ['./image/product/p107.png', './image/product/p108.png', './image/product/p109.png', './image/product/p106.png'],
        rating: 4,
        category: 'Activewear'
    },
    'p108': {
        name: 'Running Shorts',
        price: 'R300.00',
        description: 'Breathable running shorts for active lifestyles. Comfortable fit and modern design.',
        mainImage: './image/product/p108.png',
        gallery: ['./image/product/p108.png', './image/product/p109.png', './image/product/p110.png', './image/product/p106.png'],
        rating: 4,
        category: 'Activewear'
    },
    'p109': {
        name: 'Running Shorts',
        price: 'R300.00',
        description: 'Breathable running shorts for active lifestyles. Comfortable fit and modern design.',
        mainImage: './image/product/p109.png',
        gallery: ['./image/product/p109.png', './image/product/p105.png', './image/product/p107.png', './image/product/p106.png'],
        rating: 4,
        category: 'Activewear'
    },
    'p110': {
        name: 'Running Shorts',
        price: 'R300.00',
        description: 'Breathable running shorts for active lifestyles. Comfortable fit and modern design.',
        mainImage: './image/product/p110.png',
        gallery: ['./image/product/p110.png', './image/product/p108.png', './image/product/p107.png', './image/product/p106.png'],
        rating: 4,
        category: 'Activewear'
    },
    'p111': {
        name: 'Gym Bag',
        price: 'R800.00',
        description: 'Spacious and durable gym bag with multiple compartments for all your essentials.',
        mainImage: './image/product/p111.png',
        gallery: ['./image/product/p111.png', './image/product/p112.png', './image/product/p113.png', './image/product/p114.png'],
        rating: 4,
        category: 'Bags'
    },
    'p112': {
        name: 'Gym Bag',
        price: 'R800.00',
        description: 'Spacious and durable gym bag with multiple compartments for all your essentials.',
        mainImage: './image/product/p112.png',
        gallery: ['./image/product/p113.png', './image/product/p112.png', './image/product/p115.png', './image/product/p116.png'],
        rating: 4,
        category: 'Bags'
    },
    'p113': {
        name: 'Gym Bag',
        price: 'R800.00',
        description: 'Spacious and durable gym bag with multiple compartments for all your essentials.',
        mainImage: './image/product/p113.png',
        gallery: ['./image/product/p113.png', './image/product/p112.png', './image/product/p114.png', './image/product/p115.png'],
        rating: 4,
        category: 'Bags'
    },
    'p114': {
        name: 'Gym Bag',
        price: 'R800.00',
        description: 'Spacious and durable gym bag with multiple compartments for all your essentials.',
        mainImage: './image/product/p114.png',
        gallery: ['./image/product/p114.png', './image/product/p112.png', './image/product/p113.png', './image/product/p115.png'],
        rating: 4,
        category: 'Bags'
    },
    'p115': {
        name: 'Gym Bag',
        price: 'R800.00',
        description: 'Spacious and durable gym bag with multiple compartments for all your essentials.',
        mainImage: './image/product/p115.png',
        gallery: ['./image/product/p115.png', './image/product/p112.png', './image/product/p113.png', './image/product/p114.png'],
        rating: 4,
        category: 'Bags'
    },
    'p116': {
        name: 'Gym Bag',
        price: 'R800.00',
        description: 'Spacious and durable gym bag with multiple compartments for all your essentials.',
        mainImage: './image/product/p116.png',
        gallery: ['./image/product/p116.png', './image/product/p112.png', './image/product/p113.png', './image/product/p114.png'],
        rating: 4,
        category: 'Bags'
    },
    'p117': {
        name: 'Gym Bag',
        price: 'R800.00',
        description: 'Spacious and durable gym bag with multiple compartments for all your essentials.',
        mainImage: './image/product/p117.png',
        gallery: ['./image/product/p112.png', './image/product/p113.png', './image/product/p114.png', './image/product/p117.png'],
        rating: 4,
        category: 'Bags'
    },
    'p118': {
        name: 'Leather Wallet',
        price: 'R250.00',
        description: 'Premium leather wallet with multiple compartments for cards, cash, and coins.',
        mainImage: './image/product/p118.png',
        gallery: ['./image/product/p118.png', './image/product/p122.png', './image/product/p121.png', './image/product/p119.png'],
        rating: 4,
        category: 'Accessories'
    },
    'p119': {
        name: 'Leather Wallet',
        price: 'R250.00',
        description: 'Premium leather wallet with multiple compartments for cards, cash, and coins.',
        mainImage: './image/product/p119.png',
        gallery: ['./image/product/p119.png', './image/product/p122.png', './image/product/p121.png', './image/product/p118.png'],
        rating: 4,
        category: 'Accessories'
    },
    'p120': {
        name: 'Leather Wallet',
        price: 'R250.00',
        description: 'Premium leather wallet with multiple compartments for cards, cash, and coins.',
        mainImage: './image/product/p119.png',
        gallery: ['./image/product/p120.png', './image/product/p122.png', './image/product/p121.png', './image/product/p118.png'],
        rating: 4,
        category: 'Accessories'
    },
    'p121': {
        name: 'Leather Wallet',
        price: 'R250.00',
        description: 'Premium leather wallet with multiple compartments for cards, cash, and coins.',
        mainImage: './image/product/p118.png',
        gallery: ['./image/product/p118.png', './image/product/p122.png', './image/product/p121.png', './image/product/p119.png'],
        rating: 4,
        category: 'Accessories'
    },
    'p122': {
        name: 'Leather Wallet',
        price: 'R250.00',
        description: 'Premium leather wallet with multiple compartments for cards, cash, and coins.',
        mainImage: './image/product/p122.png',
        gallery: ['./image/product/p120.png', './image/product/p119.png', './image/product/p121.png', './image/product/p118.png'],
        rating: 4,
        category: 'Accessories'
    },
};


document.addEventListener('DOMContentLoaded', function() {
    const productElements = document.querySelectorAll('.product');
    productElements.forEach(product => {
        product.addEventListener('click', function(e) {
            const imgSrc = this.querySelector('img').src;
            const productId = imgSrc.split('/').pop().split('.')[0];
            
            if (products[productId]) {
                localStorage.setItem('selectedProduct', JSON.stringify(products[productId]));
                window.location.href = 'product.html';
            }
        });
    });

    if (window.location.pathname.includes('product.html')) {
        loadProductDetails();
    }

    updateCartCounter();
});

function loadProductDetails() {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (!selectedProduct) return;

    const mainImg = document.getElementById('mainImg');
    if (mainImg) mainImg.src = selectedProduct.mainImage;

    document.querySelector('h3.py-4').textContent = selectedProduct.name;
    document.querySelector('h2').textContent = selectedProduct.price;
    document.querySelector('span').textContent = selectedProduct.description;
    document.querySelector('h6').textContent = `Home / ${selectedProduct.category}`;

    const smallImgs = document.querySelectorAll('.small-img');
    selectedProduct.gallery.forEach((img, index) => {
        if (smallImgs[index]) {
            smallImgs[index].src = img;
        }
    });

    const stars = document.querySelectorAll('.star i');
    stars.forEach((star, index) => {
        if (index < selectedProduct.rating) {
            star.className = 'fa-solid fa-star';
        } else {
            star.className = 'fa-regular fa-star';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.small-img');
    const mainImage = document.getElementById('mainImg');

    smallImages.forEach(img => {
        img.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});
// document.addEventListener('DOMContentLoaded', function() {
//     const smallImages = document.querySelectorAll('.small-img');
//     const mainImage = document.getElementById('mainImg');

//     smallImages.forEach(img => {
//         img.addEventListener('click', function() {
//             mainImage.src = this.src;
            
//             // Find the product ID from the clicked image
//             const imgPath = this.src;
//             const imgFilename = imgPath.split('/').pop();
            
//             // Find the product that contains this image in its gallery
//             for (const productId in products) {
//                 const product = products[productId];
//                 if (product.gallery.some(galleryImg => galleryImg.includes(imgFilename))) {
//                     // Update the selected product in localStorage
//                     localStorage.setItem('selectedProduct', JSON.stringify(product));
//                     // Update the product details on the page
//                     loadProductDetails();
//                     break;
//                 }
//             }
//         });
//     });
// });


function updateCartCounter() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartLink = document.querySelector('a[href="cart.html"] i');
    
    if (cartLink) {
        const existingCounter = cartLink.parentNode.querySelector('.cart-counter');
        if (existingCounter) {
            existingCounter.remove();
        }

        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        
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
            cartLink.parentNode.style.position = 'relative';
            cartLink.parentNode.appendChild(counterSpan);
        }
    }
}

function addToCart(product, size, quantity) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const cartItem = {
        name: product.name,
        price: product.price,
        size: size,
        quantity: quantity,
        image: product.mainImage
    };

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
}
