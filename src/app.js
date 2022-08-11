let clearButton = document.querySelector('#clearBtn');
let equalButton = document.querySelector('#equalBtn');
let resultScreen = document.querySelector('#resultWin')
let buttonNumbers = document.querySelectorAll('.calculator__btn');
let operator = document.querySelectorAll('.calculator__btn-operator');

let firstInteger = false;
let secondInteger = false;
let operation = '';

buttonNumbers.forEach(number => {
    number.addEventListener('click', function(e) {
         
        let buttonNum = e.target.innerText;
        resultScreen.value = buttonNum;
        
        if (firstInteger === false && secondInteger === false) {
            firstInteger = resultScreen.value
            return
        }

        if (operation === '' && firstInteger != false) {
            firstInteger += buttonNum
            resultScreen.value = firstInteger
        }

        if (firstInteger !== false && secondInteger === false && operation != '') {
            secondInteger = buttonNum
            return
        }

        if (firstInteger != false && secondInteger != false && equalButton.clicked != 'true') {
            secondInteger += buttonNum
            resultScreen.value = secondInteger
        }
        
    })
})

equalButton.addEventListener('click', () => {
    if  (firstInteger !== false && secondInteger !== false) {

        if (operation === '+') {
            resultScreen.value = +firstInteger + +secondInteger
        } else if (operation === '-') {
            resultScreen.value = firstInteger - secondInteger
        } else if (operation === 'x') {
            resultScreen.value = firstInteger * secondInteger
        } else if (operation === '/') {
            resultScreen.value = firstInteger / secondInteger
        }
    }

    firstInteger = resultScreen.value;
    secondInteger = false;
    operation = '';
})

operator.forEach(action => {
    action.addEventListener('click', function(e) {
        let sign = e.target.innerText;
        operation = sign;
    })
})

clearButton.addEventListener('click', () => {
    firstInteger = false;
    secondInteger = false;
    operation = '';
    resultScreen.value = '';
})