let currentLanguage = 'en';
let currentSlide = 0;
let cartItems = [];
const slides = ['./pictures/hero1.webp', './pictures/hero2.webp',
    './pictures/hero3.webp'
];
const products = [{
    id: 1,
    name: 'Beni Ourain Wool Rug',
    name_ar: 'سجادة بني وراين الصوفية',
    name_fr: 'Tapis en Laine Beni Ourain',
    price: 499,
    oldPrice: 599,
    image: 'zayna/pictures/prod1.webp',
    category: 'rug',
    rating: 4.8,
    reviews: 124,
    description: 'Handwoven by Berber artisans using traditional techniques, this authentic Beni Ourain rug features natural undyed wool with characteristic geometric patterns.',
    description_ar: 'منسوج يدويًا من قبل حرفيين أمازيغ باستخدام تقنيات تقليدية، تتميز سجادة بني وراين الأصلية هذه بصوف طبيعي غير مصبوغ مع أنماط هندسية مميزة.',
    description_fr: 'Tissé à la main par des artisans berbères utilisant des techniques traditionnelles، ce tapis Beni Ourain authentique présente une laine naturelle non teinte avec des motifs géométriques caractéristiques.'
}, {
    id: 2,
    name: 'Handcrafted Ceramic Tagine',
    name_ar: 'طاجين سيراميك مصنوع يدويًا',
    name_fr: 'Tajine en Céramique Artisanal',
    price: 89,
    oldPrice: 115,
    image: 'pictures/prod2.webp',
    category: 'pottery',
    rating: 4.9,
    reviews: 87,
    description: 'This beautifully hand-painted tagine from Fez combines traditional craftsmanship with practical functionality. Perfect for slow-cooking Moroccan stews and keeping food warm at the table.',
    description_ar: 'هذا الطاجين المرسوم يدويًا بشكل جميل من فاس يجمع بين الحرفية التقليدية والوظائف العملية. مثالي للطهي البطيء للطواجن المغربية والحفاظ على الطعام دافئًا على الطاولة.',
    description_fr: 'Ce tajine magnifiquement peint à la main de Fès allie artisanat traditionnel et fonctionnalité pratique. Parfait pour la cuisson lente des ragoûts marocains et pour garder les aliments au chaud à table.'
}, {
    id: 3,
    name: 'Moroccan Leather Pouf',
    name_ar: 'بوف جلدي مغربي',
    name_fr: 'Pouf Marocain en Cuir',
    price: 159,
    oldPrice: 199,
    image: 'pictures/prod3.webp',
    category: 'leather',
    rating: 4.7,
    reviews: 56,
    description: 'Hand-stitched in Marrakech using genuine leather, this authentic Moroccan pouf adds exotic flair to any room. Use as a footstool, casual seating, or decorative accent.',
    description_ar: 'مخيط يدويًا في مراكش باستخدام الجلد الأصلي، يضيف هذا البوف المغربي الأصيل لمسة غريبة إلى أي غرفة. استخدمه كمسند قدم أو مقعد عرضي أو كلمسة ديكور.',
    description_fr: 'Cousu à la main à Marrakech avec du cuir véritable, ce pouf marocain authentique ajoute une touche exotique à n\'importe quelle pièce. Utilisez-ه as a footstool, casual seating, or decorative accent.'
}, {
    id: 4,
    name: 'Brass Hanging Lamp',
    name_ar: 'مصباح نحاسي معلق',
    name_fr: 'Lampe Suspendue en Laiton',
    price: 179,
    oldPrice: 220,
    image: 'pictures/prod4.webp',
    category: 'lamp',
    rating: 4.6,
    reviews: 42,
    description: 'This intricately hand-pierced brass lamp casts mesmerizing patterns of light and shadow. Each lamp is a unique work of art crafted by skilled artisans in the old medina of Fez.',
    description_ar: 'يلقي هذا المصباح النحاسي المثقوب يدويًا بشكل معقد أنماطًا ساحرة من الضوء والظل. كل مصباح هو عمل فني فريد من نوعه صنعه حرفيون مهرة في المدينة القديمة بفاس.',
    description_fr: 'Cette lampe en laiton ajourée à la main projette des motifs hypnotisants de lumière et d\'ombre. Chaque lampe est une œuvre d\'art unique fabriquée par des artisans qualifiés dans l\'ancienne médina de Fès.'
}, {
    id: 5,
    name: 'Hand-Loomed Cotton Throw',
    name_ar: 'بطانية قطنية منسوجة يدويًا',
    name_fr: 'Jeté en Coton Tissé à la Main',
    price: 79,
    oldPrice: 99,
    image: 'pictures/prod5.webp',
    category: 'textile',
    rating: 4.9,
    reviews: 31,
    description: 'Woven on traditional looms by women artisans in the Atlas Mountains, this soft cotton throw features timeless Berber-inspired patterns that add warmth and texture to any space.',
    description_ar: 'منسوجة على أنوال تقليدية من قبل نساء حرفيات في جبال الأطلس، تتميز هذه البطانية القطنية الناعمة بأنماط مستوحاة من الأمازيغ الخالدة التي تضيف الدفء والملمس إلى أي مكان.',
    description_fr: 'Tissé sur des métiers traditionnels par des artisanes des montagnes de l\'Atlas, ce jeté doux en coton présente des motifs intemporels d\'inspiration berbère qui ajoutent chaleur et texture à n\'importe quel espace.'
}, {
    id: 6,
    name: 'Handpainted Ceramic Plate',
    name_ar: 'طبق سيراميك مرسوم يدويًا',
    name_fr: 'Assiette en Céramique Peinte à la Main',
    price: 65,
    oldPrice: 85,
    image: 'pictures/prod6.webp',
    category: 'pottery',
    rating: 4.8,
    reviews: 28,
    description: 'Each plate is meticulously hand-painted by master artisans in Safi, Morocco\'s pottery capital. Display as wall art or use for serving to add a touch of Moroccan elegance to your dining experience.',
    description_ar: 'يتم رسم كل طبق بدقة من قبل حرفيين مهرة في آسفي، عاصمة الفخار في المغرب. اعرضه كلوحة فنية على الحائط أو استخدمه للتقديم لإضافة لمسة من الأناقة المغربية إلى تجربة تناول الطعام لديك.',
    description_fr: 'Chaque assiette est méticuleusement peinte à la hand by master artisans in Safi, Morocco\'s pottery capital. Display as wall art or use for serving to add a touch of Moroccan elegance to your dining experience.'
}];
const translations = {
    en: {
        home: 'Home',
        products: 'Shop',
        about: 'About',
        services: 'Services',
        blog: 'Blog',
        contact: 'Contact',
        faq: 'FAQ',
        heroTitle: 'Authentic Moroccan Handicrafts',
        heroText: 'Discover Morocco\'s rich heritage through our exquisite collection of handmade products crafted by skilled artisans.',
        shopNow: 'Shop Now',
        learnMore: 'Learn More',
        searchPlaceholder: 'Search products...',
        productsTitle: 'Our Unique Collection',
        productsSubtitle: 'Discover our handmade products crafted with traditional techniques',
        filterBy: 'Filter by:',
        sortBy: 'Sort by:',
        allCategories: 'All Categories',
        category_rug: 'Rugs',
        category_pottery: 'Pottery',
        category_leather: 'Leather Goods',
        category_lamp: 'Lamps',
        category_textile: 'Textiles',
        sortDefault: 'Featured',
        sortPriceAsc: 'Price: Low to High',
        sortPriceDesc: 'Price: High to Low',
        sortRating: 'Customer Rating',
        addToCart: 'Add to Cart',
        inCart: 'In Cart',
        reviews: 'reviews',
        addedToCart: 'has been added to your cart',
        cartEmpty: 'Your cart is empty',
        yourCart: 'Your Shopping Cart',
        total: 'Total',
        checkout: 'Checkout',
        proceedToCheckout: 'Proceeding to checkout...'
    },
    ar: {
        home: 'الرئيسية',
        products: 'تسوق',
        about: 'من نحن',
        services: 'خدماتنا',
        blog: 'المدونة',
        contact: 'تواصل معنا',
        faq: 'الأسئلة الشائعة',
        heroTitle: 'الحرف اليدوية المغربية الأصيلة',
        heroText: 'اكتشف التراث الغني للمغرب من خلال مجموعتنا الرائعة من المنتجات اليدوية التي يصنعها الحرفيون المهرة.',
        shopNow: 'تسوق الآن',
        learnMore: 'اعرف المزيد',
        searchPlaceholder: 'ابحث عن المنتجات...',
        productsTitle: 'مجموعتنا الفريدة',
        productsSubtitle: 'اكتشف منتجاتنا اليدوية المصنوعة بتقنيات تقليدية',
        filterBy: 'تصفية حسب:',
        sortBy: 'ترتيب حسب:',
        allCategories: 'جميع الفئات',
        category_rug: 'السجاد',
        category_pottery: 'الفخار',
        category_leather: 'منتجات جلدية',
        category_lamp: 'مصابيح',
        category_textile: 'منسوجات',
        sortDefault: 'مميز',
        sortPriceAsc: 'السعر: من الأدنى إلى الأعلى',
        sortPriceDesc: 'السعر: من الأعلى إلى الأدنى',
        sortRating: 'تقييم العملاء',
        addToCart: 'أضف إلى السلة',
        inCart: 'في السلة',
        reviews: 'تقييمات',
        addedToCart: 'تمت إضافته إلى سلة التسوق',
        cartEmpty: 'سلة التسوق فارغة',
        yourCart: 'سلة التسوق الخاصة بك',
        total: 'المجموع',
        checkout: 'الدفع',
        proceedToCheckout: 'جاري التوجه إلى صفحة الدفع...'
    },
    fr: {
        home: 'Accueil',
        products: 'Boutique',
        about: 'À Propos',
        services: 'Services',
        blog: 'Blog',
        contact: 'Contact',
        faq: 'FAQ',
        heroTitle: 'Artisanat Marocain Authentique',
        heroText: 'Découvrez le riche patrimoine du Maroc à travers notre collection exquise de produits faits à la main par des artisans qualifiés.',
        shopNow: 'Acheter',
        learnMore: 'En Savoir Plus',
        searchPlaceholder: 'Rechercher des produits...',
        productsTitle: 'Notre Collection Unique',
        productsSubtitle: 'Découvrez nos produits faits à la main avec des techniques traditionnelles',
        filterBy: 'Filtrer par:',
        sortBy: 'Trier par:',
        allCategories: 'Toutes les Catégories',
        category_rug: 'Tapis',
        category_pottery: 'Poterie',
        category_leather: 'Articles en Cuir',
        category_lamp: 'Lampes',
        category_textile: 'Textiles',
        sortDefault: 'En Vedette',
        sortPriceAsc: 'Prix: Croissant',
        sortPriceDesc: 'Prix: Décroissant',
        sortRating: 'Évaluations Client',
        addToCart: 'Ajouter au Panier',
        inCart: 'Dans le panier',
        reviews: 'avis',
        addedToCart: 'a été ajouté à votre panier',
        cartEmpty: 'Votre panier est vide',
        yourCart: 'Votre Panier',
        total: 'Total',
        checkout: 'Paiement',
        proceedToCheckout: 'Passage à la caisse...'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'home') section.style.display = 'none'
    });
    initHeroSlideshow();
    loadProducts();
    updateCartUI();
    changeLanguage(currentLanguage);
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.dark-mode-toggle i').classList.replace('fa-moon', 'fa-sun');
        const mobileIcon = document.querySelector('.mobile-dark-mode-toggle i');
        if (mobileIcon) {
            mobileIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }
});

