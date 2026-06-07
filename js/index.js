
const products = {
    'p1': {
        name: '"Black Adonai" Black T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ central role in the universe.',
        mainImage: './image/Mock_ups/Adonai/Black_adonai_p1.jpg',
        gallery: ['./image/Mock_ups/Adonai/Black_hoodie_Adonai_p2.jpg', './image/Mock_ups/Adonai/White_adonai_p3.jpg', './image/Mock_ups/Adonai/White_Hoodie_p4.jpg', './image/Mock_ups/Adonai/Black_adonai_p1.jpg'],
        rating: 4,
        category: 'T-Shirts'
    },
    'p2': {
        name: '"Black Adonai" Black Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ central role in the universe.',
        mainImage: './image/Mock_ups/Adonai/Black_hoodie_Adonai_p2.jpg',
        gallery: ['./image/Mock_ups/Adonai/Black_adonai_p1.jpg', './image/Mock_ups/Adonai/White_adonai_p3.jpg', './image/Mock_ups/Adonai/White_Hoodie_p4.jpg', './image/Mock_ups/Adonai/Black_adonai_p1.jpg'],
        rating: 4,
        category: 'Hoodies'
    },
    'p3': {
        name: '"White Adonai" White T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ central role in the universe.',
        mainImage: './image/Mock_ups/Adonai/White_adonai_p3.jpg',
        gallery: ['./image/Mock_ups/Adonai/Black_adonai_p1.jpg', './image/Mock_ups/Adonai/Black_hoodie_Adonai_p2.jpg', './image/Mock_ups/Adonai/White_Hoodie_p4.jpg', './image/Mock_ups/Adonai/Black_adonai_p1.jpg'],
        rating: 4,
        category: 'T-Shirts'
    },
    'p4': {
        name: '"White Adonai" White Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ central role in the universe.',
        mainImage:  './image/Mock_ups/Adonai/White_Hoodie_p4.jpg',
        gallery: ['./image/Mock_ups/Adonai/Black_adonai_p1.jpg', './image/Mock_ups/Adonai/Black_hoodie_Adonai_p2.jpg', './image/Mock_ups/Adonai/White_adonai_p3.jpg', './image/Mock_ups/Adonai/Black_adonai_p1.jpg'],
        rating: 4,
        category: 'Hoodies'
    },
    'p5': {
        name: '"5 Panel Cap" Bark Blue',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  '/image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_barkblue_p5.png',
        gallery: ['./image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_blue_p6.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_green_p7.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_red_p8.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_barkblue_p5.png'],
        rating: 4,
        category: 'Hat'
    },
    'p6': {
        name: '"5 Panel Cap" Blue',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_blue_p6.png',
        gallery: ['./image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_barkblue_p5.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_green_p7.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_red_p8.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_blue_p6.png'],
        rating: 4,
        category: 'Hat'
    },
    'p7': {
        name: '"5 Panel Cap" Green',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_green_p7.png',
        gallery: ['./image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_barkblue_p5.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_blue_p6.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_red_p8.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_green_p7.png'],
        rating: 4,
        category: 'Hat'
    },
    'p8': {
        name: '"5 Panel Cap" Red',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_red_p8.png',
        gallery: ['./image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_barkblue_p5.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_blue_p6.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_green_p7.png', './image/Mock_ups/Caps/5_Panel_cap/5_Panel_cap_red_p8.png'],
        rating: 4,
        category: 'Hat'
    },
    'p9': {
        name: '"Beanie" Black',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Beanies/beanie_black_p9.png',
        gallery: ['./image/Mock_ups/Caps/Beanies/Beanies_blue_p13.png', './image/Mock_ups/Caps/Beanies/Beanies_gray_p10.png', './image/Mock_ups/Caps/Beanies/Beanies_green_p11.png', './image/Mock_ups/Caps/Beanies/beanie_black_p9.png'],
        rating: 4,
        category: 'Hat'
    },
    'p10': {
        name: '"Beanie" Gray',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Beanies/beanie_gray_p10.png',
        gallery: ['./image/Mock_ups/Caps/Beanies/Beanies_blue_p13.png', './image/Mock_ups/Caps/Beanies/Beanies_gray_p10.png', './image/Mock_ups/Caps/Beanies/Beanies_green_p11.png', './image/Mock_ups/Caps/Beanies/beanie_black_p9.png'],
        rating: 4,
        category: 'Hat'
    },
    'p11': {
        name: '"Beanie" Green',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Beanies/Beanies_green_p11.png',
        gallery: ['./image/Mock_ups/Caps/Beanies/Beanies_blue_p13.png', './image/Mock_ups/Caps/Beanies/Beanies_gray_p10.png', './image/Mock_ups/Caps/Beanies/Beanies_green_p11.png', './image/Mock_ups/Caps/Beanies/beanie_black_p9.png'],
        rating: 4,
        category: 'Hat'
    },
    'p12': {
        name: '"Beanie" Pink',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Beanies/Beanies_pink_p12.png',
        gallery: ['./image/Mock_ups/Caps/Beanies/Beanies_red_p14.png', './image/Mock_ups/Caps/Beanies/Beanies_white_p15.png', './image/Mock_ups/Caps/Beanies/Beanies_pink_p12.png'],
        rating: 4,
        category: 'Hat'
    },
    'p13': {
        name: '"Beanie" Blue',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Beanies/Beanies_blue_p13.png',
        gallery: ['./image/Mock_ups/Caps/Beanies/Beanies_blue_p13.png', './image/Mock_ups/Caps/Beanies/Beanies_gray_p10.png', './image/Mock_ups/Caps/Beanies/Beanies_green_p11.png', './image/Mock_ups/Caps/Beanies/beanie_black_p9.png'],
        rating: 4,
        category: 'Hat'
    },
    'p14': {
        name: '"Beanie" Red',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Beanies/Beanies_red_p14.png',
        gallery: ['./image/Mock_ups/Caps/Beanies/Beanies_red_p14.png', './image/Mock_ups/Caps/Beanies/Beanies_white_p15.png', './image/Mock_ups/Caps/Beanies/Beanies_pink_p12.png'],
        rating: 4,
        category: 'Hat'
    },
    'p15': {
        name: '"Beanie" white',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Beanies/Beanies_white_p15.png',
        gallery: ['./image/Mock_ups/Caps/Beanies/Beanies_red_p14.png', './image/Mock_ups/Caps/Beanies/Beanies_white_p15.png', './image/Mock_ups/Caps/Beanies/Beanies_pink_p12.png'],
        rating: 4,
        category: 'Hat'
    },
    'p16': {
        name: '"Bucket Caps" Black',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_black_p16.png',
        gallery: ['./image/Mock_ups/Caps/Bucket_caps/Bucket_caps_blue_p17.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_green_p18.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_pink_p19.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_black_p16.png'],
        rating: 4,
        category: 'Hat'
    },
    'p17': {
        name: '"Bucket Caps" Blue',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_blue_p17.png',
        gallery: ['./image/Mock_ups/Caps/Bucket_caps/Bucket_caps_black_p16.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_green_p18.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_pink_p19.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_blue_p17.png'],
        rating: 4,
        category: 'Hat'
    },
    'p18': {
        name: '"Bucket Caps" Green',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_green_p18.png',
        gallery: ['./image/Mock_ups/Caps/Bucket_caps/Bucket_caps_black_p16.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_blue_p17.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_pink_p19.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_green_p18.png'],
        rating: 4,
        category: 'Hat'
    },
    'p19': {
        name: '"Bucket Caps" Pink',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_pink_p19.png',
        gallery: ['./image/Mock_ups/Caps/Bucket_caps/Bucket_caps_black_p16.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_blue_p17.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_green_p18.png', './image/Mock_ups/Caps/Bucket_caps/Bucket_caps_pink_p19.png'],
        rating: 4,
        category: 'Hat'
    },
    'p20': {
        name: '"Golf Cap" Black',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Golf_cap/Golf_cap_black_p20.PNG',
        gallery: ['./image/Mock_ups/Caps/Golf_cap/Golf_cap_black_p20.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_green_p22.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_maroon_p23.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_red_p24.PNG'],
        rating: 4,
        category: 'Hat'
    },
    'p21': {
        name: '"Golf Cap" Blue',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Golf_cap/Golf_cap_blue_p21.PNG',
        gallery: ['./image/Mock_ups/Caps/Golf_cap/Golf_cap_white_p25.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_blue_p21.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_green_p22.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_maroon_p23.PNG'],
        rating: 4,
        category: 'Hat'
    },
    'p22': {
        name: '"Golf Cap" Green',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Golf_cap/Golf_cap_green_p22.PNG',
        gallery:['./image/Mock_ups/Caps/Golf_cap/Golf_cap_black_p20.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_green_p22.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_maroon_p23.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_red_p24.PNG'],
        category: 'Hat'
    },
    'p23': {
        name: '"Golf Cap" Maroon',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Golf_cap/Golf_cap_maroon_p23.PNG',
        gallery: ['./image/Mock_ups/Caps/Golf_cap/Golf_cap_black_p20.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_green_p22.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_maroon_p23.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_red_p24.PNG'],
        rating: 4,
        category: 'Hat'
    },
    'p24': {
        name: '"Golf Cap" Red',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Golf_cap/Golf_cap_red_p24.PNG',
        gallery: ['./image/Mock_ups/Caps/Golf_cap/Golf_cap_black_p20.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_green_p22.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_maroon_p23.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_red_p24.PNG'],
        rating: 4,
        category: 'Hat'
    },
    'p25': {
        name: '"Golf Cap" White',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Golf_cap/Golf_cap_white_p25.PNG',
        gallery: ['./image/Mock_ups/Caps/Golf_cap/Golf_cap_white_p25.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_blue_p21.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_green_p22.PNG', './image/Mock_ups/Caps/Golf_cap/Golf_cap_maroon_p23.PNG'],
        rating: 4,
        category: 'Hat'
    },
    'p26': {
        name: '"Packable Hat" Black',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Packable_hat/packable_hat_black_p26.png',
        gallery: ['./image/Mock_ups/Caps/Packable_hat/packable_hat_blue_p27.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_green_p28.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_pink_p29.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_black_p26.png'],
        rating: 4,
        category: 'Hat'
    },
    'p27': {
        name: '"Packable Hat" Blue',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Packable_hat/packable_hat_blue_p27.png',
        gallery: ['./image/Mock_ups/Caps/Packable_hat/packable_hat_black_p26.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_green_p28.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_pink_p29.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_blue_p27.png'],
        rating: 4,
        category: 'Hat'
    },
    'p28': {
        name: '"Packable Hat" Green',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Packable_hat/packable_hat_green_p28.png',
        gallery: ['/image/Mock_ups/Caps/Packable_hat/packable_hat_black_p26.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_blue_p27.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_pink_p29.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_green_p28.png'],
        rating: 4,
        category: 'Hat'
    },
    'p29': {
        name: '"Packable Hat" Pink',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Packable_hat/packable_hat_pink_p29.png',
        gallery: ['/image/Mock_ups/Caps/Packable_hat/packable_hat_black_p26.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_blue_p27.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_green_p28.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_green_p28.png'],
        rating: 4,
        category: 'Hat'
    },
    'p30': {
        name: '"Packable Hat" Red',
        price: 'R160.00',
        description: 'Inspire faith and spirituality with our collection of Christian accessories, featuring powerful designs and scriptures that celebrate the love and grace of Jesus Christ.',
        mainImage:  './image/Mock_ups/Caps/Packable_hat/packable_hat_red_p30.png',
        gallery: ['/image/Mock_ups/Caps/Packable_hat/packable_hat_red_p30.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_blue_p27.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_green_p28.png', './image/Mock_ups/Caps/Packable_hat/packable_hat_pink_p29.png'],
        rating: 4,
        category: 'Hat'
    },
    'p31': {
        name: '"Christ The Son" Black Hoodie',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Christ_the_son/Christ_the_son_hoodie_p31.png',
        gallery: ['/image/Mock_ups/Christ_the_son/Christ_the_son_shirt_p32.png', './image/Mock_ups/Christ_the_son/Christ_the_son_white_p33.png', './image/Mock_ups/Christ_the_son/Christ_the_son_hoodie_p31.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p32': {
        name: '"Christ The Son" Black T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Christ_the_son/Christ_the_son_shirt.png_p32',
        gallery: ['./image/Mock_ups/Christ_the_son/Christ_the_son_shirt.png_p32', '/image/Mock_ups/Christ_the_son/Christ_the_son_hoodie_p31.png', './image/Mock_ups/Christ_the_son/Christ_the_son_white_p33.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p33': {
        name: '"Christ The Son" White T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Christ_the_son/Christ_the_son_white_p33.png',
        gallery: ['./image/Mock_ups/Christ_the_son/Christ_the_son_white_p33.png', './image/Mock_ups/Christ_the_son/Christ_the_son_hoodie_p31.png', './image/Mock_ups/Christ_the_son/Christ_the_son_shirt_p32.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p34': {
        name: '"Citizen of Heaven" Beige Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_b_hoodie_p34.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_hoodie_p35.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_hoodie_p36.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_hoodie_p37.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_b_hoodie_p34.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p35': {
        name: '"Citizen of Heaven" Brown Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_hoodie_p35.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_b_hoodie_p34.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_hoodie_p36.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_hoodie_p37.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_hoodie_p35.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p36': {
        name: '"Citizen of Heaven" Violet Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_hoodie_p36.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_b_hoodie_p34.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_hoodie_p36.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_hoodie_p37.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_hoodie_p35.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p37': {
        name: '"Citizen of Heaven" White Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_hoodie_37.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_b_hoodie_p34.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_hoodie_p36.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_hoodie_p37.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_hoodie_p35.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p38': {
        name: '"Citizen of Heaven" Red Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_red_hoodie_38.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_hoodie_p39.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_red_hoodie_38.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_hoodie_p40.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_hoodie_p37.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p39': {
        name: '"Citizen of Heaven" Pink Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_hoodie_p39.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_hoodie_p39.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_red_hoodie_38.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_hoodie_p40.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_hoodie_p37.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p40': {
        name: '"Citizen of Heaven" Black Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_hoodie_p40.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_hoodie_p39.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_red_hoodie_p38.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_hoodie_p40.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_hoodie_p37.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p41': {
        name: '"Citizen of Heaven" Beige T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_beige_p41.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_black_p42.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_p43.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_p47.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_beige_p41.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p42': {
        name: '"Citizen of Heaven" Black T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_black_p42.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_black_p42.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_p43.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_47.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_beige_p41.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p43': {
        name: '"Citizen of Heaven" Brown T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_p43.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_black_p42.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_p43.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_47.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_beige_p41.png'],
        category: 'T-Shirt'
    },
    'p44': {
        name: '"Citizen of Heaven" Violet T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_p44.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_p45.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_p43.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_p44.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_red_p46.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p45': {
        name: '"Citizen of Heaven" White T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_p45.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_p45.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_p43.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_p44.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_red_p46.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p46': {
        name: '"Citizen of Heaven" Red T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_red_p46.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_white_p45.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_p43.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_violet_p44.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_red_p46.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p47': {
        name: '"Citizen of Heaven" Pink T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_p47.png',
        gallery: ['./image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_black_p42.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_brown_p43.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_pink_47.png', './image/Mock_ups/Citizen_of_heaven/Citizen_of_heaven_beige_p41.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p48': {
        name: '"Ephesians 1:22" Black T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Ephesians_1_22/Ephesians_1_22_black_p48.png',
        gallery: ['./image/Mock_ups/Ephesians_1_22/Ephesians_1_22_white_p49.png', './image/Mock_ups/Ephesians_1_22/Ephesians_1_22_black_p48.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p49': {
        name: '"Ephesians 1:22" White T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Ephesians_1_22/Ephesians_1_22_white_p49.png',
        gallery: ['./image/Mock_ups/Ephesians_1_22/Ephesians_1_22_black_p48.png', './image/Mock_ups/Ephesians_1_22/Ephesians_1_22_white_p49.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p50': {
        name: '"Ephesians 1:22" Black Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Ephesians_1_22/Ephesians_1_22_hoodie_p50.png',
        gallery: ['./image/Mock_ups/Ephesians_1_22/Ephesians_1_22_w_hoodie_p51.png', './image/Mock_ups/Ephesians_1_22/Ephesians_1_22_hoodie_p50.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p51': {
        name: '"Ephesians 1:22" White Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Ephesians_1_22/Ephesians_1_22_w_hoodie_p51.png',
        gallery: ['./image/Mock_ups/Ephesians_1_22/Ephesians_1_22_hoodie_p50.png', './image/Mock_ups/Ephesians_1_22/Ephesians_1_22_w_hoodie_p51.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p52': {
        name: '"Jesus Christ" Black T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/He_deafed_death/maneken-STDIO3_p52.jpg',
        gallery: ['./image/Mock_ups/He_deafed_death/maneken-STDIO3_p52.jpg', './image/Mock_ups/He_deafed_death/maneken-CrewneckBack_p53.jpg'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p53': {
        name: '"Jesus Christ" Black T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/He_deafed_death/maneken-CrewneckBack_p53.jpg',
        gallery: ['./image/Mock_ups/He_deafed_death/maneken-CrewneckBack_p53.jpg', './image/Mock_ups/He_deafed_death/maneken-STDIO3_p52.jpg'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p54': {
        name: '"Jesus Loves You" Black Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_b_hoodie_p54.png',
        gallery: ['./image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_b_hoodie_p54.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_p_hoodie_p55.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_hoodie_p56.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_green_p59.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p55': {
        name: '"Jesus Loves You" Pink Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_p_hoodie_p55.png',
        gallery: ['./image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_p_hoodie_p55.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_b_hoodie_p54.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_hoodie_p56.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_green_p59.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p56': {
        name: '"Jesus Loves You" Purple Hoodie',
        price: 'R450.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_hoodie_p56.png',
        gallery: ['./image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_hoodie_p56.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_b_hoodie_p54.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_p_hoodie_p55.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_green_p59.png'],
        rating: 4,
        category: 'Hoodies'
    },
    'p57': {
        name: '"Jesus Loves You" Black T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_black_p57.png',
        gallery: ['./image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_black_p57.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_green_p59.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_pink_p60.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_p61.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p58': {
        name: '"Jesus Loves You" Blue T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_blue_p58.png',
        gallery: ['./image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_black_p57.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_blue_p58.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_pink_p60.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_p61.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p59': {
        name: '"Jesus Loves You" Green T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_green_p59.png',
        gallery: ['./image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_hoodie_p56.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_b_hoodie_p54.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_p_hoodie_p55.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_green_p59.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p60': {
        name: '"Jesus Loves You" Pink T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_pink_p60.png',
        gallery: ['./image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_black_p57.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_pink_p60.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_p61.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_blue_p58.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p61': {
        name: '"Jesus Loves You" Purple T-Shirt',
        price: 'R250.00',
        description: 'Declare the universal significance of Jesus Christ with this awe-inspiring design. "Christ the Son" is emblazoned across a stunning, stylized representation of the planet Earth, emphasizing Christ\'s central role in the universe.',
        mainImage:  './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_p61.png',
        gallery: ['./image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_black_p57.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_pink_p60.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_purpl_p61.png', './image/Mock_ups/Jesus_Loves_you/Jesus_Loves_you_blue_p58.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p62': {
        name: '"Jesus Saves Lives" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_black_p62.png',
        gallery: ['./image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_black_p62.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_red_p63.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_white_p64.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p63': {
        name: '"Jesus Saves Lives" Red T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_red_p63.png',
        gallery: ['./image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_red_p63.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_black_p62.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_white_p64.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p64': {
        name: '"Jesus Saves Lives" White T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_white_p64.png',
        gallery: ['./image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_white_p64.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_black_p62.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_red_p63.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p65': {
        name: '"Jesus Saves Lives" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_h_white_p65.png',
        gallery: ['./image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_h_white_p65.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_black_hoodie_p67.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_r_hoodie_p66.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p66': {
        name: '"Jesus Saves Lives" Red Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_r_hoodie_p66.png',
        gallery: ['./image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_r_hoodie_p66.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_black_hoodie_p67.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_h_white_p65.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p67': {
        name: '"Jesus Saves Lives" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_black_hoodie_p67.png',
        gallery: ['./image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_black_hoodie_p67.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_r_hoodie_p66.png', './image/Mock_ups/Jesus_saves_lives/Jesus_saves_lives_h_white_p65.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p68': {
        name: '"John 14:6" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/John_14_6/John_14_6_b_hoodie_p68.png',
        gallery: ['./image/Mock_ups/John_14_6/John_14_6_b_hoodie_p68.png', './image/Mock_ups/John_14_6/John_14_6_w_hoodie_p69.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p69': {
        name: '"John 14:6" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/John_14_6/John_14_6_w_hoodie_p69.png',
        gallery: ['./image/Mock_ups/John_14_6/John_14_6_w_hoodie_p69.png', './image/Mock_ups/John_14_6/John_14_6_b_hoodie_p68.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p70': {
        name: '"John 14:6" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/John_14_6/John_14_6_black_p70.png',
        gallery: ['./image/Mock_ups/John_14_6/John_14_6_black_p70.png', './image/Mock_ups/John_14_6/John_14_6_white_p71.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p71': {
        name: '"John 14:6" White T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/John_14_6/John_14_6_white_p71.png',
        gallery: ['./image/Mock_ups/John_14_6/John_14_6_white_p71.png', './image/Mock_ups/John_14_6/John_14_6_blackP_p70.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p72': {
        name: '"Love The One Another" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Love_the_one_another/Love_the_one_another_black.png_p72',
        gallery: ['./image/Mock_ups/Love_the_one_another/Love_the_one_another_black.png_p72', './image/Mock_ups/Love_the_one_another/Love_the_one_another_hoodie_p73.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p73': {
        name: '"Love The One Another" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Love_the_one_another/Love_the_one_another_hoodie_p73.png',
        gallery: ['./image/Mock_ups/Love_the_one_another/Love_the_one_another_hoodie_p73.png', './image/Mock_ups/Love_the_one_another/Love_the_one_another_black_p72.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p74': {
        name: '"Luke 24:36" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Luke_24_36_Orange/Black_Hoodie_p74.png',
        gallery: ['./image/Mock_ups/Luke_24_36_Orange/Black_Hoodie_p74.png', './image/Mock_ups/Luke_24_36_Orange/Brown_p75.png', './image/Mock_ups/Luke_24_36_Orange/Green_hoodie_p76.png', './image/Mock_ups/Luke_24_36_Orange/Orange_p77.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p75': {
        name: '"Luke 24:36" Brown Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Luke_24_36_Orange/Brown_p75.png',
        gallery: ['./image/Mock_ups/Luke_24_36_Orange/Brown_p75.png', './image/Mock_ups/Luke_24_36_Orange/Black_Hoodie_p74.png', './image/Mock_ups/Luke_24_36_Orange/Green_hoodie_p76.png', './image/Mock_ups/Luke_24_36_Orange/Orange_p77.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p76': {
        name: '"Luke 24:36" Green Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Luke_24_36_Orange/Green_hoodie_p76.png',
        gallery: ['./image/Mock_ups/Luke_24_36_Orange/Green_hoodie_p76.png', './image/Mock_ups/Luke_24_36_Orange/Black_Hoodie_p74.png', './image/Mock_ups/Luke_24_36_Orange/Brown_p75.png', './image/Mock_ups/Luke_24_36_Orange/Orange_p77.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p77': {
        name: '"Luke 24:36" Orange Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Luke_24_36_Orange/Orange_p77.png',
        gallery: ['./image/Mock_ups/Luke_24_36_Orange/Orange_p77.png', './image/Mock_ups/Luke_24_36_Orange/Black_Hoodie_p74.png', './image/Mock_ups/Luke_24_36_Orange/Brown_p75.png', './image/Mock_ups/Luke_24_36_Orange/Green_hoodie_p76.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p78': {
        name: '"Luke 24:36" Orange T-Shirt',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Luke_24_36_Orange/Orange_tee_p78.png',
        gallery: ['./image/Mock_ups/Luke_24_36_Orange/Orange_tee_p78.png', './image/Mock_ups/Luke_24_36_Orange/Black_Tee_p79.png', './image/Mock_ups/Luke_24_36_Orange/Brown_tee_p80.png', './image/Mock_ups/Luke_24_36_Orange/Green_tee_p81.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p79': {
        name: '"Luke 24:36" Black T-Shirt',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Luke_24_36_Orange/Black_Tee_p79.png',
        gallery: ['./image/Mock_ups/Luke_24_36_Orange/Black_Tee_p79.png', './image/Mock_ups/Luke_24_36_Orange/Orange_tee_p78.png', './image/Mock_ups/Luke_24_36_Orange/Brown_tee_p80.png', './image/Mock_ups/Luke_24_36_Orange/Green_tee_p81.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p80': {
        name: '"Luke 24:36" Brown T-Shirt',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Luke_24_36_Orange/Brown_tee_p80.png',
        gallery: ['./image/Mock_ups/Luke_24_36_Orange/Brown_tee_p80.png', './image/Mock_ups/Luke_24_36_Orange/Orange_tee_p78.png', './image/Mock_ups/Luke_24_36_Orange/Black_Tee_p79.png', './image/Mock_ups/Luke_24_36_Orange/Green_tee_p81.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p81': {
        name: '"Luke 24:36" Green T-Shirt',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Luke_24_36_Orange/Green_tee_p81.png',
        gallery: ['./image/Mock_ups/Luke_24_36_Orange/Green_tee_p81.png', './image/Mock_ups/Luke_24_36_Orange/Orange_tee_p78.png', './image/Mock_ups/Luke_24_36_Orange/Black_Tee_p79.png', './image/Mock_ups/Luke_24_36_Orange/Brown_tee_p80.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p82': {
        name: '"Matthew 6:33" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Matthew_6_33/black_tee_p82.png',
        gallery: ['./image/Mock_ups/Matthew_6_33/dark_brown_tee_p86.png', './image/Mock_ups/Matthew_6_33/light_brown_p84.png', './image/Mock_ups/Matthew_6_33/white_W_p85.png', './image/Mock_ups/Matthew_6_33/black_tee_p82.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p83': {
        name: '"Matthew 6:33" Bark Brown T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Matthew_6_33/dark_brown_tee_p86.png',
        gallery: ['./image/Mock_ups/Matthew_6_33/dark_brown_tee_p86.png', './image/Mock_ups/Matthew_6_33/light_brown_p84.png', './image/Mock_ups/Matthew_6_33/white_W_p85.png', './image/Mock_ups/Matthew_6_33/black_tee_p82.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p84': {
        name: '"Matthew 6:33" Light Brown T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Matthew_6_33/light_brown_p84.png',
        gallery: ['./image/Mock_ups/Matthew_6_33/dark_brown_tee_p86.png', './image/Mock_ups/Matthew_6_33/light_brown_p84.png', './image/Mock_ups/Matthew_6_33/white_W_p85.png', './image/Mock_ups/Matthew_6_33/black_tee_p82.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p85': {
        name: '"Matthew 6:33" White T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Matthew_6_33/white_W_p85.png',
        gallery: ['./image/Mock_ups/Matthew_6_33/dark_brown_tee_p86.png', './image/Mock_ups/Matthew_6_33/light_brown_p84.png', './image/Mock_ups/Matthew_6_33/white_W_p85.png', './image/Mock_ups/Matthew_6_33/black_tee_p82.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p86': {
        name: '"Matthew 6:33" Dark Brown T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Matthew_6_33/dark_brown_tee_p86.png',
        gallery: ['./image/Mock_ups/Matthew_6_33/dark_brown_tee_p86.png', './image/Mock_ups/Matthew_6_33/brown_p83.png', './image/Mock_ups/Matthew_6_33/light_brown_p84.png', './image/Mock_ups/Matthew_6_33/black_tee_p82.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p87': {
        name: '"Matthew 6:33" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Matthew_6_33/white_h_p87.png',
        gallery: ['./image/Mock_ups/Matthew_6_33/white_h_p87.png', './image/Mock_ups/Matthew_6_33/black_H_p88.png', './image/Mock_ups/Matthew_6_33/brown_p83.png', './image/Mock_ups/Matthew_6_33/light_brown_hoodie.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p88': {
        name: '"Matthew 6:33" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Matthew_6_33/black_H_p88.png',
        gallery: ['./image/Mock_ups/Matthew_6_33/white_h_p87.png', './image/Mock_ups/Matthew_6_33/black_H_p88.png', './image/Mock_ups/Matthew_6_33/brown_p83.png', './image/Mock_ups/Matthew_6_33/light_brown_hoodie_p89.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p89': {
        name: '"Matthew 6:33" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Matthew_6_33/white_h_p87.png',
        gallery: ['./image/Mock_ups/Matthew_6_33/white_h_p87.png', './image/Mock_ups/Matthew_6_33/black_H_p88.png', './image/Mock_ups/Matthew_6_33/brown_p83.png', './image/Mock_ups/Matthew_6_33/light_brown_hoodie.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p90': {
        name: '"Philippines 4:13" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Philiphians_4_13/Philippines_4_13_B_p90.png',
        gallery: ['./image/Mock_ups/Philiphians_4_13/Philippines_4_13_B_p90.png', './image/Mock_ups/Philiphians_4_13/Philippines_4_13_white_p91.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p91': {
        name: '"Philippines 4:13" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Philiphians_4_13/Philippines_4_13_white_p91.png',
        gallery: ['./image/Mock_ups/Philiphians_4_13/Philippines_4_13_white_p91.png', './image/Mock_ups/Philiphians_4_13/Philippines_4_13_B_p90.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p92': {
        name: '"Philippines 4:13" White T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Philiphians_4_13/white_tee_p92.png',
        gallery: ['./image/Mock_ups/Philiphians_4_13/white_tee_p92.png', './image/Mock_ups/Philiphians_4_13/Philippines_4_13_B_tee_p93.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p93': {
        name: '"Philippines 4:13" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Philiphians_4_13/Philippines_4_13_B_tee_p93.png',
        gallery: ['./image/Mock_ups/Philiphians_4_13/Philippines_4_13_B_tee_p93.png', './image/Mock_ups/Philiphians_4_13/white_tee_p92.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p94': {
        name: '"Proverbs 3:6" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Proverbs_3_6/Black_tee_p94.png',
        gallery: ['./image/Mock_ups/Proverbs_3_6/Black_tee_p94.png', './image/Mock_ups/Proverbs_3_6/white_tee_p95.png', './image/Mock_ups/Proverbs_3_6/light_brown_tee_p96.png', './image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_tee_p97.png',],
        rating: 4,
        category: 'T-Shirt'
    },
    'p95': {
        name: '"Proverbs 3:6" White T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Proverbs_3_6/white_tee_p95.png',
        gallery: ['./image/Mock_ups/Proverbs_3_6/white_tee_p95.png', './image/Mock_ups/Proverbs_3_6/Black_tee_p94.png', './image/Mock_ups/Proverbs_3_6/light_brown_tee_p96.png', './image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_tee_p97.png',],
        rating: 4,
        category: 'T-Shirt'
    },
    'p96': {
        name: '"Proverbs 3:6" Light Brown T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Proverbs_3_6/light_brown_tee_p96.png',
        gallery: ['./image/Mock_ups/Proverbs_3_6/light_brown_tee_p96.png', './image/Mock_ups/Proverbs_3_6/white_tee_p95.png', './image/Mock_ups/Proverbs_3_6/Black_tee_p94.png', './image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_tee_p97.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p97': {
        name: '"Proverbs 3:6" Brown T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_tee_p97.png',
        gallery: ['./image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_tee_p97.png', './image/Mock_ups/Proverbs_3_6/Black_tee_p94.png', './image/Mock_ups/Proverbs_3_6/light_brown_tee_p96.png', './image/Mock_ups/Proverbs_3_6/white_tee_p95.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p98': {
        name: '"Proverbs 3:6" Brown Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_h_p98.png',
        gallery: ['./image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_h_p98.png', './image/Mock_ups/Proverbs_3_6/white_h_p99.png', './image/Mock_ups/Proverbs_3_6/light_brown_h_p100.png', './image/Mock_ups/Proverbs_3_6/black_h_p101.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p99': {
        name: '"Proverbs 3:6" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Proverbs_3_6/white_h_p99.png',
        gallery: ['./image/Mock_ups/Proverbs_3_6/white_h_p99.png', './image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_h_p98.png', './image/Mock_ups/Proverbs_3_6/light_brown_h_p100.png', './image/Mock_ups/Proverbs_3_6/black_h_p101.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p100': {
        name: '"Proverbs 3:6" Light Brown Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Proverbs_3_6/light_brown_h_p100.png',
        gallery: ['./image/Mock_ups/Proverbs_3_6/light_brown_h_p100.png', './image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_h_p98.png', './image/Mock_ups/Proverbs_3_6/white_h_p99.png', './image/Mock_ups/Proverbs_3_6/black_h_p101.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p101': {
        name: '"Proverbs 3:6" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Proverbs_3_6/black_h_p101.png',
        gallery: ['./image/Mock_ups/Proverbs_3_6/black_h_p101.png', './image/Mock_ups/Proverbs_3_6/Proverbs_3_6_brown_h_p98.png', './image/Mock_ups/Proverbs_3_6/white_h_p99.png', './image/Mock_ups/Proverbs_3_6/light_brown_h_p100.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p102': {
        name: '"Psalm 23:5" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Psalms_23_5/Psalm_hoodie_p102.png',
        gallery: ['./image/Mock_ups/Psalms_23_5/Psalm_hoodie_p102.png', './image/Mock_ups/Psalms_23_5/Psalm_white_h_p103.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p103': {
        name: '"Psalm 23:5" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Psalms_23_5/Psalm_white_h_p103.png',
        gallery: ['./image/Mock_ups/Psalms_23_5/Psalm_white_h_p103.png', './image/Mock_ups/Psalms_23_5/Psalm_hoodie_p102.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p104': {
        name: '"Psalm 23:5" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Psalms_23_5/Psalm_p104.png',
        gallery: ['./image/Mock_ups/Psalms_23_5/Psalm_p104.png', './image/Mock_ups/Psalms_23_5/Psalm_white_p105.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p105': {
        name: '"Psalm 23:5" White T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Psalms_23_5/Psalm_white_p105.png',
        gallery: ['./image/Mock_ups/Psalms_23_5/Psalm_white_p105.png', './image/Mock_ups/Psalms_23_5/Psalm_p104.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p106': {
        name: '"Psalm 27:1" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Psalms_27_1/Psalm_271_b_p106.png',
        gallery: ['./image/Mock_ups/Psalms_27_1/Psalm_271_b_p106.png', './image/Mock_ups/Psalms_27_1/Psalm_271_wt_p107.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p107': {
        name: '"Psalm 27:1"" White T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Psalms_27_1/Psalm_271_wt_p107.png',
        gallery: ['./image/Mock_ups/Psalms_27_1/Psalm_271_wt_p107.png', './image/Mock_ups/Psalms_27_1/Psalm_271_b_p106.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p108': {
        name: '"Psalm 27:1"" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Psalms_27_1/psalms_271_bh_p108.png',
        gallery: ['./image/Mock_ups/Psalms_27_1/psalms_271_bh_p108.png', './image/Mock_ups/Psalms_27_1/psalms_271_wh_p109.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p109': {
        name: '"Psalm 27:1"" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Psalms_27_1/psalms_271_wh_p109.png',
        gallery: ['./image/Mock_ups/Psalms_27_1/psalms_271_wh_p109.png', './image/Mock_ups/Psalms_27_1/psalms_271_bh_p108.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p110': {
        name: '"Red Jesus Christ" Black Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_b_hoodie_p110.png',
        gallery: ['./image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_b_hoodie_p110.png', './image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_w_hoodie_p111.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p111': {
        name: '"Red Jesus Christ" White Hoodie',
        price: 'R450.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_w_hoodie_p111.png',
        gallery: ['./image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_w_hoodie_p111.png', './image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_b_hoodie_p110.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p112': {
        name: '"Red Jesus Christ" White T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_white_p112.png',
        gallery: ['./image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_white_p112.png', './image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_black_p113.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p113': {
        name: '"Red Jesus Christ" Black T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_black_p113.png',
        gallery: ['./image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_black_p113.png', './image/Mock_ups/Red_Jesus_Christ/Red_Jesus_Christ_white_p112.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p114': {
        name: '"The Life Of Christ" Black Hoodie',
        price: 'R450.00',
        description: 'The Son of God was born in Bethlelhem, Judea. His life was marked with teachings about love, forgiveness and the Kingdom of God. He was crucified on a cross between two thieves. After three days he rose.',
        mainImage:  './image/Mock_ups/the_life_of_Christ/CHRIST_b_p114.png',
        gallery: ['./image/Mock_ups/the_life_of_Christ/CHRIST_b_p114.png', './image/Mock_ups/the_life_of_Christ/CHRIST_wh_p115.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p115': {
        name: '"The Life Of Christ" White Hoodie',
        price: 'R450.00',
        description: 'The Son of God was born in Bethlelhem, Judea. His life was marked with teachings about love, forgiveness and the Kingdom of God. He was crucified on a cross between two thieves. After three days he rose.',
        mainImage:  './image/Mock_ups/the_life_of_Christ/CHRIST_wh_p115.png',
        gallery: ['./image/Mock_ups/the_life_of_Christ/CHRIST_wh_p115.png', './image/Mock_ups/the_life_of_Christ/CHRIST_b_p114.png'],
        rating: 4,
        category: 'Hoodie'
    },
    'p116': {
        name: '"The Life Of Christ" Black T-Shirt',
        price: 'R450.00',
        description: 'The Son of God was born in Bethlelhem, Judea. His life was marked with teachings about love, forgiveness and the Kingdom of God. He was crucified on a cross between two thieves. After three days he rose.',
        mainImage:  './image/Mock_ups/the_life_of_Christ/CHRIST_p116.png',
        gallery: ['./image/Mock_ups/the_life_of_Christ/CHRIST_p116.png', './image/Mock_ups/the_life_of_Christ/CHRIST_wt_p121.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p121': {
        name: '"The Life Of Christ" White T-Shirt',
        price: 'R450.00',
        description: 'The Son of God was born in Bethlelhem, Judea. His life was marked with teachings about love, forgiveness and the Kingdom of God. He was crucified on a cross between two thieves. After three days he rose.',
        mainImage:  './image/Mock_ups/the_life_of_Christ/CHRIST_wt_p121.png',
        gallery: ['./image/Mock_ups/the_life_of_Christ/CHRIST_wt_p121.png', './image/Mock_ups/the_life_of_Christ/CHRIST_p116.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p117': {
        name: 'Light Beige Tote Bag',
        price: 'R150.00',
        description: 'Declare your faith and devotion with this beautiful tote bag design, a pure white lamb, representing innocence, purity, and the sacrifice of Christ and a subtle, elegant font with the words "Jesus Christ" reflecting the scripture John 1:29',
        mainImage: './image/Mock_ups/Tote_bag/p117.png',
        gallery: ['./image/Mock_ups/Tote_bag/p117.png', './image/Mock_ups/Tote_bag/p118.png'],
        rating: 4,
        category: 'Accessories'
    },
    'p118': {
        name: 'Light Beige Tote Bag',
        price: 'R150.00',
        description: 'Declare your faith and devotion with this beautiful tote bag design, a pure white lamb, representing innocence, purity, and the sacrifice of Christ and a subtle, elegant font with the words "Jesus Christ" reflecting the scripture John 1:29',
        mainImage: './image/Mock_ups/Tote_bag/p118.png',
        gallery: ['./image/Mock_ups/Tote_bag/p118.png', './image/Mock_ups/Tote_bag/p117.png'],
        rating: 4,
        category: 'Accessories'
    },
    'p119': {
        name: '"Trust In The Lord" T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Trust_in_the_Lord/Trust_in_the_Lord_p119.png',
        gallery: ['./image/Mock_ups/Trust_in_the_Lord/Trust_in_the_Lord_p119.png', './image/Mock_ups/Trust_in_the_Lord/Trust_in_the_Lord_hoodie_p120.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    'p120': {
        name: '"Trust In The Lord" T-Shirt',
        price: 'R250.00',
        description: 'Proclaim the life-changing power of Jesus Christ with this inspiring design. "Jesus Saves Lives" boldly declares the transformative impact of faith on our lives.',
        mainImage:  './image/Mock_ups/Trust_in_the_Lord/Trust_in_the_Lord_hoodie_p120.png',
        gallery: ['./image/Mock_ups/Trust_in_the_Lord/Trust_in_the_Lord_hoodie_p120.png', './image/Mock_ups/Trust_in_the_Lord/Trust_in_the_Lord_p119.png'],
        rating: 4,
        category: 'T-Shirt'
    },
    
}

// #######################################################################################################################################################################################################3

function extractProductId(imgSrc) {
    if (!imgSrc) return null;
    const filename = imgSrc.split('/').pop();
    // Match p followed by digits, or just digits at the end (after an underscore or at the start of filename)
    // Examples: p123.png, _p123.png, _123.png, 123.png, shirt.png_p32
    const match = filename.match(/(?:_|^|p)(p?\d+)(?:\.[^.]+)?$/i) || filename.match(/p(\d+)$/i);
    if (match) {
        let id = match[1].toLowerCase();
        if (!id.startsWith('p')) id = 'p' + id;
        return id;
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function() {
    const productElements = document.querySelectorAll('.product');
    productElements.forEach(product => {
        product.addEventListener('click', function(e) {
            const img = this.querySelector('img');
            if (!img) return;
            const imgSrc = img.src;
            const productId = extractProductId(imgSrc);
            
            if (products[productId]) {
                localStorage.setItem('selectedProduct', JSON.stringify(products[productId]));
                const isSubdir = window.location.pathname.includes('/shop/') || window.location.pathname.includes('\\shop\\');
                window.location.href = isSubdir ? '../product.html' : './product.html';
            }
        });
    });

    const MainImg = document.getElementById('mainImg');
    const smallImgs = document.getElementsByClassName('small-img');

    if (window.location.pathname.includes('product.html')) {
        loadProductDetails();
        
        // Add click handlers to all small images for interchange functionality
        for (let i = 0; i < smallImgs.length; i++) {
            smallImgs[i].onclick = function() {
                updateProductInfo(this.src);
            }
        }
    }

    updateCartCounter();
});

function loadProductDetails() {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (!selectedProduct) return;

    const mainImg = document.getElementById('mainImg');
    if (mainImg) mainImg.src = selectedProduct.mainImage;

    const titleElem = document.querySelector('h3.py-4');
    if (titleElem) titleElem.textContent = selectedProduct.name;
    
    const priceElem = document.querySelector('h2');
    if (priceElem) priceElem.textContent = selectedProduct.price;
    
    const descElem = document.querySelector('span');
    if (descElem) descElem.textContent = selectedProduct.description;
    
    const categoryElem = document.querySelector('h6');
    if (categoryElem) categoryElem.textContent = `Home / ${selectedProduct.category}`;

    const smallImgs = document.querySelectorAll('.small-img');
    if (selectedProduct.gallery && selectedProduct.gallery.length > 0) {
        selectedProduct.gallery.forEach((img, index) => {
            if (smallImgs[index]) {
                smallImgs[index].src = img;
                smallImgs[index].style.display = 'block';
            }
        });
        // Hide unused small image slots
        for (let i = selectedProduct.gallery.length; i < smallImgs.length; i++) {
            if (smallImgs[i]) smallImgs[i].style.display = 'none';
        }
    }

    const stars = document.querySelectorAll('.star i');
    stars.forEach((star, index) => {
        if (index < selectedProduct.rating) {
            star.className = 'fa-solid fa-star';
        } else {
            star.className = 'fa-regular fa-star';
        }
    });
}

function updateProductInfo(imgSrc) {
    const MainImg = document.getElementById('mainImg');
    const productId = extractProductId(imgSrc);
    
    if (products[productId]) {
        const product = products[productId];
        
        if (MainImg) MainImg.src = imgSrc;
        
        const titleElem = document.querySelector('h3.py-4');
        if (titleElem) titleElem.textContent = product.name;
        
        const priceElem = document.querySelector('h2');
        if (priceElem) priceElem.textContent = product.price;
        
        const descElem = document.querySelector('span');
        if (descElem) descElem.textContent = product.description;
        
        const categoryElem = document.querySelector('h6');
        if (categoryElem) categoryElem.textContent = `Home / ${product.category}`;
        
        const stars = document.querySelectorAll('.star i');
        stars.forEach((star, index) => {
            if (index < product.rating) {
                star.className = 'fa-solid fa-star';
            } else {
                star.className = 'fa-regular fa-star';
            }
        });
        
        localStorage.setItem('selectedProduct', JSON.stringify(product));
    } else {
        // If it's just a gallery image that doesn't correspond to a separate product
        if (MainImg) MainImg.src = imgSrc;
    }
}

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
                background-color: #a18e7f; 
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
