const cancelButton = document.getElementById("cancel")
const confirmButton = document.getElementById("confirm")
const productId = document.getElementById("chosenProductId")

const url = "http://localhost:8080/products/" + productId.value


async function deleteProduct()
{
    await fetch(url,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
        .then(data => {
            if (data.status === 200) {
                alert("Product was successfully deleted!")
                window.location.replace("admin-products.html")
            } else {
                alert("Product was not deleted!")
            }
        })
        .catch(err => console.log(err))

}

function cancel()
{
    window.location.replace("admin-products.html")
}

confirmButton.addEventListener('click', deleteProduct)
cancelButton.addEventListener('click', cancel)