function initHeroSlideshow() {
    const slideshow = document.getElementById('heroSlideshow');
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `hero-slide ${index===0?'active':''}`;
        slideElement.style.backgroundImage = `url(${slide})`;
        slideshow.appendChild(slideElement)
    });
    setInterval(() => {
        changeSlide(1)
    }, 5000)
}

function changeSlide(direction) {
    const slideshow = document.getElementById('heroSlideshow');
    const slides = slideshow.querySelectorAll('.hero-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add('active')
}

function showPage(pageId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none'
    });
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.style.animation = 'fadeIn 0.5s ease'
    }
    updateBreadcrumb(pageId);
    if (pageId === 'blog') {
        document.querySelectorAll('.blog-post').forEach((post, index) => {
            post.style.animationDelay = `${index*0.1}s`
        })
    }
    document.getElementById('cartModal').classList.remove('active');
    window.scrollTo(0, 0)
}

function updateBreadcrumb(pageId) {
    const titles = {
        'home': 'Home',
        'products': 'Shop',
        'about': 'About',
        'services': 'Services',
        'blog': 'Blog',
        'contact': 'Contact',
        'craftsmanship': 'Craftsmanship',
        'testimonials': 'Testimonials',
        'gallery': 'Gallery',
        'faq': 'FAQ'
    };
    document.getElementById('currentPage').textContent = pageId === 'home' ? '' : ` / ${titles[pageId]}`
}

