
/* selectors */

let theform = document.querySelector(".theform");
let firstdiv = document.querySelector(".formdiv");
let seconddiv = document.querySelector(".bottomdiv");
let addbutton = seconddiv.querySelector(".adds");
let endbutton =seconddiv.querySelector(".creates");


// cloning a copy
let newfirstdiv = firstdiv.cloneNode(true);

counter
addbutton.addEventListener("click",function(e) {
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


function handleForm(event) {
    event.preventDefault(); 

    } 





theform.addEventListener("submit",handleForm);



