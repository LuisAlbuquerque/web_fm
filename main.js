
console.log("Extension!!!")

// global variables
indice = 1;
var line;

// change title
var title = document.querySelector('h1');
title.innerHTML = "/" + title.innerHTML.toLocaleString().slice(17)

//import P5
//document.querySelector('head').innerHTML += '<script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"></script>'



// clean page
//   
up = document.querySelector('.up')
if(up != null){
    up.style.visibility = "hidden"
}

// change file logo
document.querySelectorAll(".file").forEach((file) => {
    file.innerHTML = '<img src="https://image.flaticon.com/icons/svg/2830/2830810.svg" width="50px" alt="File: ">' + file.innerHTML.split(">")[1];
})

// change dir logo 
document.querySelectorAll(".dir").forEach((dir) => {
    dir.innerHTML = '<img src="https://image.flaticon.com/icons/svg/2456/2456896.svg" width="50px" alt="File: ">' + dir.innerHTML;

})

// select first element;
function change(){
    console.log("o indice: " + indice)
    line = lines[indice]
    line.style.background = "#636372"
}
const lines = document.querySelectorAll("tr")
change();

// add short cuts

var div = document.querySelector("#UI_showHidden");

// HOME
div.innerHTML += '<label> <a href="file:///home/ibanezg/"> 🏠 </button></label>'

// Projects
div.innerHTML += '<label> <a href="file:///home/ibanezg/Projects/"> 🏢</button></label>'


function next(){
    console.log("next");
    line.style.background = "#333740"
    indice += 2 ;
    console.log(lines.length)
    change();
}

function previus(){
    console.log("previus");
    line.style.background = "#333740"
    indice -= 2 % (lines.length);
    change();
}

function open(){
    console.log(line.querySelector("a").href)
    window.location.href = line.querySelector("a").href
}

function pop_stack(){
    window.location.href = document.querySelector(".up").href
}

function handler_key_pressed(key){
  console.log(key);
    switch(key){
        case "j" : 
            next();
            break;

        case "k" : 
            previus();
            break;

        case "l" : 
            open();
            break;

        case "h" : 
            pop_stack();
            break;

        case "s" : 
            document.querySelectorAll('th')[1].click()
            lines = document.querySelectorAll("tr")
            change();
            break;

        case "n" : 
            document.querySelector('th').click()
            lines = document.querySelectorAll("tr")
            change();
            break;

        case "t" : 
            document.querySelectorAll('th')[2].click()
            lines = document.querySelectorAll("tr")
            change();
            break;

    }

}


document.addEventListener ('keypress', (event) => {
  const keyName = event.key;
    handler_key_pressed(keyName);
});
