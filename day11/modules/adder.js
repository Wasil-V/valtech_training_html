export function adder(num1,num2){
    return num1+num2;
}

function  multi(num1,num2){
    return num1*num2;
}

export default adder; //default export (can give any alias while importing)
export {multi as m} //named export with alias