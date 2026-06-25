// Expanded Product Data with variants, descriptions, and metadata
const products = [
    {
        id: 'sku-1',
        name: 'Little Elliot Crochet Elephant',
        category: 'toys',
        mrp: '₹1,299',
        price: '₹999',
        isSale: true,
        image: 'product_images/sku_1_front.png',
        hoverImage: 'product_images/sku_1_side_left.png',
        bestseller: true,
        description: 'Meet Elliot, the gentlest little elephant you will ever meet. Hand-knitted with love, Elliot is ready to join your little one on endless safari adventures. Made from baby-safe, hypoallergenic organic cotton.',
        details: '• 100% Organic Certified Cotton Yarn<br>• Hypoallergenic polyester fiberfill stuffing<br>• Safe embroidered eyes (no plastic components)<br>• Size: 22cm (Height) x 18cm (Width)',
        shipping: '• Free delivery on orders above ₹2000.<br>• Handcrafted to order, ships in 2-3 business days.<br>• Delivered within 5-7 business days across India.',
        variants: [
            { name: 'Sage Grey', color: '#8E8E93', image: 'product_images/prod_5.jpeg' },
            { name: 'Soft Blue', color: '#A4C2E6', image: 'product_images/prod_10.jpeg' },
            { name: 'Pastel Pink', color: '#F2C4CE', image: 'product_images/prod_15.jpeg' }
        ]
    },
    {
        id: 'sku-2',
        name: 'Little Red Dragon',
        category: 'toys',
        mrp: '₹1,899',
        price: '₹1,599',
        isSale: true,
        image: 'product_images/sku_2_front.png',
        hoverImage: 'product_images/sku_2_side_left.png',
        bestseller: true,
        description: 'Unleash a world of fantasy with our Little Red Dragon. Hand-crocheted with deep crimson yarn and detailed with soft beige accents, this friendly dragon is ready for fairy-tale adventures.',
        details: '• 100% Organic Cotton Yarn<br>• Hypoallergenic polyester fiberfill stuffing<br>• Stiffened wings for flight display<br>• Size: 30cm (Height) x 25cm (Width)',
        shipping: '• Free delivery on orders above ₹2000.<br>• Handcrafted to order, ships in 2-3 business days.<br>• Delivered within 5-7 business days across India.',
        variants: [
            { name: 'Crimson Red', color: '#C92A2A', image: 'product_images/sku_2_front.png' }
        ]
    },
    {
        id: 'sku-3',
        name: 'Cuddle Bunny Toy',
        category: 'toys',
        mrp: null,
        price: '₹1,499',
        isSale: false,
        image: 'product_images/sku_3_front.png',
        hoverImage: 'product_images/sku_3_side_left.png',
        bestseller: false,
        description: 'The ultimate comforting companion. The Cuddle Bunny is incredibly soft, features floppy ears perfect for tiny hands to grasp, and makes a beautiful keepsake for nurseries.',
        details: '• Premium cotton-blend ultra-soft yarn<br>• Double-stitched seams for extra durability<br>• Safe embroidered details<br>• Size: 30cm (including ears)',
        shipping: '• Free delivery on orders above ₹2000.<br>• Ships in 2-3 business days.<br>• Delivered within 5-7 business days across India.',
        variants: [
            { name: 'Cream White', color: '#F8F9FA', image: 'product_images/prod_6.jpeg' },
            { name: 'Soft Lilac', color: '#D0BFFF', image: 'product_images/prod_12.jpeg' }
        ]
    },
    {
        id: 'sku-4',
        name: 'Sammy The Dino',
        category: 'toys',
        mrp: null,
        price: '₹1,299',
        isSale: false,
        image: 'product_images/sku_4_front.png',
        hoverImage: 'product_images/sku_4_side_left.png',
        bestseller: true,
        description: 'Meet Sammy, the friendliest dinosaur from the Jurassic era. Meticulously hand-crocheted with a textured green body and soft brown spikes, Sammy is perfect for warm cuddles and imaginative play.',
        details: '• Crafted with premium soft cotton yarn<br>• Safety-lock plastic eyes (securely stitched)<br>• Soft, squeezable spikes<br>• Size: 30cm (Height) x 20cm (Width)',
        shipping: '• Free delivery on orders above ₹2000.<br>• Ships in 2-3 business days.<br>• Delivered within 5-7 business days across India.',
        variants: [
            { name: 'Spiky Green', color: '#2F9E44', image: 'product_images/sku_4_front.png' }
        ]
    },
    {
        id: 'sku-5',
        name: 'Timmy The Turtle',
        category: 'toys',
        mrp: '₹999',
        price: '₹799',
        isSale: true,
        image: 'product_images/sku_5_front.png',
        hoverImage: 'product_images/sku_5_side_left.png',
        bestseller: true,
        description: 'Slow, steady, and full of cuteness. Timmy the Turtle features a detailed spiral shell and a friendly smiling face that children adore.',
        details: '• 100% premium cotton yarn<br>• High-density hypoallergenic polyfill<br>• Secure safety-lock plastic eyes<br>• Size: 18cm long',
        shipping: '• Free delivery on orders above ₹2000.<br>• Ships in 2 business days.<br>• Delivered within 4-7 business days across India.',
        variants: [
            { name: 'Sage Green', color: '#86B898', image: 'product_images/prod_7.jpeg' },
            { name: 'Forest Green', color: '#2F9E44', image: 'product_images/prod_16.jpeg' }
        ]
    },
    {
        id: 'sku-6',
        name: 'Gerry The Giraffe',
        category: 'toys',
        mrp: null,
        price: '₹1,699',
        isSale: false,
        image: 'product_images/sku_6_front.png',
        hoverImage: 'product_images/sku_6_side_left.png',
        bestseller: false,
        description: 'Reach high for hugs with Gerry the Giraffe! Boasting cute spots and tall legs, Gerry is a stunning addition to any child\'s stuffed animal collection.',
        details: '• Sustainable cotton yarn<br>• Hand-embroidered spots and face features<br>• Stiffened legs for upright display capability<br>• Size: 32cm tall',
        shipping: '• Free delivery on orders above ₹2000.<br>• Ships in 3 business days.<br>• Delivered within 5-7 business days across India.',
        variants: [
            { name: 'Golden Yellow', color: '#F59F00', image: 'product_images/prod_8.jpeg' },
            { name: 'Soft Brown', color: '#A0522D', image: 'product_images/prod_17.jpeg' }
        ]
    },
    {
        id: 'sku-7',
        name: 'Sparkles The Unicorn',
        category: 'toys',
        mrp: '₹1,799',
        price: '₹1,499',
        isSale: true,
        image: 'product_images/sku_7_front.png',
        hoverImage: 'product_images/sku_7_front.png',
        bestseller: true,
        description: 'Add some magic to your life with Sparkles the Unicorn. Featuring a golden horn, a pastel rainbow mane, and embroidered star details, this unicorn is a dream come true.',
        details: '• High-grade soft cotton yarn<br>• Hypoallergenic polyester fill<br>• Pastel rainbow details and star embroidery<br>• Size: 30cm (Height) x 18cm (Width)',
        shipping: '• Free delivery on orders above ₹2000.<br>• Ships in 2-3 business days.<br>• Delivered within 4-7 business days across India.',
        variants: [
            { name: 'Pastel Rainbow', color: '#FFD43B', image: 'product_images/sku_7_front.png' }
        ]
    },
    {
        id: 'sku-8',
        name: 'Pip The Penguin',
        category: 'toys',
        mrp: null,
        price: '₹1,199',
        isSale: false,
        image: 'product_images/sku_8_front.png',
        hoverImage: 'product_images/sku_8_front.png',
        bestseller: false,
        description: 'Pip the Penguin is ready for the cold winter nights with his cozy blue scarf. Perfectly hand-stitched with a soft white tummy and bright orange feet.',
        details: '• 100% Organic Cotton Yarn<br>• Includes removable knit scarf<br>• Safe embroidered details<br>• Size: 26cm (Height) x 16cm (Width)',
        shipping: '• Free delivery on orders above ₹2000.<br>• Ships within 24 hours.<br>• Delivered within 3-5 business days across India.',
        variants: [
            { name: 'Cozy Scarf Blue', color: '#A4C2E6', image: 'product_images/sku_8_front.png' }
        ]
    },
    {
        id: 'sku-9',
        name: 'Sleepy Bear Cub',
        category: 'toys',
        mrp: '₹1,199',
        price: '₹1,099',
        isSale: true,
        image: 'product_images/sku_9_front.png',
        hoverImage: 'product_images/sku_9_side_left.png',
        bestseller: false,
        description: 'Tucked in and ready for sweet dreams. The Sleepy Bear Cub wears an adorable knit nightcap and holds its own mini blanket.',
        details: '• Organic cotton thread<br>• Hypoallergenic stuffing<br>• Features hand-stitched sleeping eyes<br>• Size: 20cm (sitting height)',
        shipping: '• Free delivery on orders above ₹2000.<br>• Ships in 2 business days.<br>• Delivered within 4-7 business days across India.',
        variants: [
            { name: 'Cocoa Brown', color: '#8B5A2B', image: 'product_images/prod_9.jpeg' },
            { name: 'Honey Beige', color: '#E5C158', image: 'product_images/prod_15.jpeg' }
        ]
    },
    {
        id: 'sku-10',
        name: 'Baby Hippo',
        category: 'toys',
        mrp: null,
        price: '₹899',
        isSale: false,
        image: 'product_images/sku_10_front.png',
        hoverImage: 'product_images/sku_10_side_left.png',
        bestseller: false,
        description: 'A chubby and sweet crochet hippo. With its little tail and friendly ears, it\'s the perfect huggable size for toddlers.',
        details: '• 100% safe organic cotton thread<br>• Stuffed with hypoallergenic polyester fibers<br>• Firmly sewn seams for high durability<br>• Size: 18cm long',
        shipping: '• Free delivery on orders above ₹2000.<br>• Ships in 2 business days.<br>• Delivered within 4-6 business days across India.',
        variants: [
            { name: 'Sky Blue', color: '#A4C2E6', image: 'product_images/prod_10.jpeg' },
            { name: 'Lilac', color: '#D0BFFF', image: 'product_images/prod_12.jpeg' }
        ]
    }
];

