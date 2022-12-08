const saveButton = document.getElementById("saveButton");
const cancelButton = document.getElementById("cancelButton");

const titleTag = document.getElementById("title");
const descriptionTag = document.getElementById("description");

const url = "http://localhost:8080/blogs";


let title = ""
let description = ""
titleTag.addEventListener("change", (event) => {
    title = event.target.value;
});
descriptionTag.addEventListener("change", (event) => {
    description = event.target.value;
});

cancelButton.addEventListener("click", () => {

    window.location.href = "adminBlog.html";

});

saveButton.addEventListener("click", () => {
        console.log("in save")
    console.log(title, description)

        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: description,
            }),
        })
            .then((response) => response.json())
            //send the message about success or failure of the request
            .then((data) => {
                    if (data.status === 400 || data.status === 402 || data.status === null) {
                        //make a sound for success or failure
                        alert("Message was not added!");

                    } else {

                        alert("Message was successfully added");
                        window.location.href = "adminBlog.html";
                    }
                }
            )
    }
);

saveButton.addEventListener('click', (e) => {
    $('#cont').load('./addBlog.html');
})