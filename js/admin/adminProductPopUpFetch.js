const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const productId = document.getElementById("chosenProductId");

//Get id from URL sent by products.html
const id = productId.value
const apiUrl = "http://localhost:8080/products/" + id


async function getIt() {
    const response = await fetch(apiUrl);
    const product = await response.json();
    let div = document.getElementById("image_column")
    div.style.backgroundImage = div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.1), rgba(44, 174, 186, 0.1)), url(../../img/products/icon/" + id + ".png" + ")"
    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = product.price + ",-" ;
    console.log(product)
}

getIt()