// Cart State Management
let cart = JSON.parse(localStorage.getItem('TOYOTOY_CART')) || [];

// Active Quick View Item
let activeQuickViewProduct = null;
let currentImageIndex = 0;
let currentVariant = null;

// Announcement Bar Rotator
const announcements = [
    "Free shipping on all orders over ₹2000! ✨",
    "Handcrafted with love by 500+ Indian women artisans 🌸",
    "10% off on your first order! Use code: TOYOTOY10 🎁"
];
let activeAnnouncementIndex = 0;

// Dynamic DOM Injection of overlays (Cart Drawer, Search, Quick View, Mobile Nav)
function injectUIOverlays() {
    // 1. Cart Drawer Overlay
    const cartHtml = `
    <div class="cart-drawer-overlay" id="cart-drawer-overlay">
        <div class="cart-drawer">
            <div class="cart-drawer-header">
                <h2>Your Bag (<span class="cart-drawer-count">0</span>)</h2>
                <button class="cart-drawer-close" id="cart-drawer-close">&times;</button>
            </div>
            <div class="cart-progress-container">
                <p class="cart-progress-text" id="cart-progress-text">Add <span>₹2,000</span> more for FREE shipping!</p>
                <div class="cart-progress-bar"><div class="cart-progress-fill" id="cart-progress-fill"></div></div>
            </div>
            <div class="cart-drawer-items" id="cart-drawer-items">
                <!-- Injected via JS -->
            </div>
            <div class="cart-drawer-footer">
                <div class="cart-summary-row">
                    <span>Subtotal</span>
                    <span class="cart-subtotal" id="cart-subtotal">₹0</span>
                </div>
                <p class="cart-tax-note">Shipping & taxes calculated at checkout</p>
                <button class="checkout-btn" onclick="alert('Proceeding to secure checkout!')">Secure Checkout</button>
                <div class="cart-cross-sell">
                    <h4>Complete Your Gift 🎁</h4>
                    <div class="cross-sell-item">
                        <img src="product_images/prod_1.png" alt="Gift Wrap">
                        <div class="cross-sell-info">
                            <h5>Gift Wrap & Handwritten Note</h5>
                            <p>₹99</p>
                        </div>
                        <button class="cross-sell-add-btn" onclick="addGiftWrapToCart(this)">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    // 2. Search Overlay
    const searchHtml = `
    <div class="search-drawer-overlay" id="search-drawer-overlay">
        <div class="search-drawer">
            <div class="search-drawer-header">
                <div class="search-input-container">
                    <i class="fas fa-search search-icon-input"></i>
                    <input type="text" id="search-input" placeholder="Search for toys, gifts..." autocomplete="off">
                    <button class="search-clear-btn" id="search-clear-btn">&times;</button>
                </div>
                <button class="search-drawer-close" id="search-drawer-close">Close</button>
            </div>
            <div class="search-results-container">
                <div class="search-suggestions" id="search-suggestions">
                    <h4>Popular Searches</h4>
                    <div class="suggestion-tags">
                        <span class="tag" onclick="fillSearch('Dino')">Dino</span>
                        <span class="tag" onclick="fillSearch('Elephant')">Elephant</span>
                        <span class="tag" onclick="fillSearch('Toys')">Toys</span>
                        <span class="tag" onclick="fillSearch('Sale')">Sale</span>
                        <span class="tag" onclick="fillSearch('Bunny')">Bunny</span>
                    </div>
                </div>
                <div class="search-results" id="search-results"></div>
            </div>
        </div>
    </div>`;

    // 3. Quick View Modal
    const quickViewHtml = `
    <div class="quickview-overlay" id="quickview-overlay">
        <div class="quickview-modal">
            <button class="quickview-close" id="quickview-close">&times;</button>
            <div class="quickview-content">
                <div class="quickview-gallery">
                    <div class="quickview-main-img-container">
                        <img id="qv-main-img" src="" alt="Product Image">
                        <button class="qv-arrow qv-arrow-left" id="qv-arrow-left"><i class="fas fa-chevron-left"></i></button>
                        <button class="qv-arrow qv-arrow-right" id="qv-arrow-right"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div class="quickview-thumbnails" id="qv-thumbnails"></div>
                </div>
                <div class="quickview-details">
                    <div class="qv-badge-wrapper"><span class="qv-badge" id="qv-badge">Bestseller</span></div>
                    <h2 class="qv-title" id="qv-title">Product Title</h2>
                    <div class="qv-price-container" id="qv-price-container"></div>
                    
                    <div class="qv-variants-section">
                        <h4 class="qv-section-title">Color/Style: <span id="qv-selected-variant-label"></span></h4>
                        <div class="qv-swatches" id="qv-swatches"></div>
                    </div>

                    <div class="qv-qty-section">
                        <h4 class="qv-section-title">Quantity</h4>
                        <div class="qty-selector">
                            <button class="qty-btn" id="qv-qty-minus">-</button>
                            <input type="number" id="qv-qty-input" value="1" min="1" readonly>
                            <button class="qty-btn" id="qv-qty-plus">+</button>
                        </div>
                    </div>

                    <button class="qv-add-btn" id="qv-add-to-cart">Add to Cart</button>

                    <div class="qv-accordions">
                        <div class="qv-accordion">
                            <button class="qv-accordion-trigger active" onclick="toggleAccordion(this)">Description <i class="fas fa-chevron-down"></i></button>
                            <div class="qv-accordion-panel" style="display: block;">
                                <p id="qv-desc"></p>
                            </div>
                        </div>
                        <div class="qv-accordion">
                            <button class="qv-accordion-trigger" onclick="toggleAccordion(this)">Details & Care <i class="fas fa-chevron-down"></i></button>
                            <div class="qv-accordion-panel">
                                <p id="qv-details"></p>
                            </div>
                        </div>
                        <div class="qv-accordion">
                            <button class="qv-accordion-trigger" onclick="toggleAccordion(this)">Shipping & Returns <i class="fas fa-chevron-down"></i></button>
                            <div class="qv-accordion-panel">
                                <p id="qv-shipping"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    // 4. Mobile Menu Drawer
    const mobileNavHtml = `
    <div class="mobile-nav-overlay" id="mobile-nav-overlay">
        <div class="mobile-nav-drawer">
            <div class="mobile-nav-header">
                <h2 class="logo-text">toyOtoy.in</h2>
                <button class="mobile-nav-close" id="mobile-nav-close">&times;</button>
            </div>
            <ul class="mobile-nav-links">
                <li><a href="sale.html" class="highlight-link">Sale</a></li>
                <li><a href="bestsellers.html">Bestsellers</a></li>
                <li><a href="toys.html">Crochet Toys</a></li>
                <li><a href="story.html">Our Story</a></li>
            </ul>
            <div class="mobile-nav-footer">
                <div class="mobile-socials">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                </div>
                <p>&copy; 2026 toyOtoy.in</p>
            </div>
        </div>
    </div>`;

    // Insert overlay wrappers to the bottom of body
    const div = document.createElement('div');
    div.id = 'dynamic-ui-overlays';
    div.innerHTML = cartHtml + searchHtml + quickViewHtml + mobileNavHtml;
    document.body.appendChild(div);
}

