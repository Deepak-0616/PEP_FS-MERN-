let cart = [];

function addItem() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;

    if (name === "" || price === "") {
        alert("Enter valid details");
        return;
    }

    cart.push({ name, price: Number(price) });

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";

}

function removeItem(index) {
    cart.splice(index, 1);
    showCart();
}

function clearCart() {
    cart = [];
    showCart();
}

function showCart() {
    let list = document.getElementById("cartList");
    list.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button class="delete-btn" onclick="removeItem(${index})">X</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("total").innerText =
        cart.length === 0 ? "Cart is empty 🛒" : "Total: ₹" + total;
}