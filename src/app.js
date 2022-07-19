let resetButton = document.querySelector('#resetBtn');
let equalButton = document.querySelector('#equalBtn');
let result = document.querySelector('#resultWin')
let button = document.querySelectorAll('.calculator__btn');



button.forEach(item => {
    item.addEventListener('click', function(e) {

        let number = e.target.innerText;
        result.value += number;

        if(number === 'C') {
            result.value = '';
        } 
    })

    
})