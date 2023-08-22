const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "quokkaNF" && password === "G9oClock") {
        alert("You have successfully logged in.");
        window.location.href = "https://funky-wave-252.notion.site/New-Family-EDU-fe24c857dcbc4c76b29f925aed3f0888?pvs=4";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
