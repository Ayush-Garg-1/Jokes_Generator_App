const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let Myjokes=document.getElementById('joke');
const getJoke = async ()=>{
    let res = await  fetch(url);
    let data = await res.json();
    console.log(data);
    Myjokes.innerHTML=`${data.joke}`;
}
getJoke();