/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelsofword(str) {
  let vowels = [];
  const vowelList = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowelList.includes(char)) {
      vowels.push(char);
    }
  }
  return vowels;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsofword(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)