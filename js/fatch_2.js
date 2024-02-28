
function getApiFetch(){
    let url ='https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then(res=> res.json())
    .then(data => getData(data))
}


function getData(data){

    let userList = document.getElementById('user_list');

    for( let user of data){
        console.log(user)

        let div = document.createElement('div');
        div.innerHTML=`
        
        <h3>userId :${user.userId} </h3>
        <h4>Title :${user.title} </h4>
         <h4>body :${user.body}</h4>
        
        
        `;

        userList.appendChild(div)
    }
}


function DeleteFetchApi(){

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}


function PatchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}


function createAPost(){

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
}


function AwaitFun(){

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.jso())
    .then(data => console.log(data))
    .catch(error => console.error(error))

}

const AwaitFun2 = async()=>{

    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/comments');
   
    let data = await res.json();

    console.log(data);
    }

    catch(error){

        console.error(error);
    }
}