import { getAll  } from "./service/API_calls.js";

const products = document.querySelector('#products')

getAll("products").then(r => {
    console.log(r)
    r.forEach(item => {
        let a = document.createElement("a")
        let div = document.createElement("div")
        let productName = document.createElement("productName")

        div.className = "products";

        a.style.textDecorationLine = "none";
        a.href = "products.html";
        productName.style.backgroundColor = "rgba(255,255,255,0.8)";
        productName.style.borderRadius ="25px 25px 0 0";
        productName.innerText = item.name;
        productName.style.display = "none";

        div.style.transition = "1s";
        div.style.color = "#fc9721";
        div.style.textAlign = "CENTER";
        div.style.fontSize = "26px";
        div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.1), rgba(44, 174, 186, 0.1)), url(../../img/products/thumbnails/" + item.id + ".png"+")"

        a.addEventListener('mouseover', function handleMouseOver() {
            productName.style.display = 'block';

        });

        a.addEventListener('mouseout', function handleMouseOut() {
            productName.style.display = 'none';
        });

        a.appendChild(div)
        div.appendChild(productName)
        products.appendChild(a)
    })
})