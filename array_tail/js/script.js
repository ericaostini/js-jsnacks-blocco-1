function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

const elementi = document.getElementById("elementi");
const buttonEl = document.querySelector("button");


// let listEl = [];
// let elements = "";
// buttonEl.addEventListener("click", function(){
//     let numeroEl = elementi.value;
//     console.log(numeroEl);
//     listEl.splice(0, 0, "elements" * numeroEl)
//     console.log(listEl);
    
// })
// let arrayEl = getRndInteger(0,100);