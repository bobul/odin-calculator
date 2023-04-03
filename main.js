const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const output = document.querySelector('.calculator__output')

const sign = '';
let firstOperand = '';
let operation = '';

function calculate(operation, secondOperand){
    switch (operation) {
        case 'multiply':
            output.textContent = Number.parseFloat(firstOperand) * Number.parseFloat(secondOperand)
            break;
        case 'division':
            let result = Number.parseFloat(firstOperand) / Number.parseFloat(secondOperand)
            output.textContent = result.toFixed(3)
            break;
        case 'plus':
            output.textContent = Number.parseFloat(firstOperand) + Number.parseFloat(secondOperand)
            break;
        case 'minus':
            output.textContent = Number.parseFloat(firstOperand) - Number.parseFloat(secondOperand)
            break;
        default:
            break;
    }
}

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key  = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const outputNum = output.textContent
        if (action == 'clear'){
            output.textContent = '0'
            firstOperand = ''
        }
        if (!action) {
            if (outputNum === '0') {
              output.textContent = keyContent
            }
            else {
                output.textContent = outputNum + keyContent
              }
          }
        switch (action) {
            case 'multiply':
                operation = 'multiply'
                firstOperand = output.textContent
                console.log(firstOperand)
                output.innerHTML = '&nbsp;'
                if(!action){
                    output.textContent = '' + keyContent
                }
                break;
            case 'divide':
                operation = 'division'
                firstOperand = output.textContent
                console.log(firstOperand)
                output.innerHTML = '&nbsp;'
                if(!action){
                    output.textContent = '' + keyContent
                }
                break;
            case 'add':
                operation = 'plus'
                firstOperand = output.textContent
                console.log(firstOperand)
                output.innerHTML = '&nbsp;'
                if(!action){
                    output.textContent = '' + keyContent
                }
                break;
            case 'subtract':
                operation = 'minus'
                firstOperand = output.textContent
                console.log(firstOperand)
                output.innerHTML = '&nbsp;'
                if(!action){
                    output.textContent = '' + keyContent
                }
                break;
            case 'calculate':
                let secondOperand = output.textContent
                console.log(operation)
                console.log(secondOperand)
                calculate (operation, secondOperand)
                break;
            case 'period':
                if(!output.textContent.includes('.')){
                    output.textContent = output.textContent + '.'
                }
            break;
            default:
                break;
        }
    }
})