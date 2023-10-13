const frigorifero = [
    'banana',
     'mela',
     'pera',
     'ciliegia',
     'arancia',
     'mandarino',
     'cocomero', 
     'limone',
     'fragola'
]

//Inserisco nell'array il valore "pesca"
frigorifero.push("pesca");
console.log(frigorifero);

//verificare se nell'array di frutta c'è il "cocomero"
const alertText = document.querySelector(".alert");
let textEl;
let frutto;
for(let i = 0; i < frigorifero.length -1; i++){
    frutto = frigorifero[i];
    console.log(frutto);
    if (frutto === "cocomero"){
        textEl = "Trovato! Devo solo preparare il cocktail."
        console.log(textEl);
    } else{
        frutto += 1;
    }
}
alertText.innerHTML = textEl;