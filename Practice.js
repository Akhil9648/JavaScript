//1,2
let a=prompt("Enter your age:")
confirm("Enter the age?")
if(a>18)
{
    alert("You can drive")
}
else if(a<0)
{
    console.error("Invalid Age")
}
else
{
    alert("You cant drive")
}
//3.
let b=prompt("Enter a number")
if(b>4)
{
    location.href="https://www.google.com/"
}
//4.
let number=prompt("Enter a number")
if(number<4)
{
    let color=prompt("Enter a color")
    document.body.style.background=color;
}
