import { getAll  } from "../service/API_calls.js";

const products = document.querySelector('#products')
const productId = document.getElementById("chosenProductId")

getAll("products").then(r => {
    console.log(r)
    r.forEach(item => {
        let a = document.createElement("a")
        let div = document.createElement("div")
        div.className = "products"
        a.id = item.id
        div.innerText = item.name
        a.style.textDecorationLine = "none";
        div.style.color = "#fc9721";
        div.style.textAlign = "CENTER";
        div.style.fontSize = "26px";
        div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.1), rgba(44, 174, 186, 0.1)), url(../../img/products/icon/" + item.id + ".png"+")"
        console.log(div.style.backgroundImage)

        a.addEventListener('click', () =>{
            productId.value = item.id
            console.log("clicked the event")
            $('#cont').load("adminProductPopUpPage.html")
        })

        a.appendChild(div)
        products.appendChild(a)
    })
})