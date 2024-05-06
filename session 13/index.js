let stagiaires =[]
let ajouterDansUnList = (e) => { 
    e.preventDefault();
    let person;
    let cnie;
    let nom;
    let prenom;
    cnie = document.querySelector(".cnie").value;
    nom = document.querySelector(".nom").value;
    prenom = document.querySelector(".prenom").value;
    person = {cnie,nom,prenom};
    console.log(person);
    stagiaires.push(person);
    console.log(stagiaires);
};

document.querySelector(".submit").addEventListener("click", ajouterDansUnList);

let searchPerson = (e) => {
    e.preventDefault();
    let item = document.querySelector(".search-bar").value;
    let searchedItem = stagiaires.find((item) => {
        return item === stagiaires.cnie;
    });
    console.log(searchedItem);
};

document.querySelector(".search-btn").addEventListener("click", searchPerson);