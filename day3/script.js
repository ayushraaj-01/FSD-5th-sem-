const products = document.getElementById('products');

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

const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const addToCart = (product, quantity) => {
    const cart = readCart();
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity,
        });
    }

    saveCart(cart);
};

const getproductdata = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    const productsdata = data.products;

    productsdata.forEach((product) => {

        const div = document.createElement('div');
        div.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

        const title = document.createElement('h3');
        title.innerText = product.title;
        const price = document.createElement('p');
        price.innerText = `$${product.price.toFixed(2)}`;
        const incrementBtn = document.createElement('button');
        incrementBtn.innerText = '+';
        const decrementBtn = document.createElement('button');
        decrementBtn.innerText = '-';
        const quantity = document.createElement('span');
        quantity.innerText = '1';
        const controls = document.createElement('div');
        controls.className = 'product-actions';
        const addToCartBtn = document.createElement('button');
        addToCartBtn.className = 'add-to-cart';
        addToCartBtn.innerText = 'Add to Cart';

        let count = 1;
        incrementBtn.addEventListener('click', () => {
            count += 1;
            quantity.innerText = String(count);
        });

        decrementBtn.addEventListener('click', () => {
            if (count > 1) {
                count -= 1;
                quantity.innerText = String(count);
            }
        });

        addToCartBtn.addEventListener('click', () => {
            addToCart(product, count);
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        controls.appendChild(decrementBtn);
        controls.appendChild(quantity);
        controls.appendChild(incrementBtn);
        div.appendChild(controls);
        div.appendChild(addToCartBtn);

        products.appendChild(div);
    });
    };

getproductdata();