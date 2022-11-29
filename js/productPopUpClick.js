const descriptionEditButton = document.getElementById("popup")

descriptionEditButton.addEventListener('click', () =>{
    console.log("hello")
    $('#cont').load("productPopUp.html")
})