// Render product list with swatches, hover states, and Quick View triggers
const productGrid = document.getElementById('product-grid');

function renderProducts() {
    if (!productGrid) return;
    
    const pageType = document.body.getAttribute('data-page');
    let filteredProducts = products;

    if (pageType === 'sale') {
        filteredProducts = products.filter(p => p.isSale);
    } else if (pageType === 'bestsellers') {
        filteredProducts = products.filter(p => p.bestseller);
    } else if (pageType === 'toys') {
        filteredProducts = products.filter(p => p.category === 'toys');
    } else if (pageType === 'home') {
        filteredProducts = products.filter(p => p.bestseller || p.isSale).slice(0, 8);
    }

    productGrid.innerHTML = '';

    filteredProducts.forEach((product, index) => {
        const delay = 0.08 * (index % 4);
        
        let badges = '';
        if (product.bestseller) badges += `<div class="badge badge-bestseller">Best Seller</div>`;
        if (product.isSale) badges += `<div class="badge badge-sale">Sale</div>`;
        
        let priceHTML = '';
        if (product.isSale) {
            priceHTML = `<span class="price-mrp">${product.mrp}</span><span class="price-sale">${product.price}</span>`;
        } else {
            priceHTML = `<span class="price-regular">${product.price}</span>`;
        }

        // Generate swatches
        let swatchesHTML = '';
        if (product.variants && product.variants.length > 1) {
            swatchesHTML += `<div class="product-swatches">`;
            product.variants.forEach((v, idx) => {
                swatchesHTML += `
                    <span 
                        class="swatch-dot ${idx === 0 ? 'active' : ''}" 
                        style="background-color: ${v.color};" 
                        title="${v.name}"
                        onclick="event.stopPropagation(); changeCardImage(this, '${product.id}', '${v.image}', '${v.name}')"
                    ></span>`;
            });
            swatchesHTML += `</div>`;
        }

        // Stable rating based on name
        const nameCode = product.name.charCodeAt(0) + product.name.charCodeAt(product.name.length - 1);
        const rating = (4.5 + (nameCode % 5) * 0.1).toFixed(1);
        const reviewsCount = 15 + (nameCode % 75);

        let starsHTML = `<div class="rating-stars">`;
        const fullStars = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += `<i class="fas fa-star"></i>`;
            } else if (i === fullStars && (rating % 1) >= 0.5) {
                starsHTML += `<i class="fas fa-star-half-alt"></i>`;
            } else {
                starsHTML += `<i class="far fa-star"></i>`;
            }
        }
        starsHTML += ` <span class="review-count">★ ${rating} (${reviewsCount})</span></div>`;

        const card = document.createElement('div');
        card.className = `product-card fade-in-up`;
        card.style.animationDelay = `${delay}s`;
        card.setAttribute('data-id', product.id);
        
        card.innerHTML = `
            <div class="badge-container">${badges}</div>
            <div class="product-img-container" onclick="openQuickView('${product.id}')">
                <div class="card-slider-wrapper">
                    <div class="card-slider-track" data-current="0">
                        <img src="${product.image}" alt="${product.name}" class="main-card-img slide-img">
                        <img src="${product.hoverImage || product.image}" alt="${product.name}" class="main-card-img slide-img">
                    </div>
                </div>
                <div class="badge-360"><i class="far fa-eye"></i> Quick View</div>
                <div class="card-slider-arrows">
                    <button class="card-arrow card-arrow-left" onclick="event.stopPropagation(); cardSlidePrev(this)">&lsaquo;</button>
                    <button class="card-arrow card-arrow-right" onclick="event.stopPropagation(); cardSlideNext(this)">&rsaquo;</button>
                </div>
                <div class="card-slider-dots">
                    <span class="card-dot active" onclick="event.stopPropagation(); cardSetSlide(this, 0)"></span>
                    <span class="card-dot" onclick="event.stopPropagation(); cardSetSlide(this, 1)"></span>
                </div>
                <div class="quick-view-hover-btn">Quick View</div>
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="openQuickView('${product.id}')">${product.name}</h3>
                ${starsHTML}
                ${swatchesHTML}
                <div class="price-container">
                    ${priceHTML}
                </div>
                <button class="add-btn" onclick="event.stopPropagation(); handleAddToCartBtn(this, '${product.id}')">Add to Cart</button>
            </div>
        `;

        // Auto-slideshow on product card hover
        let autoplayInterval = null;
        const track = card.querySelector('.card-slider-track');
        const dots = card.querySelectorAll('.card-dot');
        
        function updateSlide(index) {
            track.style.transform = `translateX(-${index * 50}%)`;
            track.setAttribute('data-current', index);
            dots.forEach((dot, dIdx) => {
                if (dIdx === index) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }
        
        card.addEventListener('mouseenter', () => {
            let currentSlide = parseInt(track.getAttribute('data-current') || '0');
            autoplayInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % 2;
                updateSlide(currentSlide);
            }, 1800);
        });
        
        card.addEventListener('mouseleave', () => {
            clearInterval(autoplayInterval);
            updateSlide(0);
        });

        productGrid.appendChild(card);
    });
}

