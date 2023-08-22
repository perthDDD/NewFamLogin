const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "perthTGW500" && password === "uniteAs1Acheive") {
        alert("You have successfully logged in.");
        window.location.href = "https://funky-wave-252.notion.site/TGW-EDU-8f4b6fadf4264c76a5283d00aafe0a23?pvs=4";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
