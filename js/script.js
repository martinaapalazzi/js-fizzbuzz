 /*

Consegna:

- Scrivi un programma che stampi in console i numeri da 1 a 100.
- Per i multipli di 3 stampi "Fizz".
- Per i multipli di 5 stampi "Buzz".
- Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

Domande:
- Come faccio a sapere se un numero è divisibile per un altro?
- Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare.
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano".

*/ 

let number;
let numberToPrint;
const myList = document.getElementById ("my-list")

for (number = 1; number <= 100; number++) {

    let myBox = document.createElement ('div')
    myBox.classList.add ("box")
    

    if ( number % 3 == 0 && number % 5 == 0 ) {
        numberToPrint = 'FizzBuzz';
        myBox.classList.add ("fizzbuzz-box");

    } 

    else if ( number % 3 == 0 ) {
        numberToPrint = 'Fizz';
        myBox.classList.add ("fizz-box");
    }

    else if ( number % 5 == 0 ) {
        numberToPrint = 'Buzz';
        myBox.classList.add ("buzz-box");
    }
    
    else {
        numberToPrint = number;
    }

    myBox.append (numberToPrint)
    myList.append (myBox)
}





