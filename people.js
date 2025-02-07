import getNames from "./names.js"


import getHobbies from "./hobbies.js"



const peopleFunction = ()=> {
    return {
    fullName: getNames (`Luca`, `Rossi`),
    hobbies : getHobbies (`nuotare`, `camminare`, `correre`)}
}

console.log(peopleFunction())