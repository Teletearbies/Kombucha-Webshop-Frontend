const delButton = document.getElementById("deleteKombuchaBtn")
const productId = document.getElementById("chosenProductId")




const url = "http://localhost:8080/products/" + productId.value

console.log(productId.value)

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
                window.location.replace("adminProducts.html")
            }
        })
        .catch(err => console.log(err))

}

delButton.addEventListener('click', deleteProduct)