// Swatch selector trigger on product card
window.changeCardImage = function(swatchEl, productId, newImage, variantName) {
    const card = swatchEl.closest('.product-card');
    const imgs = card.querySelectorAll('.slide-img');
    
    // Set active swatch class
    const siblings = swatchEl.parentElement.querySelectorAll('.swatch-dot');
    siblings.forEach(s => s.classList.remove('active'));
    swatchEl.classList.add('active');

    // Update both images in the card slider
    imgs.forEach(img => {
        img.style.opacity = '0.7';
    });
    setTimeout(() => {
        imgs.forEach(img => {
            img.src = newImage;
            img.style.opacity = '1';
        });
    }, 150);

    // Briefly show variant feedback
    card.setAttribute('data-selected-variant', variantName);
}

// Card Slider Control Functions
window.cardSlidePrev = function(btn) {
    const card = btn.closest('.product-card');
    const track = card.querySelector('.card-slider-track');
    const dots = card.querySelectorAll('.card-dot');
    let currentSlide = parseInt(track.getAttribute('data-current') || '0');
    
    const prevSlide = (currentSlide - 1 + 2) % 2;
    track.style.transform = `translateX(-${prevSlide * 50}%)`;
    track.setAttribute('data-current', prevSlide);
    
    dots.forEach((dot, dIdx) => {
        if (dIdx === prevSlide) dot.classList.add('active');
        else dot.classList.remove('active');
    });
};