function loadProducts() {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';
    products.forEach(product => {
        const productName = currentLanguage === 'en' ? product.name : currentLanguage === 'ar' ? product
            .name_ar : product.name_fr;
        const isInCart = cartItems.some(item => item.id === product.id);
        const cartButtonText = isInCart ? translations[currentLanguage].inCart : translations[currentLanguage].addToCart;

        const productHtml =
            `<div class="product" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}" data-rating="${product.rating}"><div class="product-image"><img src="${product.image}" alt="${productName}">${product.oldPrice?`<div class="product-badge">SALE</div>`:''}</div><div class="product-info"><h3 class="product-title">${productName}</h3><span class="product-price">${product.oldPrice?`<small>$${product.oldPrice}</small>`:''}$${product.price}</span><div class="product-rating"><span class="rating-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span><span class="reviews-count">(${product.reviews} ${translations[currentLanguage].reviews})</span></div><div class="product-actions"><button class="wishlist"><i class="far fa-heart"></i></button><button class="add-to-cart" onclick="addToCart(${product.id})">${cartButtonText}</button></div></div></div>`;
        productsList.innerHTML += productHtml
    })
}

function filterProducts(filterType) {
    console.log(`Filtering by ${filterType}`)
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const mobileCartCount = document.querySelector('.mobile-cart-count');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.querySelector('.cart-total span:last-child');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    if (mobileCartCount) mobileCartCount.textContent = totalItems;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML =
            `<div class="cart-empty"><i class="fas fa-shopping-cart" style="font-size:3rem;color:#ccc;margin-bottom:15px;"></i><p>${translations[currentLanguage].cartEmpty}</p></div>`;
        if (cartTotalElement) {
            cartTotalElement.textContent = '$0.00'
        }
    } else {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const productName = currentLanguage === 'en' ? item.name : currentLanguage === 'ar' ? item
                .name_ar : item.name_fr;
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItemsContainer.innerHTML +=
                `<div class="cart-item">
                            <img src="${item.image}" class="cart-item-img" alt="${productName}">
                            <div class="cart-item-details">
                                <h4 class="cart-item-title">${productName}</h4>
                                <span class="cart-item-price">$${item.price}</span>
                                <div class="cart-item-actions">
                                    <button onclick="updateCartItem(${item.id}, -1)"><i class="fas fa-minus-circle"></i></button>
                                    <span class="cart-item-qty">${item.quantity}</span>
                                    <button onclick="updateCartItem(${item.id}, 1)"><i class="fas fa-plus-circle"></i></button>
                                    <button onclick="removeCartItem(${item.id})" style="margin-left:10px;"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        </div>`;
        });
        if (cartTotalElement) {
            cartTotalElement.textContent = `$${total.toFixed(2)}`
        }
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1
    } else {
        cartItems.push({
            id: product.id,
            name: product.name,
            name_ar: product.name_ar,
            name_fr: product.name_fr,
            price: product.price,
            image: product.image,
            quantity: 1
        })
    }
    updateCartUI();
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.animation = 'shake 0.5s';
    setTimeout(() => {
        cartIcon.style.animation = ''
    }, 500);
    const productName = currentLanguage === 'en' ? product.name : currentLanguage === 'ar' ? product.name_ar :
        product.name_fr;
    alert(`${productName} ${translations[currentLanguage].addedToCart}`)
}

