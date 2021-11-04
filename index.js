let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Meow) {
    cats.push("Ralph")
}
function destructivelyPrependCat(Meow) {
    cats.unshift("Bob")
}
function destructivelyRemoveFirstCat(Meow) {
    cats.shift()
}
function destructivelyRemoveLastCat(Meow) {
    cats.pop()
}
