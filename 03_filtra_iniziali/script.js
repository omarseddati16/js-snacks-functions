/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filter(stringarrey, letter) {
  const res = []
  let startsWithA = filter(names, "A");
  for (let i = 0; i < stringarrey.length; i++) {
    if (stringarrey[i].startsWith(letter)) res.push(stringarrey[i])
  }
  return res

}





// Invoca la funzione qui e stampa il risultato in console

console.log(filter)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]