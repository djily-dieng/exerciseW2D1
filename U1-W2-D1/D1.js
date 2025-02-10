/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I PRINCIPALI DATA TYPE SONO: NUMERI-STRINGHE-BOOLEANI-UNDEFINED E NULL ,
1_i numeri possono essere anche decimali,2_ invece le stringhe sono una serie di caratteri usate per gestire il testo.
2_i booleani ti permettonono di verificare se un'informazione è vera o falsa "true o false ".
3_undefined informa che una variabile è dichiarata ma non inizializzata cioè che non è stato assegnato alcun valore alla varibile
4_null invece indica, un valore nullo o assente, intenzionalmente svuotato, usato per indicare che una variabile non ha alcun valore 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName;
myName = "DJILY";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let dodici;
let venti;
dodici = 12;
venti = 20;
console.log(dodici + venti);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x;
x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome: dieng
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "dieng";
console.log(myName);

const mySurname = "dieng";
console.log(mySurname);
/* mySurname =
  "djily"; /*D1.js:52 Uncaught TypeError: Assignment to constant variable.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log(32 - 12);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log("name1" === "name2");
