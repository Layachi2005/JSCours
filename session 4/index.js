switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        console.log("Sunday");
        break;
    case 1:
        day = "Monday";
        console.log("Monday");
        break;
    case 2:
        day = "Tuesday";
        console.log("Tuesday");
        break;
    case 3:
        day = "Wednesday";
        console.log("Wednesday");
        break;
    case 4:
        day = "Thursday";
        console.log("Thursday");
        break;
    case 5:
        day = "Friday";
        console.log("Friday");
        break;
    case 6:
        day = "Saturday";
        console.log("Saturday");
}



let vDate = new Date().getDay();
let jour

switch (vDate) {
    case 0:
        jour = "Lundi";
        break;
    case 1:
        jour = "Mardi";
        break;
    case 2:
        jour = "Mercredi";
        break;
    case 3:
        jour = "Jeudi";
        break;
    case 4:
        jour = "Vendredi";
        break;
    case 5:
        jour = "Samedi";
        break;
    case 6:
        jour = "Dimanche";
        break;
    
}

console.log("c'est :"+jour
)

let abreviation;
let branche;
abdreviation;
switch(abreviation){
    case "DD":
        branche = "devloppement Dijital";
        break;
    case "ID":
        branche = "Infrastructure Dijital";
        break;
    case "WD":
        branche = "Web Design";
        break;
    default:
        branche = "";
    }

    console.log {"La branche : ",branche}
    






    jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi"]

    for (i=0; i<5; i++) {
        console.log(jours[i]);
    }
    
    for (item in jours) {
        console.log(jours[item]);
    }
    
    for (jr of jours) {
        console.log(jr);
    }
    
    let txt = "";
    function myFunction(value,index,array){
        txt += value + "";
    }
    console.log(txt)
    // la boucle while
    let n = 10;
    while (n >= 0){
        console.log(n)
        n = n - 1

    }

    do {
        console.log(n)
        n = n - 1
    }       
    while(n >=0)

    for (let i = 0; 1; )
