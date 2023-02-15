const a = {name : "md noor" , age : 23};
const b = {name : "md noor" , age : 23};
const c = {name : "md noor" , age : 23};
const d = {name : "md noor" , age : 23};

console.table({a , b ,c})

const abc = 12
console.log(`${abc} quantity`)

const fv = (age) => {
    const ageStr = age > 24 ? 'old' : 'young'
    return `${ageStr} people`
}
console.log(fv(23))

let arr = ['a1' ,'b2' ,'c3'];
let pokemon = [1,2,3];

pokemon = [...pokemon , ...arr]
console.table(pokemon)

const random = () => {
    return Promise.resolve(Math.random(0 ,100))
}
console.log(Math.random(100)*100);

console.log(no)
var no = 234

//Hoisting

//function declare using function keyword
print()
function print(){
    console.log("hey")
}
print();


//Function declare using function expression
var f1 = function(a , b) {
    return a+b;
}
console.log(f1(2 ,5))

// //IIFE
//  (function(e , s )
//  {
//      console.log(e+s)
//  }
//  )(10 , 12);
var hum = (fr , q)=> {
    return `${q} amount of ${fr}`
}
console.log(hum('apple' , 4))
console.log(hum.call('apple' , 4))
// console.log(hum.apply('apple' , 4))

//

let animal = {
    name:'dog',
    eat(a,b){
        console.log(this.name + "is eating" + " " + a + " " +b)
    }
};
let human = {
    name:'Ravi'
};
animal.eat(5,'bones');
animal.eat.call(human , 10 , 'chips');
// animal.eat.apply(human , 12 , 'mangoes')

//This keyword
const obj = {
    name:'noor',
    arr : [1,2,3,4],
    sing () {
        console.log(this.name + "singing" + this.arr.map(x => x +1))
    }
}
obj.sing()

const x = (i)=>{
    function afg(i){
        console.log("afg"+ i)
    }
    afg(7)
}
x(2)

//Arrow function 
const canVote = (age) => {return age>18 }

console.log(canVote(92))


function age_req(r_age){
    return function(age){
        return age>=r_age;
    };
};
let can_Vote = age_req(18)
console.log(can_Vote(2))

//OOPS

class Box {
    constructor(length , no){
        this.length=length;
        this.no = no
    }
    display(){
        console.log(this.length)
    }
    doiing(){
        console.log(this)
    }
}
let ob1 = new Box(20 ,34)
let ob3 = ob1;
ob3.display()
ob1.display()
ob1.doiing()

//ProtoType
let father = {
    name:'john'
};
let son = Object.create(father)
console.log(father.isPrototypeOf(son));

//Prototupal inheritance
var parent = { 
    name: "Father",
    sing(){
        console.log("Singing");
    },
    eat : function(){
        console.log('Eating')
    },
    drinking : () => {
        console.log('Drinking')
    }
}

var child = {
    name: "Son",
    eat(){
        console.log('eating');
    }
}

child.__proto__ = parent;

for(let p in child){
    console.log(p + " " + child.hasOwnProperty(p));
}
console.log(child.drinking())

//Classical Inheritance

class Fruits {
    constructor(color){
        this.color = color
        console.log("fruits constructor")
    }
    display() {
        console.log('List of fruits item')
    }
    print(){
        console.log(this)
    }
    prin(){
        console.log("Prin")
    }
}

class Apple extends Fruits {
    constructor(color , type){
        super(color);
        this.type = type
        console.log('Apple Constructor')
    }
    print(){
        super.print(this)
    }
}
let ob2 = new Apple( 'red' ,'Orange');
console.log(ob2.print())

//Method overloading

//Function work in js & Variable Environment

var s = 2;
o();
q();
console.log(s);

function o() {
    var s = 10;
    console.log(s)
}
function q() {
    var s = 100;
    console.log(s)
}

//Exception handling

try{
    console.log(a23)
}catch(err){
    console.log(err)
}

function d1(ag){
    if (ag<16){
        try{
            throw new Error("you r under age")
        }catch(err){
            console.log(err)
        }
        finally{
            console.log("Finally u have asked")
        }
    }
    else{
        console.log("U r allowed")
    }
}
d1(14)

//DOM

console.log(document)
console.dir(document.getElementById)
console.log(document.body)
// window.alert("HI")
// open("https://google.com")

// var age13 = prompt("Enter the your age");

// if(age13 > 16){
//     alert("No more teenage")
// }

function djh(){

}
var head = document.getElementsByClassName('heading')
head.innerHTML = "XCVB"


//Clouser
function t(){
    var j = 3;
    function g(){
        console.log(j)
    }
    g()
}
t()

//Scope chain and Lexical environment

function z(){
    var f =10;
    function w(){
        console.log(f)
        function h(){
            console.log(f)
        }
        h()
    }
    w()
}
z()

//Currying

function as(rg){
    return function ab(bg){
        return function af(fg){
            return (bg + fg + rg)
        };
    }
}
console.log(as(3)(3)(4))

//Curring example

const  Sum1 = (a3 , a5) => a3 + a5; //Normal Js function
const Sum2 = a7 => a8 => a7 + a8; // Currying Function

//Callback function

function myDisplayer (some) {
    console.log("callback")
    return 2
}
function first (dfg){
    myDisplayer(dfg)
}

function second (fgh) {
   console.log(fgh+2)
    myDisplayer(fgh)
}
console.log(first('first'))

second(myDisplayer);

//Temporal zone

// console.log(aw);
// const aw = 10;
var bw = 1000;

//Practicing the highorder function

