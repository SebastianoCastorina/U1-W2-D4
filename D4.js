/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2){
    let result = l1 * l2
    console.log("risultato area", result)
     return result

}

area(10,20)
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function crazySum(x,y){
    x = Math.floor(x)
    y = Math.floor(y)
    let result= 0
    
    if ( x === y) {
       result=(x+y) * 3
    }
    else{
result = (x+y)
    }
   
console.log("risultato", result)
return result
}

crazySum(5,10)
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(x,y) {
    x=Math.floor(x)
    y=Math.floor(y)
    let result = (x-y)

    if (x <= y) {
        result=(x-y)
        
    }
    else {
        result=(x-y) * 3
    }
    console.log("Differenza",result)
return result
}

crazyDiff (22,19)
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    if (n >= 20 && n <=100){
        console.log("true")
    }

    else{
        console.log("false")
    }

}

boundary (77)
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(){

}
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7 (n){

if(n > 0) { if(n % 3 === 0){console.log("Il numero è multiplo di 3")


} else if (n % 7===0 ) { console.log("Il numero è multiplo di 7")
} else {
    console.log("Il numero non è multipo di o di 7")

}
   
}
else {
    console.log("Il numero è negativo o uguale a 0")
}

}

check3and7 (7)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString (string){
    let newString = ""
    for (let i = string.length -1; i >= 0; i--
    
        ){
           newString = newString + string.charAt(i)
       
        }
        console.log("reverse string", newString)
}
reverseString ("epicode")
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//function upperFirst 
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string){
    let newString = ""
    newString = string.slice (1,string.length -1)
    console.log(newString)
}
cutString("prova")
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n){
    let randomNumber = []
    for (let i = 0; i < n; i++ ){
        randomNumber [i] = Math.floor(Math.random() *11)
    }
    console.log("numeri ad muzzum", randomNumber)
}

giveMeRandom (9)