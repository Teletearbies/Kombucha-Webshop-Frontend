import {getAll} from "./service/API_calls.js"

const blog = document.querySelector('#grid')

getAll("blogs").then(product => {
    console.log(product)
    product.reverse().forEach(item => {
        let div = document.createElement("div")
        let blogDate = document.createElement("p")
        let blogTitle = document.createElement("h2")
        let blogDescription = document.createElement("p")
        let author = document.createElement("p")
        let showMore = document.createElement("a")
        div.className = "card_body"
        blogDate.className = "card_date"
        blogTitle.className = "card_title"
        blogDescription.className = "card_description"
        author.className = "card_author"
        showMore.className = "showMoreButton"
        showMore.innerText = "show more"

        blogDate.innerText = item.date + "-" + item.time
        blogTitle.innerText = item.title
        blogDescription.innerText = item.description
        author.innerText = "by Kalle's Kombucha"

        showMore.addEventListener('click', () => {
            if (showMore.innerHTML === "show more") {
                showMore.innerText = "show less"
                div.className = "card_body_open"
                blogDescription.className = "card_description_open"
            } else {
                showMore.innerText = "show more"
                div.className = "card_body"
                blogDescription.className = "card_description"
            }
        })

        div.appendChild(blogDate)
        div.appendChild(blogTitle)
        div.appendChild(blogDescription)
        div.appendChild(showMore)
        div.appendChild(author)
        blog.appendChild(div)
    })
})

