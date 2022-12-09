const apiUrl = 'http://localhost:8080/login'

const username = document.getElementById("username");
const password = document.getElementById("password");
const signInButton = document.getElementById("sign-in-button");

function loginUser() {

   let usernameValue = username.value;
   let passwordValue = password.value;

console.log(usernameValue, passwordValue)
 fetch(apiUrl,
    {
        headers:{
            "Content-Type": "application/json"
        },
        method:'POST',
        body:JSON.stringify({
            username: usernameValue,
            password: passwordValue
        }),
    }
).then((data) => {
            console.log(data)
            if (data.status === 400  || data.status === 402 || data.status=== null) {
                //make a sound for success or failure

                alert("wrong username or password");

            }else   {


                alert("login sucessful");
                window.location.href = "../html/main-page.html";
            }

        }
    )
}


signInButton.addEventListener("click", () => {
    loginUser()
    window.location.href = "html/main-page.html";
})

