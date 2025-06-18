let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://official-joke-api.appspot.com/jokes/programming/random";
// const url = "GET /quotes/random";
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      author.innerText = item[0].punchline;
      quote.innerText = item[0].setup;
      console.log(item);
    });
};
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
