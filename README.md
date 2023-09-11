Fizzbuzz
===

**Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”


**BONUS:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
Applica stili differenti agli elementi aggiunti al DOM, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


## procedimeno

1. Creo delle costanti in cui chiamare le parti di html che mi servono.
1. faccio un ciclo for per stampare, con .append, i numeri nei quadrati, ma faccio attraverso degli if, i controlli sui moduli di 5 e 3, in base alla loro divisibilità stamperò fizz, buzz o fizzbuzz. 
1. Altrimenti stampo il numero, ossia il contatore del ciclo for. 
1. per il bonus aggiungo le classi che mi servono per stilare il box di stampa con il comando .classlist.add