document.getElementById("submit").addEventListener("click", (e,event) => {
    e.preventDefault();
    let user = document.getElementById("username");
    if (user.value.length >= 3 && user.value.length <= 25) {
        user.style.borderWidth = "4px";
        user.style.borderColor = "rgb(0, 195, 0)";
        user.style.borderStyle = "solid";
        document.getElementById("error").style.display = "none";
    } else {
        user.style.borderWidth = "4px";
        user.style.borderColor = "rgb(230, 0, 0)";
        user.style.borderStyle = "solid";
        document.getElementById("error").style.display = "block";
    }
})