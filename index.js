
const hello = document.querySelector('.hello');
console.log(hello);
const url = fetch('https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=ac6ac1749e26ae7659d9589b40e59de4&q=shredded%20chicken');

url.then(function getRecipe(response){
console.log(response);
});

