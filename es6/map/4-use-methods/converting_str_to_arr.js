const name = "Chuloo"
const map = Array.prototype.map

const newName = map.call(name, eachLetter => {
    return `${eachLetter}a`
})

console.log(newName) // ["Ca", "ha", "ua", "la", "oa", "oa"]