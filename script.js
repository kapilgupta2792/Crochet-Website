// Expanded Product Data (12 SKUs)
const products = [
    // Toys
    {
        id: 'sku-1',
        name: 'Little Elliot Crochet Elephant',
        category: 'toys',
        mrp: '₹1,299',
        price: '₹999',
        isSale: true,
        image: 'assets/sku_1.png',
        bestseller: true
    },
    {
        id: 'sku-3',
        name: 'Cuddle Bunny Toy',
        category: 'toys',
        mrp: null,
        price: '₹1,499',
        isSale: false,
        image: 'assets/cat_toys.png', 
        bestseller: false
    },
    {
        id: 'sku-5',
        name: 'Timmy The Turtle',
        category: 'toys',
        mrp: '₹999',
        price: '₹799',
        isSale: true,
        image: 'assets/sku_5.png',
        bestseller: true
    },
    {
        id: 'sku-6',
        name: 'Gerry The Giraffe',
        category: 'toys',
        mrp: null,
        price: '₹1,699',
        isSale: false,
        image: 'assets/sku_6.png',
        bestseller: false
    },
    {
        id: 'sku-9',
        name: 'Sleepy Bear Cub',
        category: 'toys',
        mrp: '₹1,199',
        price: '₹1,099',
        isSale: true,
        image: 'assets/cat_toys.png', // reusing for demo
        bestseller: false
    },
    {
        id: 'sku-10',
        name: 'Baby Hippo',
        category: 'toys',
        mrp: null,
        price: '₹899',
        isSale: false,
        image: 'assets/sku_1.png', // reusing
        bestseller: false
    },

    // Flowers
    {
        id: 'sku-2',
        name: 'Blush Pink Crochet Rose',
        category: 'flowers',
        mrp: '₹599',
        price: '₹449',
        isSale: true,
        image: 'assets/sku_2.png',
        bestseller: true
    },
    {
        id: 'sku-4',
        name: 'Spring Daisy Bouquet',
        category: 'flowers',
        mrp: null,
        price: '₹1,599',
        isSale: false,
        image: 'assets/cat_flowers.png', 
        bestseller: true
    },
    {
        id: 'sku-7',
        name: 'Lavender Dreams Bouquet',
        category: 'flowers',
        mrp: '₹1,899',
        price: '₹1,499',
        isSale: true,
        image: 'assets/sku_7.png',
        bestseller: true
    },
    {
        id: 'sku-8',
        name: 'Sunny Tulip Single',
        category: 'flowers',
        mrp: null,
        price: '₹499',
        isSale: false,
        image: 'assets/sku_8.png',
        bestseller: false
    },
    {
        id: 'sku-11',
        name: 'Mixed Floral Basket',
        category: 'flowers',
        mrp: '₹2,499',
        price: '₹2,199',
        isSale: true,
        image: 'assets/cat_flowers.png', // reusing
        bestseller: false
    },
    {
        id: 'sku-12',
        name: 'White Lily Bouquet',
        category: 'flowers',
        mrp: null,
        price: '₹1,299',
        isSale: false,
        image: 'assets/sku_2.png', // reusing
        bestseller: false
    }
];

const productGrid = document.getElementById('product-grid');
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

// Render based on page type
function renderProducts() {
    if (!productGrid) return; // if not on a page with a grid
    
    // Determine which products to show based on data-page attribute on body
    const pageType = document.body.getAttribute('data-page');
    let filteredProducts = products;

    if (pageType === 'sale') {
        filteredProducts = products.filter(p => p.isSale);
    } else if (pageType === 'bestsellers') {
        filteredProducts = products.filter(p => p.bestseller);
    } else if (pageType === 'toys') {
        filteredProducts = products.filter(p => p.category === 'toys');
    } else if (pageType === 'flowers') {
        filteredProducts = products.filter(p => p.category === 'flowers');
    } else if (pageType === 'home') {
        // Just show a mix of 8 bestsellers/sale items
        filteredProducts = products.filter(p => p.bestseller || p.isSale).slice(0, 8);
    }

    productGrid.innerHTML = ''; // clear

    filteredProducts.forEach((product, index) => {
        const delay = 0.1 * (index % 4); // animate rows
        
        let badges = '';
        if (product.bestseller) badges += `<div class="badge badge-bestseller">Best Seller</div>`;
        if (product.isSale) badges += `<div class="badge badge-sale">Sale</div>`;
        
        let priceHTML = '';
        if (product.isSale) {
            priceHTML = `<span class="price-mrp">${product.mrp}</span><span class="price-sale">${product.price}</span>`;
        } else {
            priceHTML = `<span class="price-regular">${product.price}</span>`;
        }

        const card = document.createElement('div');
        card.className = `product-card fade-in-up`;
        card.style.animationDelay = `${delay}s`;
        
        card.innerHTML = `
            <div class="badge-container">${badges}</div>
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="price-container">
                    ${priceHTML}
                </div>
                <button class="add-btn" onclick="addToCart(this)">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Cart Logic
window.addToCart = function(btn) {
    cartCount++;
    if(cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartCountElement.style.transform = 'scale(1)';
        }, 200);
    }

    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.backgroundColor = 'var(--text-dark)';
    btn.style.color = '#fff';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--text-dark)';
    }, 1500);
}

// Scroll Animations
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight - 50) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    handleScroll();
    
    // Set active link
    const pageType = document.body.getAttribute('data-page');
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        if(link.getAttribute('href') === `${pageType}.html`) {
            link.classList.add('active');
        }
    });
});
