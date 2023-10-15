function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};
const wrapper = document.getElementById("wrapper");
const elementi = document.getElementById("elementi");
const buttonEl = document.querySelector(".btn-primary");
const alertEl = document.querySelector(".alert");
const elArray = document.getElementById("array");
const buttonArray = document.querySelector(".btn-danger")
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
    let lastIndex = listArray.at(-1);
    let SLast = listArray.at(-2);
    let TLast = listArray.at(-3);
    let FoLast = listArray.at(-4);
    let FiLast = listArray.at(-5);
    if(found){
        lastNumber = `
        <div> ${lastIndex} ${SLast} ${TLast} ${FoLast} ${FiLast} </div>
        `
    } else{
        lastNumber = "più corto di 5"
    }
    alertEl.innerHTML += `
    <div> Ultimi 5 numeri ${lastNumber} </div>
    `
});

let firstIndex = 0;
let visualE;
buttonArray.addEventListener("click", function(){
    let arrayNum = elArray.value;
    console.log(arrayNum);
    if (!isNaN(parseInt(elArray))){
        for (let x = 0; x < elArray; x++){
            firstIndex += -1;
            console.log(listArray[-1]);
            const visualE = listArray[listArray.lenght -1];
            console.log(visualE);
        }
    }
})

// let listEl = [];
// let elements = "";
// buttonEl.addEventListener("click", function(){
//     let numeroEl = elementi.value;
//     console.log(numeroEl);
//     listEl.splice(0, 0, "elements" * numeroEl)
//     console.log(listEl);
    
// })
// let arrayEl = getRndInteger(0,100);