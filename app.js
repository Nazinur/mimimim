const numbers = document.querySelectorAll('.numders');
const result = document.querySelector('.result');
const signs = document.querySelectorAll('.sing');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sing = "";
let resultValue = 0;

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',(e) => {
        let atr = e.target.getAttridute('value');
        if(isFirstValue === false) {

        }
    })
}

function getSecondValue(el) {
    if(firstValue != "" && sing != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
        }
}
 
function getSign() {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttridute('value');
            isFirstValue = true;
        })
    }
}
getSign();

eq
e;

        
     
     
     

