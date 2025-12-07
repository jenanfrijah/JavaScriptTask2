let Operation = prompt("Please enter a specific operation ");
let Num1 = Number(prompt("Please enter the first number : "));
let Num2 = Number(prompt("Please enter the second number : "));

let result ;
switch (Operation){
    case "+" :
         result = Num1+Num2;
         break;
    case "-" :
         result = Num1-Num2;
         break;
    case "*" :
         result = Num1*Num2;
         break;
    case "/" :
         result = Num1/Num2;
         break;
    default :
         swal.fire("undefined");
         break;
}

swal.fire(Num1+Operation+Num2 + " = " + result);