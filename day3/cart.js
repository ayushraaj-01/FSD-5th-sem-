const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

const CART_KEY = 'day3-cart-items';

const readCart = () => {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) {
        return [];
    }

    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
};

const renderCart = () => {
    const cart = readCart();
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'cart-empty';
        emptyItem.innerText = 'No items added yet';
        cartItems.appendChild(emptyItem);
        cartTotal.innerText = '$0.00';
        return;
    }

    let total = 0;
    cart.forEach((item) => {
        const li = document.createElement('li');
        const name = document.createElement('span');
        name.innerText = `${item.title} x ${item.quantity}`;

        const subtotal = item.price * item.quantity;
        const price = document.createElement('span');
        price.innerText = `$${subtotal.toFixed(2)}`;

        li.appendChild(name);
        li.appendChild(price);
        cartItems.appendChild(li);

        total += subtotal;
    });

    cartTotal.innerText = `$${total.toFixed(2)}`;
};

renderCart();
