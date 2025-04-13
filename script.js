function addToCart(name, price) {
    // Get existing cart from localStorage or start a new one
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new item
    cart.push({ name, price });

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart!`);
}



function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");

    if (!container) return; // Don't run if we're not on cart page

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;
    container.innerHTML = "<ul>";
    cart.forEach(item => {
        container.innerHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
        total += item.price;
    });
    container.innerHTML += `</ul><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
    alert("Cart has been cleared.");
}

window.onload = displayCart;



