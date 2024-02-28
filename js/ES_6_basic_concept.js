let a = {job: 'web developer'};
let b = a;
b.job = 'Full stack Developer';

// b={job : "font End developer"};


console.log(a,b)



//falsely and truly value
//falsely value false 0 "" null undefine

//truly value true 1 'atik' {job:'web developer'} [] {} 

let value ={};

console.log(!!value)




let x = ' ';

if(!x){
    console.log('turely ');
}

// undefine and null

// let obj= {name:'atik', age: 27, address:"rajshahi"};

// console.log(obj.age, obj.salary);


for (var i=0; i<5; i++){

    console.log(i);
}

console.log(i)

let student = function (){
    return'students';
}

console.log(student());


console.log(add(5,10))
function add (a,b){
    return a+b;
}


//closeuer function 

// function rost(){
//     let x =1;
//     return function(){
//         x++;
//         return x;
//     }
// }

// let res = rost();
// console.log(res())
// console.log(res())
// console.log(res())



let closer =() =>{
    let count =0;

    return  sum =()=>{

        count = count +1;
        return count;
    }
}


let res = closer();


// console.log(res());
// console.log(res());
// console.log(res());



//callback function 


function info(getFunction){
    // return getFunction();
    console.log(getFunction())
}



function func(){
    console.log('ki re beta vlo toh !!!!');
}

  info(func);
//  console.log(result)


// function callBack(getFunction,name){

// getFunction(name);
// }


// let getFunction = (name)=>{
//     console.log(name);
// }

// callBack(getFunction,'atik');


//callBack function
function callBack(getFunction,name){

    getFunction(name);
}


function getFunction(name){
    console.log(name);
}

callBack(getFunction,'hello atiqur rahman');
callBack(getFunction,[10,50,20]);




//passby value
function add (a,b,c){
    let x = [...arguments];
    console.log(x)
    return a+ b+c;
}

console.log(add(5,7,8));











