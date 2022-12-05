import { getAll  } from "./service/API_calls.js";

const products = document.querySelector('#products')
const productId = document.getElementById("chosenProductId")

getAll("products").then(r => {
    console.log(r)
    r.forEach(item => {
        let a = document.createElement("a")
        let div = document.createElement("div")
        let productName = document.createElement("productName")

        div.className = "products";
        a.id = item.id;
        productName.innerText = item.name;
        productName.style.display = "none";
        a.style.textDecorationLine = "none";
        div.style.transition = "2s";
        div.style.color = "#fc9721";
        div.style.textAlign = "CENTER";
        div.style.fontSize = "26px";
        div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.1), rgba(44, 174, 186, 0.1)), url(../../img/products/thumbnails/" + item.id + ".png"+")"

        a.addEventListener('click', () =>{
            productId.value = item.id;

            $('#cont').load("popUpPage.html")
        })

        a.addEventListener('mouseover', function handleMouseOver() {
            productName.style.display = 'block';
            div.style.backgroundImage = "none";
            div.style.backgroundColor = "pink";

        });

        a.addEventListener('mouseout', function handleMouseOut() {
            productName.style.display = 'none';
            div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.1), rgba(44, 174, 186, 0.1)), url(../../img/products/thumbnails/" + item.id + ".png"+")"

        });

        a.appendChild(div)
        div.appendChild(productName)
        products.appendChild(a)
    })
})

