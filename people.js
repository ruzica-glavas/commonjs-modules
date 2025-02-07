import getNames from "./names.js"


import getHobbies from "./hobbies.js"



const peopleFunction = ()=> {
    const fullName= getNames (`Luca`, `Rossi`)
    const hobbies = getHobbies (`nuotare`, `camminare`, `correre`)

    return {fullName, hobbies}
}

console.log(peopleFunction())