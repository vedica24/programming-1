var input = document.querySelector(".input");
var value_put = document.querySelector(".button");
var span = document.querySelector("span");

value_put.addEventListener("click",function(){
const palin = input.value;
var remove = /[^A-Za-z0–9]/g;
const palindrome = palin.replace(remove,'');
const another = palindrome.split().reverse().join();
if (palindrome === another )
{
    span.textContent = "Yes,it is a palindrome.";
}
});
    
    