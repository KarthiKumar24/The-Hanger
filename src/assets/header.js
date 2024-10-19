// const cart = [];

// function updateCartDisplay() {
//   const cartContainer = document.querySelector('.cart-container');

//   if (cart.length === 0) {
//     cartContainer.classList.add('cart-empty');
//   } else {
//     cartContainer.classList.remove('cart-empty');
//   }
// }

// updateCartDisplay();

function check() {
    const checkbox = document.getElementById('check');
    const productContainer = document.querySelector('.cart-container');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            productContainer.classList.add('visible');
        } else {
            productContainer.classList.remove('visible');
        }
    });
}



