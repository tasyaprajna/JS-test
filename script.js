// ES5
var myName = "Prajna";
myName = "Tasya";

console.log(myName);


var myCarsVar = ["BMW", "Tesla", "Honda"];

for (var i = 0; i < myCarsVar.length; i++) {
    console.log("My Cars var = " + myCarsVar[i]);
}

console.log(i);


var myCarsLet = ["BMW", "Tesla", "Honda"];

for (let x = 0; x < myCarsLet.length; x++) {
    console.log("My Cars var = " + myCarsLet[x]);
    console.log(x);
}



//ES6

let myNameLet = "Prajna";
myNameLet = "Regine";

console.log(myNameLet);