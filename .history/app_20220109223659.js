
/* selectors */

let theform = document.querySelector(".theform");
let firstdiv = document.querySelector(".formdiv");
let seconddiv = document.querySelector(".bottomdiv");
let addbutton = seconddiv.querySelector(".adds");
let endbutton =seconddiv.querySelector(".creates");





addbutton.addEventListener("click",function(e) {
    let newfirstdiv = firstdiv.cloneNode(true);
    theform.appendChild(newfirstdiv);
    theform.appendChild(seconddiv);
    }
)




function emptyinput(input) {
    if (inputtxt.value.length == 0) 
    {
        return true;
    }
    else {
        return false;

    }
}






function generateform(e) {
    e.preventDefault();





}

endbutton.addEventListener("submit",function(e) {});




