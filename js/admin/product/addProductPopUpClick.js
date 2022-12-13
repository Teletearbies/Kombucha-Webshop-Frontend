const btn = document.getElementById("addProductButton")

btn.addEventListener('click', (e) => {
    $('#cont').load('./add-product.html')
})