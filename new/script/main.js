
/* document.querySelector("html").addEventListener("click", function() {
    alert(myVariable);
});
 */

/* const myImage = document.querySelector("img")

myImage.onclick = function() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "../old/PixPin_2024-12-27_09-38-07.jpg") {
        myImage.setAttribute("src", "../old/sdxl.jfif");
    } else {
        myImage.setAttribute("src", "../old/PixPin_2024-12-27_09-38-07.jpg");
    }
} */



/* document.querySelector("html").addEventListener("click", function() {
    alert("Hello World!");
}); */

function setUserName() { 
    const myName = prompt("Please enter your name:");
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}!`
}
}

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");


if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}!`
}

myButton.onclick = function() {
    setUserName();
}
  