window.cardSlideNext = function(btn) {
    const card = btn.closest('.product-card');
    const track = card.querySelector('.card-slider-track');
    const dots = card.querySelectorAll('.card-dot');
    let currentSlide = parseInt(track.getAttribute('data-current') || '0');
    
    const nextSlide = (currentSlide + 1) % 2;
    track.style.transform = `translateX(-${nextSlide * 50}%)`;
    track.setAttribute('data-current', nextSlide);
    
    dots.forEach((dot, dIdx) => {
        if (dIdx === nextSlide) dot.classList.add('active');
        else dot.classList.remove('active');
    });
};

window.cardSetSlide = function(dot, index) {
    const card = dot.closest('.product-card');
    const track = card.querySelector('.card-slider-track');
    const dots = card.querySelectorAll('.card-dot');
    
    track.style.transform = `translateX(-${index * 50}%)`;
    track.setAttribute('data-current', index);
    
    dots.forEach((d, dIdx) => {
        if (dIdx === index) d.classList.add('active');
        else d.classList.remove('active');
    });
};

// Cart Mechanics
function saveCart() {
    localStorage.setItem('TOYOTOY_CART', JSON.stringify(cart));
    updateCartCount();
    renderCartDrawerItems();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        // Pulse animation
        cartCountElement.style.transform = 'scale(1.4)';
        setTimeout(() => {
            cartCountElement.style.transform = 'scale(1)';
        }, 250);
    }
    
    const drawerCountEl = document.querySelector('.cart-drawer-count');
    if (drawerCountEl) {
        drawerCountEl.textContent = totalItems;
    }
}

// Add Item from Card trigger
window.handleAddToCartBtn = function(btn, productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get selected variant if clicked via swatch
    const card = btn.closest('.product-card');
    let selectedVariant = product.variants ? product.variants[0].name : 'Default';
    let selectedImage = product.image;

    if (card) {
        const activeSwatch = card.querySelector('.swatch-dot.active');
        if (activeSwatch) {
            selectedVariant = activeSwatch.getAttribute('title');
            const matchVariant = product.variants.find(v => v.name === selectedVariant);
            if (matchVariant) selectedImage = matchVariant.image;
        }
    }

    addToCartState(product, selectedVariant, selectedImage, 1);

    // Button feedback state
    const originalText = btn.textContent;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Adding...`;
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
        btn.innerHTML = `<i class="fas fa-check"></i> Added!`;
        btn.style.backgroundColor = 'var(--text-dark)';
        btn.style.color = '#fff';
        
        // Slide open the cart drawer!
        openCartDrawer();
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = 'transparent';
            btn.style.color = 'var(--text-dark)';
            btn.style.pointerEvents = 'auto';
        }, 1200);
    }, 450);
}

function addToCartState(product, variant, image, quantity) {
    const existingIndex = cart.findIndex(item => item.product.id === product.id && item.variant === variant);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            product: { ...product, description: undefined, details: undefined, shipping: undefined }, // trim data
            variant: variant,
            selectedImage: image,
            quantity: quantity
        });
    }
    saveCart();
}

// Cart Drawer Renderer
function renderCartDrawerItems() {
    const container = document.getElementById('cart-drawer-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-view">
                <i class="fas fa-shopping-bag empty-cart-icon"></i>
                <p>Your bag is empty.</p>
                <button class="btn-primary" onclick="closeCartDrawer()">Shop Our Stitches</button>
            </div>
        `;
        document.getElementById('cart-subtotal').textContent = '₹0';
        updateFreeShippingProgress(0);
        return;
    }

    let subtotal = 0;
    container.innerHTML = '';

    cart.forEach((item, index) => {
        const itemPrice = parseInt(item.product.price.replace(/[^\d]/g, ''));
        const lineTotal = itemPrice * item.quantity;
        subtotal += lineTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-drawer-item';
        cartItem.innerHTML = `
            <img src="${item.selectedImage}" alt="${item.product.name}">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.product.name}</h4>
                <p class="cart-item-variant">Variant: ${item.variant}</p>
                <div class="cart-item-price-row">
                    <span class="cart-item-price">${item.product.price}</span>
                    <div class="qty-selector small-qty">
                        <button class="qty-btn" onclick="updateItemQty(${index}, -1)">-</button>
                        <input type="number" value="${item.quantity}" readonly>
                        <button class="qty-btn" onclick="updateItemQty(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeCartItem(${index})"><i class="far fa-trash-alt"></i></button>
        `;
        container.appendChild(cartItem);
    });

    document.getElementById('cart-subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    updateFreeShippingProgress(subtotal);
}

