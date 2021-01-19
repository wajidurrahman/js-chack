var i = 1;
var factorial =1;
while(i <= 10){
    factorial = factorial * i;
    // console.log(i, factorial);
    i++;
}
console.log(factorial);

// do it 3 way

// function factorial(n) {
//     var i = 1;
//     var fact = 1;
//     while (i <= n) {
//         fact = fact * 1;
//         i++;
//     }
//     return fact;
// }

// var result = factorial(10);
// console.log(result)

// function factorial(n) {
//     var fact = 1;
//     for (var i =  1; i <= n; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// var result = factorial(10);
// console.log(result)