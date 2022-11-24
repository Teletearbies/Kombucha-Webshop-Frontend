import { getAll  } from "./Service/API_calls.js";

const activitiesCont = document.querySelector('#products')

getAll("products").then(r => {
    console.log(r)
    r.forEach(item => {
        let a = document.createElement("a")
        a.href = "productDescription.html?id=" + item.id
        let div = document.createElement("div")
        div.className = "products"
        div.innerText = item.name
        div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.1), rgba(44, 174, 186, 0.9)), url(../img/products/" + item.name + ".png"+")"
        a.appendChild(div)
        activitiesCont.appendChild(a)
    })
})