// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const Id = Symbol("123");
const anotherId = Symbol("123");

console.log(Id === anotherId);

let BigNumber = 6118115153151151n;

const heroes = ["Shaktiman", "IronMan", "Eshuv"];

let myObj = {
    myname : "abhay",
    age : 22
}

const myfunction = function()
{
    console.log("Hello Eshuv!");
    
}

myfunction();

// Stack{primitive data types},   Heap{Non Promitive dtata types}

const myObjClone = myObj;

myObjClone.myname = "Eshuv";

console.log(myObj.myname);