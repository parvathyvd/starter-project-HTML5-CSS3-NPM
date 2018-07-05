
const button = document.getElementById('getText');
const getResult = document.querySelector('.textResult');
const getUsers =document.getElementById('getUsers');
const showUsers = document.querySelector('.showUsers');
const getAPI =document.getElementById('getAPI');
const showAPI = document.querySelector('.showAPI');


button.addEventListener('click', getText);

 function getText(){
    fetch('sample.txt')
    .then(res =>  res.text())
    .then(data => {
        getResult.innerHTML = data;
    })
    .catch((Error) => console.log(Error));

}

getUsers.addEventListener('click', getUsersText);

function getUsersText(){
    fetch('users.json')
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(user => {
           output += `<ul>
           <li>id= ${user.id}</li>
           <li>name = ${user.name}</li>
           <li>email = ${user.email}</li>
           </ul>` 
           
        });
       showUsers.innerHTML = output; 
    })
}

getAPI.addEventListener('click', GetUserAPI)

function GetUserAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(post => {
            output += `<ul>
            <li>${post.id}</li>
            <li>${post.title}</li>
            <li>${post.body}</li>
            </ul>`
        })
        showAPI.innerHTML= output;
    })

}

