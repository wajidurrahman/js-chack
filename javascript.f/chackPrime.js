// var n = 18;
// for(i = 2; i < n-1; i++){
//     // console.log(i, n % i);
//     if(n % i == 0){
//        console.log('Not a prime number');
//        break;
//     }
// }
// console.log('you number is a prime number')

// funtion kora 

function isPrime(n){
    for(i = 2; i < n-1; i++){
        // console.log(i, n % i);
        if(n % i == 0){
           return 'Not a prime number';
        }
    }
    return 'you number is a prime number';
}
var result = isPrime(4);
console.log(result);