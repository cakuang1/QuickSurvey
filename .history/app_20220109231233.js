
/* selectors */

let theform = document.querySelector(".theform");
let firstdiv = document.querySelector(".formdiv");
let seconddiv = document.querySelector(".bottomdiv");
let addbutton = seconddiv.querySelector(".adds");
let endbutton =seconddiv.querySelector(".creates");


// cloning a copy


let counter = 1;
let newfirstdiv = firstdiv.cloneNode(true);
addbutton.addEventListener("click",function(e) {

    counter += 1;
    newfirstdiv.querySelector(".inps").setAttribute("placeholder", `Question ${counter}`);
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



