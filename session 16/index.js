// const stagiaires = getData().then(function);

// const stagiaires = getData().then((Response) => {
//     console.log(Response);
// }).catch((error) => {
//     console.log(error);
// });

// console.log(stagiaires);

// function getData() {
//     let found = false;
//     return new Promise((resolve, reject) => {
//         if(found) {
//             resolve([{id:1,nom:"layachi"},{id:2,nom:"lokhmi"},{id:3,nom:" hilmi""}]);// there is no error
//         }else {
//             reject("Data was not found");// there is an error
//         };
//     })
// };


const stagiaires = getNotes().then((response) => {
    console.log(response);
    return response.filter((item) => {
        return item.note === 15;
    })
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Finally!");
});

function getNotes() {
    return new Promise((resolve,reject) => {
        resolve([{id:1, module:"JAVASCRIPT", note:15},
                 {id:1, module:"HTML", note:16},
                 {id:2, module:"POO", note:19},
                 {id:2, module:"CSS", note:7},
                 {id:3, module:"PYTHON", note:15},
                 {id:3, module:"JAVASCRIPT", note:7},
                 {id:4, module:"POO", note:11},
                 {id:4, module:"PYTHON", note:14},
                ]);
    })
};


document.getElementById("afficher-api-data").addEventListener("click", () => {
    let dogA = fetch("url").then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
    });
    console.log(dogA);
})

async function getNotes() {
    try {
        let vNote = 4;
        const stagiaires = await getStagiaireData();
        console.log(stagiaires);
        if (vNote < 5) {
            throw new Error("La note est inf a 5");
        }
    }catch(err) {
        console.log("Bien Ajouter!");
    }finally {
        console.log("code compeleted!");
    }
}
    