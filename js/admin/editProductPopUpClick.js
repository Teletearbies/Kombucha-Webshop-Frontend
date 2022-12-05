const btn = document.getElementById("editProductBtn")

btn.addEventListener('click', (e) => {
    console.log("open edit")
    $('#cont').load('./editProduct.html');
})