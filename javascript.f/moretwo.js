function add (firstNum, secondNum, thirdNum){
    var sum = firstNum + secondNum + thirdNum;
    return sum;
}
var result = add(5,55, 5);
// console.log(result);

function add2 (numbers){
    var sum = numbers[0]+numbers[1]+numbers[3];
}
var result = add(5,55, 5);
// console.log(result);

function add3 (numbers){
    var sum = 0;
    for(var i = 0; i < numbers.lenght; i++){
        if(numbers[i] > 0){
            sum = sum + numbers[i];
        }
    }
    return sum;
}
var result = add(100,200,100);
console.log(result);