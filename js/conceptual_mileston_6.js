
let arr = [10,25,60];
let arr2= [...arr];
arr.push(7);
arr2.push(20);

// let arr2= [...arr];
console.log(arr);

console.log(arr2);


let shop={

    name:'atik',
    age:35,
    address : 'rajshahi',

    info: function(){
        console.log('your name please');
    },

    arr : ['name','atik','rony','sony'],

    studentInfo:{
        id: 36,
        isBSC : true,
    }


}

let shopObj= shop;

let shopJSON = JSON.stringify(shopObj);

console.log(shopJSON)
