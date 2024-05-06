document.getElementById("name").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        console.log("Enter key was pressed downnn!");
    }
})

document.getElementById("name").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        console.log("Enter key was pressedddd!");
    }
})

document.getElementById("name").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        console.log("Enter key was pressed uppp!");
    }
})

document.getElementById("name").addEventListener("keyup", function(event) {
    console.log(event.key);
    console.log(event.code);
})