window.updateItemQty = function(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
    }
}

window.removeCartItem = function(index) {
    if (cart[index]) {
        cart.splice(index, 1);
        saveCart();
    }
}

// Free Shipping Calculator
function updateFreeShippingProgress(subtotal) {
    const progressBar = document.getElementById('cart-progress-fill');
    const progressText = document.getElementById('cart-progress-text');
    if (!progressBar || !progressText) return;

    const threshold = 2000;
    if (subtotal >= threshold) {
        progressBar.style.width = '100%';
        progressText.innerHTML = `✨ You unlocked <strong>FREE shipping</strong>! ✨`;
    } else {
        const remaining = threshold - subtotal;
        const percent = (subtotal / threshold) * 100;
        progressBar.style.width = `${percent}%`;
        progressText.innerHTML = `Add <strong>₹${remaining.toLocaleString('en-IN')}</strong> more for <strong>FREE shipping</strong>!`;
    }
}

// Add Cross-Sell Item Trigger
window.addGiftWrapToCart = function(btn) {
    const giftWrapProduct = {
        id: 'sku-gift-wrap',
        name: 'Gift Wrapping & Card',
        price: '₹99',
        image: 'product_images/prod_1.png',
        category: 'addon',
        isSale: false
    };

    addToCartState(giftWrapProduct, 'Gift Wrapped', 'product_images/prod_1.png', 1);
    
    btn.textContent = 'Added';
    btn.style.pointerEvents = 'none';
    btn.style.backgroundColor = 'var(--text-dark)';
    btn.style.color = '#fff';
    
    setTimeout(() => {
        btn.textContent = 'Add';
        btn.style.pointerEvents = 'auto';
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--text-dark)';
    }, 1500);

    openCartDrawer();
}

// Cart Drawer Open/Close Transitions
window.openCartDrawer = function() {
    document.getElementById('cart-drawer-overlay').classList.add('open');
    document.body.style.overflow = 'hidden'; // prevent page scrolling
}

