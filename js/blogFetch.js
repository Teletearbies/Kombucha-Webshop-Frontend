import { getAll  } from "./service/API_calls.js"

const blog = document.querySelector('#blogCard')

getAll("blogs").then(product => {
    console.log(product)
    product.forEach(item => {
        let div = document.createElement("div")
        let blogDate = document.createElement("p")
        let blogTitle = document.createElement("h2")
        let blogDescription = document.createElement("p")
        let author = document.createElement("p")

        div.className = "card_body"
        blogDate.className = "card_date"
        blogDescription.className = "card_body"
        blogTitle.className = "card_title"
        author.className = "card_author"

        blogDate.innerText = item.date
        blogTitle.innerText = item.title
        blogDescription.innerText = item.description
        author.innerText = "by Kalle's Kombucha"


        div.appendChild(blogDate)
        div.appendChild(blogTitle)
        div.appendChild(blogDescription)
        div.appendChild(author)
        blog.appendChild(div)
    })
})