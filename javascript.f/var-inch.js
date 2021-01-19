function inchTofeet(inch){
 var feet = inch / 12;
 return feet;
}

// var sinior = [156, 288, 300];
// var nanaFeet = inchToFeet(sinior[0]);

var nanaFeet = inchTofeet(156);
console.log(nanaFeet);
var naniFeet = inchTofeet(288);
console.log(naniFeet);
var dadiFeet = inchTofeet(300);
console.log(dadiFeet);
