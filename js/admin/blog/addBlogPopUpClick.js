const btn = document.getElementById("addBlogButton")

btn.addEventListener('click', (e) => {
    $('#cont').load("addBlog.html");
})