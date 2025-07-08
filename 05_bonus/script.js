/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greet(name) {
  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour < 13) {
    greeting = 'Buongiorno'
  } else if (currentHour < 17) {
    greeting = 'Buon pomeriggio';
  } else {
    greeting = 'Buonasera';
  }

  return `${greeting} ${name}.`
}
// Invoca la funzione qui e stampa il risultato in console

console.log(greet(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.