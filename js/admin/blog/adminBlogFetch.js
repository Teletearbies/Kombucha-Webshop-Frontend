import {getAll} from "../../service/API_calls.js"

const grid = document.querySelector('#grid')
const blogId = document.getElementById("blogId")

getAll("blogs").then(product => {
    console.log(product)
    product.reverse().forEach(item => {
        let div = document.createElement("div")
        let blogDate = document.createElement("p")
        let blogTitle = document.createElement("h2")
        let blogDescription = document.createElement("p")
        let author = document.createElement("p")
        let showMore = document.createElement("a")
        let editButton = document.createElement("button")
        editButton.innerText = "Edit"

        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        let twoButtons = document.createElement("div")

        editButton.className = "editButton"
        editButton.id = item.id
        deleteButton.className = "deleteButton"
        deleteButton.id = item.id
        twoButtons.className = "twoButtons"

        div.className = "card_body"
        blogDate.className = "card_date"
        blogTitle.className = "card_title"
        blogDescription.className = "card_description"
        author.className = "card_author"
        showMore.className = "showMoreButton"
        showMore.innerText = "show more"

        blogDate.innerText = item.date + " " + item.time
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

        editButton.addEventListener('click', () =>{
            blogId.value = item.id;
            $('#cont').load("editBlog.html")
        })

        deleteButton.addEventListener('click', () =>{
            blogId.value = item.id;
            $('#cont').load("deleteBlog.html")
        })

        twoButtons.appendChild(editButton)
        twoButtons.appendChild(deleteButton)

        div.appendChild(blogDate)
        div.appendChild(blogTitle)
        div.appendChild(blogDescription)
        div.appendChild(showMore)
        div.appendChild(author)

        grid.appendChild(div)
        grid.appendChild(twoButtons)
    })
})


