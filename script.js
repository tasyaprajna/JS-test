//object literals

const cart = document.getElementById("cart");

//ES5 
function addProduct(name, category) {
    return {
        name: name,
        category //object literal, buat lebih singkat dan gaada pengulangan
    };
}

var getProduct = addProduct("Iphone 12", "Smartphone");

console.log(getProduct);

cart.innerHTML = `Product 1: ${getProduct.name}, Category ${getProduct.category}`;