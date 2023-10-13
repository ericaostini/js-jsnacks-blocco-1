function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};
const wrapper = document.getElementById("wrapper");
const elementi = document.getElementById("elementi");
const buttonEl = document.querySelector(".btn-primary");
const alertEl = document.querySelector(".alert");
let numberList;
buttonEl.addEventListener("click", function(){
    let listArray = [];
    let numeroEl = elementi.value;
    let found = false;
    console.log(numeroEl);
    if (!isNaN(parseInt(numeroEl))){
        for(let i = 0; i < numeroEl; i++){
            numberList = getRndInteger(0,100);
            console.log(numberList);
            listArray.push(numberList);
            if (numeroEl > 5){
                found = true;
            }
        };
        alertEl.innerHTML += `
        <div class = "container">
            ${listArray}
        </div>
        `;
        alertEl.classList.remove("d-none");
    } else {
        alertEl.innerHTML += `
        <div> Aggiungi testo </div>
        `
    }
    let lastNumber;
    if(found){
        lastNumber = "ciao"
    } else{
        lastNumber = "più corto di 5"
    }
    alertEl.innerHTML += `
    <div> Ultimi 5 numeri ${lastNumber} </div>
    `
});


// let listEl = [];
// let elements = "";
// buttonEl.addEventListener("click", function(){
//     let numeroEl = elementi.value;
//     console.log(numeroEl);
//     listEl.splice(0, 0, "elements" * numeroEl)
//     console.log(listEl);
    
// })
// let arrayEl = getRndInteger(0,100);