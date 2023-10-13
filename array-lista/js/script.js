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
let alertText = document.querySelector(".alert");
let cocomero = false;
for(let i = 0; i < frigorifero.length -1; i++){
    let frutto = frigorifero[i];
    console.log(frutto);
    if (frutto === "cocomero"){
        cocomero = true;
        console.log(cocomero);
    };
};
let textEl;
if(cocomero){
    textEl = "Trovato! Devo solo preparare il cocktail."
} else{
    textEl = "Oh no, devo uscire a comprare il cocomero!"
}
alertText.innerHTML = textEl;