// const stagiaire = {
//     "id": 1,
//     "nom": "ahmed",
//     "age": 18
// }

// stagiaireJSON = JSON.stringify(stagiaire);

// console.log(stagiaire);

// console.log(stagiaireJSON);

// stagiaireJSON = JSON.parse(stagiaireJSON);

// console.log(stagiaireJSON);

// console.log(stagiaireJSON.nom);



document.getElementById("btn-loader").addEventListener("click", (e) => {
    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open("get", "text.txt", true);
    request.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("container").innerHTML = this.responseText;
        }
    };
    request.send();
});