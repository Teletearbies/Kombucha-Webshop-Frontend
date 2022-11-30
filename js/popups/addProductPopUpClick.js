const btn = document.getElementById("addProductButton")

btn.addEventListener('click', (e) => {
    $('#cont').load('./addProduct.html');
})