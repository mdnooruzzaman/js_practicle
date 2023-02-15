console.log("Everything is fine");

//Higher Order function

//forEach

var a1 = [1,2,3,4,5]
console.log(a1.lastIndexOf(a1));

const v = a1.forEach(n => n+1);
console.log(v) //its return undefined because forEach only mutate the array element and return nothing 

const c = a1.map(n => n+1);
console.log(c); // its return new array like [2,3,4,5,6]

const e = a1.filter(n => n!=3);
console.log(e)

const f = a1.reduce(n => n=2);
console.log(f)


//using normal function
const numbers = [1, 2, 3, 4, 5];

function isOdd(array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}

const oddArray = isOdd(numbers);
console.log(oddArray);


//Same using filter

console.log(numbers.filter(x => x % 2 != 0))

// console.log(Array.prototype.filter1 = () => {
//     return a1
// })
// console.log(a1.filter1())

const g1 = {
    name: "Noor",
    a3: [1,2,3,45],
    fun() {
        return this.a3 
    },
    Sum1()  {
        console.log(this.a3.map(x => x + 2))
    }

}
g1.Sum1()

const num = numbers.map(x => (
    x+x*3

))
const num1 = num.filter(d => d!= 12)
console.log(num)
console.log(num1)

//reduce
const fn = numbers.reduce((sum , curr) => 
     sum+curr
)
console.log(fn)

//example

const user = [
    {firstname : "MD" , lastname : "Nooruzzaman" , age:22},
    {firstname : "MD" , lastname : "Saifi" , age:24},
    {firstname : "Kaifee" , lastname : "Nomani" , age:52},
    {firstname : "Kamni" , lastname : "Nomani" , age:52},
    {firstname : "Ram" , lastname : "Kumar" , age:22},
    {firstname : "Mohd" , lastname : "Sajid" , age:67},
]
console.table(user)
console.table(user.filter(n => n.age !=22)) // only for filtering 

console.table(user.reduce((acc , curr) => {
    if(acc[curr.age] ){
         acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc
},{}))

const ouput = user.filter(x => x.age > 34).map(x => x.firstname) //chaining first filtering then finding or maping firstname of return output
console.log(ouput)

const out1 = user.reduce((acc , crr) => {
    if(acc[crr.age] > 34){
        acc[crr.firstname] = ++ acc[crr.firstname]
    }else{
        acc
    }
    return acc
} , 0);

console.log(out1)

setTimeout(function cd(){
    console.log("callback")
}, 5000)
console.log("done")

//Callbacks

function sdr(){
    console.log("Every thing")
}
function srt(){
    console.log()
    sdr()
    console.log("when")
}
srt(sdr);

//Promises

let promises = new Promise(function(resolve , reject){
    let s = 34;

    if(s == 34){
        resolve("ok")
    }else{
        reject("error")
    }
});
console.log(promises)

//Callback queue

function sam() {

    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      console.log('Callback 2: this is a msg from call back');
    }, 0);
  
    console.log('this is the end');
  
  };
  sam()

  //Fetch

  const data = fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json()).then(r => console.table(r))
  console.log(data) //Here i m getting Promise state is pending and result is undefined

  async function data2() {
      const dat = await fetch('https://api.postalpincode.in/pincode/575003').then(r => r.json())
        console.log(dat[0].PostOffice[1]);
  }
  data2()

  //Web Api for battery level
  navigator.getBattery().then(battery => {
      console.log(battery);
  })

  //Type Checking

  var x = 234;
  var s = new String("ssssssst")
     s = 23;
  console.log(s)

  //Using Fetch and promises to post data to the server
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
