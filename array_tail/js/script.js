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
    console.log(numeroEl);
    let condition = false;
    for(let i = 0; i < numeroEl; i++){
        elemento = numeroEl[i];
        if (elemento > 5){
        condition = true;
        console.log(condition);
        };
        console.log(elemento);
        numberList = getRndInteger(0,100);
        console.log(numberList);
        listArray.push(numberList);
        console.log(listArray);
    };
    let lastNumber;
    if(condition){
        lastNumber = listArray.at(-2);
    } else{
        lastNumber = "Più corto di 5"
    }
    alertEl.innerHTML += `
    <div class = "container">
        ${lastNumber}
    </div>
    `;
    alertEl.classList.remove("d-none");
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