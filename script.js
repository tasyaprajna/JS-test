//ambil elemeent
const products = document.getElementById('products');


const allProducts = "https://fakestoreapi.com/products";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(allProducts)
    .then(res => res.json())
    .then(json => {
        json.map((product) => {
            let li = createNode("li");
            let img = createNode("img");
            let span = createNode("span");

            img.setAttribute("width", "200");

            img.src = product.image;
            span.innerHTML = `${product.title}, ${product.price}`;
            append(li, img);
            append(li, span);
            append(products, li);
        })
    })
    .catch(error => console.log(error)); //buat tampilin errornya apa