function updateCartItem(productId, change) {
    const itemIndex = cartItems.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cartItems[itemIndex].quantity += change;
        if (cartItems[itemIndex].quantity <= 0) {
            cartItems.splice(itemIndex, 1);
        }
        updateCartUI();
    }
}

function removeCartItem(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCartUI();
}

function showCart() {
    document.getElementById('cartModal').classList.add('active')
}

function hideCart() {
    document.getElementById('cartModal').classList.remove('active');
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.innerHTML = '<i class="fas fa-shopping-bag"></i>';
    setTimeout(() => {
        cartIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    }, 300);
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active')
}

function toggleFAQ(element) {
    element.classList.toggle('active');
    const answer = element.nextElementSibling;
    if (element.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px'
    } else {
        answer.style.maxHeight = 0
    }
}

function openGalleryModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('galleryModal').style.display = 'block'
}

function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none'
}

function toggleChat() {
    document.getElementById('chatContainer').classList.toggle('active')
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML +=
            `<div class="message user"><div class="message-content"><p>${message}</p></div></div>`;
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        setTimeout(() => {
            chatMessages.innerHTML +=
                `<div class="message support"><img src="pictures/iconsupport.png" class="avatar"><div class="message-content"><p>Thank you for your message. A customer service representative will respond shortly.</p></div></div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight
        }, 1000)
    }
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    console.log(`Searching for: ${searchInput}`)
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.language-switcher select, .language-switcher-mobile select').forEach(select => {
        select.value = lang
    });
    updateTranslations();
    loadProducts();
    updateCartUI()
}

function updateTranslations() {
    document.querySelectorAll('nav a').forEach((link, index) => {
        const keys = ['home', 'products', 'about', 'services', 'blog', 'contact', 'faq'];
        if (index < keys.length) {
            link.textContent = translations[currentLanguage][keys[index]]
        }
    });
    document.querySelectorAll('.mobile-menu-items a').forEach((link, index) => {
        const keys = ['home', 'products', 'about', 'services', 'blog', 'contact', 'faq'];
        if (index < keys.length) {
            link.textContent = translations[currentLanguage][keys[index]]
        }
    });
    document.querySelector('.hero h1').textContent = translations[currentLanguage].heroTitle;
    document.querySelector('.hero p').textContent = translations[currentLanguage].heroText;
    document.querySelector('.hero-buttons .btn').textContent = translations[currentLanguage].shopNow;
    document.querySelector('.hero-buttons .btn-outline').textContent = translations[currentLanguage].learnMore;
    document.getElementById('searchInput').placeholder = translations[currentLanguage].searchPlaceholder;
    document.querySelector('#products .section-title').textContent = translations[currentLanguage]
        .productsTitle;
    document.querySelector('#products .section-subtitle').textContent = translations[currentLanguage]
        .productsSubtitle;
    document.querySelector('label[for="categoryFilter"]').textContent = translations[currentLanguage].filterBy;
    document.querySelector('label[for="sortFilter"]').textContent = translations[currentLanguage].sortBy;
    document.querySelectorAll('#categoryFilter option').forEach((option, index) => {
        const keys = ['allCategories', 'category_rug', 'category_pottery', 'category_leather',
            'category_lamp', 'category_textile'
        ];
        if (index < keys.length) {
            option.textContent = translations[currentLanguage][keys[index]]
        }
    });
    document.querySelectorAll('#sortFilter option').forEach((option, index) => {
        const keys = ['sortDefault', 'sortPriceAsc', 'sortPriceDesc', 'sortRating'];
        if (index < keys.length) {
            option.textContent = translations[currentLanguage][keys[index]]
        }
    })
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.dark-mode-toggle i');
    const mobileIcon = document.querySelector('.mobile-dark-mode-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    if (mobileIcon) {
        mobileIcon.classList.toggle('fa-moon');
        mobileIcon.classList.toggle('fa-sun')
    }
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));

    updateCartUI();
}
