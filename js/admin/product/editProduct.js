const saveButton = document.getElementById("saveButton");
const productId = document.getElementById("chosenProductId")
const url = "http://localhost:8080/products/" + productId.value;
const nameTag = document.getElementById("name");
const descriptionTag = document.getElementById("description");
const priceTag = document.getElementById("price");
let quantity = 1


getMe()

async function getMe() {
    const response = await fetch(url).then(response => response.json());
    nameTag.value = response.name
    descriptionTag.value = response.description
    priceTag.value = response.price
    quantity = response.quantity
}

async function editProduct(product) {
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}

saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (nameTag.value != "" && descriptionTag.value != "" && priceTag.value != "") {
        editProduct({
                "id": productId.value,
                "name": nameTag.value,
                "description": description.value,
                "price": price.value,
                "quantity": quantity
            }
        )
        window.location.href = "adminProducts.html";
    } else {
        alert("Fill out all the fields!")
    }

})

const cancelButtonEdit = document.getElementById("cancelButton");
cancelButtonEdit.addEventListener("click", () => {
    window.location.href = "adminProducts.html";
});