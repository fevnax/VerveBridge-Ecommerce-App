const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.querySelector('.cart-count');
const cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;

        cart.push({
            id: productId,
            name: productName,
            price: productPrice
        });

        updateCart();
        animateButton(button);
    });
});

function updateCart() {
    cartCountElement.textContent = cart.length;
    cartCountElement.classList.add('fade-in');
    setTimeout(() => cartCountElement.classList.remove('fade-in'), 300);

    console.log('Cart updated:', cart);
}

function animateButton(button) {
    button.textContent = 'Added!';
    button.style.background = 'var(--accent-color)';
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.background = '';
    }, 1000);
}

// Stagger fade-in animation for product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
    setTimeout(() => {
        card.style.opacity = '1';
    }, index * 100);
});