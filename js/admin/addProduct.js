

const saveButton = document.getElementById("saveButton");
const cancelButton = document.getElementById("cancelButton");
const url= "http://localhost:8080/products";
const nameTag = document.getElementById("name");
const descriptionTag = document.getElementById("description");
const priceTag = document.getElementById("price")
const quantity = 1



let name = ""
let description = ""
let price = ""
nameTag.addEventListener("change", (event) => {
    name = event.target.value;
});
descriptionTag.addEventListener("change", (event) => {
    description = event.target.value;
});
priceTag.addEventListener("change", (event) => {
    price = event.target.value;
});


cancelButton.addEventListener("click", () => {

        window.location.href = "adminProducts.html";

});


saveButton.addEventListener("click", () => {
console.log("in save")
console.log(name,description,price)

        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price: price,
                quantity: quantity
            }),
        })
            .then((response) => response.json())
            //send the message about success or failure of the request
            .then((data) => {
                    if (data.status === 400  || data.status === 402 || data.status=== null) {
                        //make a sound for success or failure

                        alert("Product was not added!");

                    }else   {


                        alert("Product was successfully added");
                        window.location.href = "adminProducts.html";
                    }

                }
            )
    }
);


const btn = document.getElementById("addProductButton")

btn.addEventListener('click', (e) => {
    $('#cont').load('./addProduct.html');
})