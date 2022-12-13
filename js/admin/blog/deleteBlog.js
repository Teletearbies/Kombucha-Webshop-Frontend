const cancelButton = document.getElementById("cancel")
const confirmButton = document.getElementById("confirm")
const blogId = document.getElementById("blogId")
const url = "http://localhost:8080/blogs/" + blogId.value

console.log(blogId.value)

async function deleteBlog() {
    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(data => {
            if (data.status === 200) {
                window.location.replace("admin-blog.html")
            }
        })
        .catch(err => console.log(err))
}

function cancel() {
    window.location.replace("admin-blog.html")
}

confirmButton.addEventListener('click', deleteBlog)
cancelButton.addEventListener('click', cancel)