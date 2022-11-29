import { getById  } from "./service/API_calls.js";

const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");


//Get id from URL sent by products.html
const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const apiUrl = "http://localhost:8080/products/" + id


async function getIt(){
    const response = await fetch(apiUrl);
    const product = await response.json();
    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = product.price;
    productQuantity.textContent = product.quantity;
}

getById(id,"products")

getIt();

const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

document.documentElement.style.setProperty('--main-bg-color', randomColor);