window.closeCartDrawer = function() {
    document.getElementById('cart-drawer-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Quick View Lightbox Modal
window.openQuickView = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    activeQuickViewProduct = product;
    currentVariant = product.variants ? product.variants[0] : null;
    currentImageIndex = 0;

    // Populating modal fields
    const modal = document.getElementById('quickview-overlay');
    const title = document.getElementById('qv-title');
    const badge = document.getElementById('qv-badge');
    const priceContainer = document.getElementById('qv-price-container');
    const desc = document.getElementById('qv-desc');
    const details = document.getElementById('qv-details');
    const shipping = document.getElementById('qv-shipping');
    const qtyInput = document.getElementById('qv-qty-input');

    qtyInput.value = 1;
    title.textContent = product.name;
    desc.textContent = product.description;
    details.innerHTML = product.details;
    shipping.innerHTML = product.shipping;

    // Badges setup
    if (product.bestseller) {
        badge.textContent = 'Bestseller';
        badge.style.display = 'inline-block';
    } else if (product.isSale) {
        badge.textContent = 'Sale';
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }

    // Price rendering
    if (product.isSale) {
        priceContainer.innerHTML = `<span class="qv-mrp">${product.mrp}</span><span class="qv-price">${product.price}</span>`;
    } else {
        priceContainer.innerHTML = `<span class="qv-price">${product.price}</span>`;
    }

    // Render gallery thumbnails
    const thumbnailsContainer = document.getElementById('qv-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    // Add primary, hover, and variant images to gallery
    const galleryImages = [];
    if (product.image.includes('_front.png')) {
        const skuNum = product.id.split('-')[1];
        galleryImages.push(
            `product_images/sku_${skuNum}_front.png`,
            `product_images/sku_${skuNum}_side_left.png`,
            `product_images/sku_${skuNum}_side_right.png`,
            `product_images/sku_${skuNum}_back.png`,
            `product_images/sku_${skuNum}_top.png`,
            `product_images/sku_${skuNum}_bottom.png`,
            `product_images/sku_${skuNum}_closeup_1.png`,
            `product_images/sku_${skuNum}_closeup_2.png`,
            `product_images/sku_${skuNum}_closeup_3.png`,
            `product_images/sku_${skuNum}_closeup_4.png`,
            `product_images/sku_${skuNum}_closeup_5.png`,
            `product_images/sku_${skuNum}_closeup_6.png`,
            `product_images/sku_${skuNum}_multiview.png`
        );
    } else {
        galleryImages.push(product.image);
        if (product.hoverImage && product.hoverImage !== product.image) {
            galleryImages.push(product.hoverImage);
        }
    }
    if (product.variants) {
        product.variants.forEach(v => {
            if (!galleryImages.includes(v.image)) galleryImages.push(v.image);
        });
    }

    // Clone the main image container to strip old listeners
    const qvMainImgContainer = document.querySelector('.quickview-main-img-container');
    const newQvMainImgContainer = qvMainImgContainer.cloneNode(true);
    qvMainImgContainer.parentNode.replaceChild(newQvMainImgContainer, qvMainImgContainer);

    const mainImg = document.getElementById('qv-main-img');
    const prevBtn = document.getElementById('qv-arrow-left');
    const nextBtn = document.getElementById('qv-arrow-right');

    // Set Initial Main Image
    mainImg.src = product.image;

    // Render variants swatches
    const swatchesContainer = document.getElementById('qv-swatches');
    const label = document.getElementById('qv-selected-variant-label');
    
    if (product.variants && product.variants.length > 0) {
        swatchesContainer.parentElement.style.display = 'block';
        label.textContent = currentVariant.name;
        swatchesContainer.innerHTML = '';
        
        product.variants.forEach((v, idx) => {
            const swatch = document.createElement('span');
            swatch.className = `qv-swatch-dot ${idx === 0 ? 'active' : ''}`;
            swatch.style.backgroundColor = v.color;
            swatch.title = v.name;
            
            swatch.addEventListener('click', () => {
                swatchesContainer.querySelectorAll('.qv-swatch-dot').forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                currentVariant = v;
                label.textContent = v.name;
                mainImg.src = v.image;
                
                // Align thumb active state
                const matchIdx = galleryImages.indexOf(v.image);
                if (matchIdx > -1) {
                    currentImageIndex = matchIdx;
                    updateActiveThumbnail(thumbnailsContainer, matchIdx);
                }
            });

            swatchesContainer.appendChild(swatch);
        });
    } else {
        swatchesContainer.parentElement.style.display = 'none';
    }



    galleryImages.forEach((imgSrc, idx) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `qv-thumbnail ${idx === 0 ? 'active' : ''}`;
        
        thumb.addEventListener('click', () => {
            thumbnailsContainer.querySelectorAll('.qv-thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImg.src = imgSrc;
            currentImageIndex = idx;
        });

        thumbnailsContainer.appendChild(thumb);
    });

    // Gallery Arrows navigation on new container elements
    prevBtn.onclick = () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        mainImg.src = galleryImages[currentImageIndex];
        updateActiveThumbnail(thumbnailsContainer, currentImageIndex);
    };

    nextBtn.onclick = () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        mainImg.src = galleryImages[currentImageIndex];
        updateActiveThumbnail(thumbnailsContainer, currentImageIndex);
    };

    // Quick View image loaded cleanly without hover interactions

    // Add to Cart handler within modal
    const addToCartModalBtn = document.getElementById('qv-add-to-cart');
    addToCartModalBtn.onclick = () => {
        const qty = parseInt(qtyInput.value);
        const activeImg = mainImg.src;
        const vName = currentVariant ? currentVariant.name : 'Default';
        
        addToCartState(product, vName, activeImg, qty);
        
        addToCartModalBtn.textContent = 'Added to Bag!';
        addToCartModalBtn.style.backgroundColor = 'var(--text-dark)';
        
        setTimeout(() => {
            addToCartModalBtn.textContent = 'Add to Cart';
            addToCartModalBtn.style.backgroundColor = '';
            closeQuickView();
            openCartDrawer();
        }, 800);
    };

    // Open modal drawer
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function updateActiveThumbnail(container, idx) {
    const thumbs = container.querySelectorAll('.qv-thumbnail');
    thumbs.forEach(t => t.classList.remove('active'));
    if (thumbs[idx]) thumbs[idx].classList.add('active');
}

window.closeQuickView = function() {
    document.getElementById('quickview-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Quick View Modal Accordions
window.toggleAccordion = function(button) {
    const panel = button.nextElementSibling;
    const isVisible = panel.style.display === 'block';
    
    // Collapse all siblings
    const parent = button.closest('.qv-accordions');
    parent.querySelectorAll('.qv-accordion-panel').forEach(p => p.style.display = 'none');
    parent.querySelectorAll('.qv-accordion-trigger').forEach(b => b.classList.remove('active'));

    if (!isVisible) {
        panel.style.display = 'block';
        button.classList.add('active');
    }
}

// Search Drawer Overlay Logic
window.openSearchDrawer = function() {
    document.getElementById('search-drawer-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.getElementById('search-input').focus();
    }, 250);
}

window.closeSearchDrawer = function() {
    document.getElementById('search-drawer-overlay').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').innerHTML = '';
}

window.fillSearch = function(tag) {
    const input = document.getElementById('search-input');
    input.value = tag;
    handleSearch(tag);
}

function handleSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    if (!query.trim()) {
        resultsContainer.innerHTML = '';
        suggestionsContainer.style.display = 'block';
        return;
    }

    suggestionsContainer.style.display = 'none';

    // Filter products
    const matches = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(query.toLowerCase()))
    );

    if (matches.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-empty-results">
                <p>No results found for "${query}". Try searching "dino", "bunny" or "elephant".</p>
            </div>
        `;
        return;
    }

    resultsContainer.innerHTML = '';
    matches.forEach(p => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.onclick = () => {
            closeSearchDrawer();
            openQuickView(p.id);
        };

        item.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <div class="search-result-info">
                <h5>${p.name}</h5>
                <p class="search-result-cat">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</p>
                <span class="search-result-price">${p.price}</span>
            </div>
            <i class="fas fa-chevron-right search-item-chevron"></i>
        `;
        resultsContainer.appendChild(item);
    });
}

