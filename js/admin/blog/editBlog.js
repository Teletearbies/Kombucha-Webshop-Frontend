const saveButton = document.getElementById("saveButton");
const titleTag = document.getElementById("title");
const descriptionTag = document.getElementById("description");
const blogId = document.getElementById("blogId")
const url = "http://localhost:8080/blogs/" + blogId.value


getMe()

async function getMe() {
    const response = await fetch(url).then(response => response.json());
    titleTag.value = response.title
    descriptionTag.value = response.description

}

async function editBlog(blog) {
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}

saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (titleTag.value != "" && descriptionTag.value != "") {
        editBlog({
                "id": 1,
                "title": titleTag.value,
                "description": description.value,
            }
        )
        window.location.href = "adminBlog.html";
    } else {
        alert("Fill out all the fields!")
    }

})

const cancelButtonEdit = document.getElementById("cancelButton");
cancelButtonEdit.addEventListener("click", () => {
    window.location.href = "adminBlog.html";
});