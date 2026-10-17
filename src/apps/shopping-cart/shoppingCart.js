const productsList = document.getElementById("products-list");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const newProductButton =  document.getElementById("add_new_product");
const newProductModal = document.getElementById("new_product_modal");
const closeModalButton = document.getElementById("close_new_product_modal");
const newProductModalForm = document.getElementById("new_product_form");
const newProductNameInput = document.getElementById("new_product_name");
const newProductPriceInput = document.getElementById("new_product_price");
const payButton = document.getElementById("pay_button");

const products = [
  {
    id: 1,
    name: "Teclado Mecanico",
    price: 100,
  },
  {
    id: 2,
    name: "Mouse Inalambrico",
    price: 50,
  },
  {
    id: 3,
    name: "Auriculares Gaming",
    price: 75,
  },
];

const cart = [];

function renderProducts() {
    productsList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("product-item");
    li.textContent = `${product.name} $${product.price}`;
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart");
    li.appendChild(addToCartButton);
    productsList.appendChild(li);
    addToCartButton.textContent = "Agregar al carrito";
        addToCartButton.addEventListener("click", () => {
            const existingProduct = cart.find((item) => item.productId === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    productId: product.id,
                    productName: product.name,
                    productPrice: product.price,
                    quantity: 1,
                });
            }
            renderCart();
        });

        
  });
}

renderProducts();



function renderCart() {
  cartList.textContent = "";

    const cartTotalPrice = cart.reduce((total, product) => {
        return total + product.productPrice * product.quantity;
    }, 0);

  cart.forEach((product) => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete_card_button");
    li.textContent = `${product.productName} — $${product.productPrice} — Cantidad: ${product.quantity}`;
    li.classList.add("cart-item");

    cartList.appendChild(li);
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      cart.splice(cart.indexOf(product), 1);
      renderCart();
    });
    
  });
  
   
  

  cartTotal.textContent = `$${cartTotalPrice}`;
  payButton.disabled = cart.length === 0;
}



function showNewProductModal() {
    newProductModal.showModal();
}

newProductButton.addEventListener("click", showNewProductModal);

function closeNewProductModal() {
    newProductModal.close();
}

closeModalButton.addEventListener("click", closeNewProductModal);





function handleSubmitNewProduct(event) {
    event.preventDefault();
    if(!validateProductForm()) {
        return;
    } 

    const newProductName = newProductNameInput.value.trim();
    const newProductPrice = parseFloat(newProductPriceInput.value);

    const newProduct = {
        id: products.length + 1,
        name: newProductName,
        price: newProductPrice,
    }

    products.push(newProduct);
    renderProducts();
    closeNewProductModal();
    newProductModalForm.reset();
    

}

newProductModalForm.addEventListener("submit", handleSubmitNewProduct);

function validateProductForm() {
    newProductNameInput.setCustomValidity(
        newProductNameInput.value.trim() === "" ? "El nombre del producto es obligatorio." : ""
    );

    newProductPriceInput.setCustomValidity(
        newProductPriceInput.value.trim() === "" ? "El precio del producto es obligatorio." : ""
    );

    return newProductModalForm.reportValidity();

}