var student = { id:121, phone:177, name:"Abir"};
var student2= { id:131, phone:457, name:"Mahi"};

// tinti upay object ar var pokask kora jay

var phoneProName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phoneProName];
// update phone number
student2.phone = 547854;
student2["phone"] = 666888;

student2.cinema = "ogni22";
student2["cinama"] = "Smart girl";
console.log(phoneNo1);
console.log(student2);