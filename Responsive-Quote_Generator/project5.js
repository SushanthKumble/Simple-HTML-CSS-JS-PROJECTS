//declaring the variables
const quote=document.getElementById("Quote");
const author=document.getElementById("author");
const quote_url="https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data=await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;

}
function twitt(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML)
}