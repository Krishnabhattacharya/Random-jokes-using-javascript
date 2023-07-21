const ptag=document.getElementById("ptag");
const btn=document.getElementById("btn");
const api="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke=()=>{
    fetch(api).then((response)=>{
        return response.json();
    }).then((response)=>{
ptag.textContent=`${response.joke}`;
    })
}
btn.addEventListener("click",getjoke);
