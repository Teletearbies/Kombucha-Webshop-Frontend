const btn = document.getElementById("deleteProductBtn")

btn.addEventListener('click', () =>{
    $('#cont').load("./delete-product-popup.html")
})