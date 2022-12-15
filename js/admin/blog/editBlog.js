const saveButton = document.getElementById("saveButton");
const titleTag = document.getElementById("title");
const descriptionTag = document.getElementById("description");
const blogId = document.getElementById("blogId")
const url = "http://localhost:8080/blogs/" + blogId.value
let date = ""
let time = ""

getMe()

async function getMe() {
    const response = await fetch(url).then(response => response.json());
    titleTag.value = response.title
    descriptionTag.value = response.description
    date = response.date
    time = response.time
}

async function editBlog(blog) {

    console.log("url")
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 400 || data.status === 402 || data.status === null) {
                //make a sound for success or failure

                alert("Blog was not edited!")

            } else {
                alert("Blog was successfully edited!")
            }
        })
        .catch(err => console.log(err))

}

saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (titleTag.value != "" && descriptionTag.value != "") {
        editBlog({
                "id": blogId.value,
                "title": titleTag.value,
                "description": description.value,
                "date": date,
                "time": time,
            }
        )
        window.location.href = "admin-blog.html"
    } else {
        alert("Fill out all the fields!")
    }

})

const cancelButtonEdit = document.getElementById("cancelButton");
cancelButtonEdit.addEventListener("click", () => {
    window.location.href = "admin-blog.html"
})