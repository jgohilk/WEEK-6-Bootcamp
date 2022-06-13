const firstValue = parseFloat(prompt())
const operation = prompt()
const secondValue = parseFloat(prompt())
let ans      
switch(operation){
case '+':
function addition(firstValue,secondValue){return firstValue + secondValue;}
ans = addition(firstValue,secondValue)
break;
case '-':
function subtraction(firstValue,secondValue){return firstValue - secondValue;}
ans = subtraction(firstValue,secondValue)
break;
case '/':
function division(firstValue,secondValue){return firstValue / secondValue;}
ans = division(firstValue,secondValue)
break;
case '*':
function multiplication(firstValue,secondValue){return firstValue * secondValue;}
ans = multiplication(firstValue,secondValue)
break;
case '^':
function power(firstValue,secondValue){return firstValue ** secondValue;}
ans = power(firstValue,secondValue)
break;
}

console.log(firstValue, operation, secondValue + '=' + ans)