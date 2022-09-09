const numberBtns = document.querySelectorAll('[data-number]')
const operationsBtns = document.querySelectorAll('[data-operations]')
const equalsBtn = document.querySelector('[data-equals]')
const deleteBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')
const previousOperation = document.querySelector('[data-previous-operation]')
const currentOperation = document.querySelector('[data-current-operation]')

class Calculator {
    constructor(previousOperation, currentOperation){
        this.previousOperation = previousOperation
        this.currentOperation = currentOperation
        this.clear();
    }
}