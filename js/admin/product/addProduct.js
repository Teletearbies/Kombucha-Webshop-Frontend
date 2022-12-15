const addProductButton = document.getElementById("addProductButton")
const saveButton = document.getElementById("saveButton")
const cancelButton = document.getElementById("cancelButton")
const url = "http://localhost:8080/products"
const nameTag = document.getElementById("name")
const descriptionTag = document.getElementById("description")
const priceTag = document.getElementById("price")


let name = ""
let description = ""
let price = ""
nameTag.addEventListener("change", (event) => {
    name = event.target.value
})
descriptionTag.addEventListener("change", (event) => {
    description = event.target.value
})
priceTag.addEventListener("change", (event) => {
    price = event.target.value
})


cancelButton.addEventListener("click", () => {

    window.location.href = "admin-products.html";

})


saveButton.addEventListener("click", () => {

        if (nameTag.value != "" && descriptionTag.value != "" && priceTag.value != "") {


            fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    price: price
                }),
            })
                .then((response) => response.json())
                //send the message about success or failure of the request
                .then((data) => {
                        if (data.status === 400 || data.status === 402 || data.status === null) {

                            alert("Product was not added!")
                        } else {

                            alert("Product was successfully added")
                            window.location.href = "admin-products.html"
                        }
                    }
                )
        } else {
            alert("Fill out all the fields!")
        }
    }
)

addProductButton.addEventListener('click', (e) => {
    $('#cont').load('./add-product.html')
})