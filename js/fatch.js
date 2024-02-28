// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// let url = ('https://jsonplaceholder.typicode.com/todos/1');

// fetch(url)
// .then(response => response.json())  
// .then(json => console.log(json))


function getFatch(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)
    .then(res => res.json())
    .then(data =>console.log(data))
}





function mulFetch(){

    let url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
    .then(res =>res.json())
    .then(data => fetchFuc(data))
}

function fetchFuc(data){

    
    for(let user of data){
        let ul = document.getElementById('user_list');
        let userName = user.name;
        let li = document.createElement('li');
        li.style.color='red';
        li.style.fontSize= '2rem';
        li.style.listStyleType='circle';

        let x = li.innerHTML= user.name;
        ul.appendChild(li)
    }
}


function getApiFetch(){

    let apiURL ='https://jsonplaceholder.typicode.com/albums';
    fetch(apiURL)
    .then(res => res.json())
    .then(data => fetchApi(data))
}








function FetchGet (){

    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res =>res.json())
    .then(data => GetFetch(data))
}

function GetFetch(data){

    console.log(data)
}