const btn = document.getElementById("editProductBtn")

btn.addEventListener('click', (e) => {
    $('#cont').load('./edit-product.html')
})