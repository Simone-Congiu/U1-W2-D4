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
     const  area =function(l1,l2){
    let areaRett=l1*l2
    console.log("area rettangolo"+" "+areaRett)
    
    
}
 area(10,12)
 area(10,10)






/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum= function(int1,int2){
    let somma=int1+int2
    if(int1===int2){
       somma= (int1+int2)*3
    }
    console.log(somma)
      

    }
    crazySum(5,5)
    crazySum(2,2)
    crazySum(5,1)

    











/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff=function(n1,n2=19){
    let difference=n1/n2
    if(n1>19){
    difference=difference*3
    }
    else{
        console.log()
    }
    console.log(difference)
    
}

crazyDiff(10)
crazyDiff(38)






/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary= function(n){
    let interNumber=n
    if(n>20 && n<=100){
        console.log("true")}
        else if(n===400)
        console.log("true")
 else{
        console.log("your number is false")
        }
        return interNumber
        
    }
    boundary(80)
    boundary(400)
    boundary(10)










/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */






/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7=function(numberpositive){
    if(numberpositive<0){
        console.log("non accettato: numero negativo")
    }
    else if(numberpositive%7===0){
        console.log("il numero è un multiplo di 7")
    }
    else if(numberpositive%3===0){
        console.log("il numero è un multiplo di 3")
    }
    else{
        console.log("il numero non è un multiplo di 3 o 7")
    }
    return numberpositive
}

check3and7(-14)
check3and7(9)
check3and7(21)
check3and7(47)
    
    

    
    









/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString=function(str){
    let reverse=str.split("")
    reverse=reverse.reverse()
    return reverse.join("")

}

console.log(reverseString("Ciao"))




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 





/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