// Smart Sticky Header Behavior (hides on scroll down, slide-in on scroll up)
let lastScrollTop = 0;
const header = document.querySelector('.header');

function handleHeaderScroll() {
    if (!header) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add background shadow when scrolled a little
    if (scrollTop > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }

    // Hide/Show behavior
    if (scrollTop > lastScrollTop && scrollTop > 150) {
        // Scrolling down
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Scroll animations for card list
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 30) {
            element.classList.add('visible');
        }
    });
}

// Announcement Rotator Logic
function startAnnouncementRotator() {
    const bar = document.querySelector('.announcement-bar p');
    if (!bar) return;

    setInterval(() => {
        bar.style.transform = 'translateY(-15px)';
        bar.style.opacity = '0';
        setTimeout(() => {
            bar.style.transform = 'translateY(15px)';
            activeAnnouncementIndex = (activeAnnouncementIndex + 1) % announcements.length;
            bar.textContent = announcements[activeAnnouncementIndex];
            setTimeout(() => {
                bar.style.transform = 'translateY(0)';
                bar.style.opacity = '1';
            }, 50);
        }, 400);
    }, 4500);
}

// Document Load Initiators
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Overlays
    injectUIOverlays();
    
    // 2. Render Cards (if listing page)
    renderProducts();
    
    // 3. Initialize Cart State
    updateCartCount();
    renderCartDrawerItems();

    // 4. Start Banners Rotator
    startAnnouncementRotator();
    startReviewAutoSlide();

    // 5. Add Sticky Header listeners
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        handleScrollAnimation();
    });
    // Initial run
    handleScrollAnimation();

    // 6. Bind Event Listeners for Overlays
    
    // Search Drawer trigger
    const searchIcons = document.querySelectorAll('.utility-icons a');
    let searchBtn = null;
    searchIcons.forEach(a => {
        if (a.querySelector('.fa-search')) {
            searchBtn = a;
        }
    });
    
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openSearchDrawer();
        });
    }

    // Cart Drawer trigger
    const cartToggle = document.getElementById('cart-toggle');
    if (cartToggle) {
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    }

    // Hamburger Mobile Menu trigger
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', () => {
            document.getElementById('mobile-nav-overlay').classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close buttons binding
    document.getElementById('cart-drawer-close').onclick = closeCartDrawer;
    document.getElementById('cart-drawer-overlay').onclick = (e) => {
        if (e.target.id === 'cart-drawer-overlay') closeCartDrawer();
    };

    document.getElementById('search-drawer-close').onclick = closeSearchDrawer;
    document.getElementById('search-drawer-overlay').onclick = (e) => {
        if (e.target.id === 'search-drawer-overlay') closeSearchDrawer();
    };

    document.getElementById('quickview-close').onclick = closeQuickView;
    document.getElementById('quickview-overlay').onclick = (e) => {
        if (e.target.id === 'quickview-overlay') closeQuickView();
    };

    document.getElementById('mobile-nav-close').onclick = () => {
        document.getElementById('mobile-nav-overlay').classList.remove('open');
        document.body.style.overflow = '';
    };
    document.getElementById('mobile-nav-overlay').onclick = (e) => {
        if (e.target.id === 'mobile-nav-overlay') {
            document.getElementById('mobile-nav-overlay').classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    // Live search typing listener
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear-btn');
    
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    searchClear.onclick = () => {
        searchInput.value = '';
        handleSearch('');
        searchInput.focus();
    };

    // Quantity selectors in Quick View
    const qvQtyMinus = document.getElementById('qv-qty-minus');
    const qvQtyPlus = document.getElementById('qv-qty-plus');
    const qvQtyInput = document.getElementById('qv-qty-input');

    qvQtyMinus.onclick = () => {
        let val = parseInt(qvQtyInput.value);
        if (val > 1) qvQtyInput.value = val - 1;
    };

    qvQtyPlus.onclick = () => {
        let val = parseInt(qvQtyInput.value);
        qvQtyInput.value = val + 1;
    };

    // ESC key closes all active drawer overlays
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartDrawer();
            closeSearchDrawer();
            closeQuickView();
            document.getElementById('mobile-nav-overlay').classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // Handle Active Nav Links Highlight
    const pageType = document.body.getAttribute('data-page');
    const links = document.querySelectorAll('.nav-menu a, .mobile-nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === `${pageType}.html`) {
            link.classList.add('active');
        }
    });
});

// Testimonial Reviews Slider Logic
let activeReviewIndex = 0;
window.setReviewSlide = function(index) {
    const track = document.getElementById('reviews-track');
    const dots = document.querySelectorAll('.reviews-dot');
    if (!track) return;
    activeReviewIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, idx) => {
        if (idx === index) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function startReviewAutoSlide() {
    const track = document.getElementById('reviews-track');
    if (!track) return;
    setInterval(() => {
        activeReviewIndex = (activeReviewIndex + 1) % 3;
        setReviewSlide(activeReviewIndex);
    }, 5000);
}
