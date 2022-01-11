//selectors
let addbutton = document.querySelector(".adds");
const list = document.querySelector("div");
const endbutton =document.querySelector(".creates");
let questionsdivs = document.querySelectorAll(".formdivs")
let array = [];

// creatinig formstruction
const formstructure = document.createElement('select');
const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');
option1.innerText = "True or False";
option2.innerText = "Yes or No";
option3.innerText = "Multiple choice";
formstructure.appendChild(option1);
formstructure.appendChild(option2);
formstructure.appendChild(option3);



// creating question container
let newdiv = document.createElement("div");
let linebreak = document.createElement("br");
let linebreak2 = document.createElement("br");
let newform = document.createElement("form");
let inp = document.createElement("input");
    inp.setAttribute("placeholder","Question")
let fcopy = formstructure.cloneNode(true);
let butt = addbutton.cloneNode(true);

newdiv.appendChild(newform);
newform.appendChild(inp);
newform.appendChild(fcopy);
newdiv.appendChild(linebreak);
newdiv.appendChild(butt);
newdiv.appendChild(linebreak2); 

newdiv.classList.add("formdiv");


addbutton.addEventListener("click",addanother)
function addanother() {
    let clone = newdiv.cloneNode(true);
    let selectedbutton = clone.childNodes[2];
    selectedbutton.classList.add("questionsbuttons");


    document.body.appendChild(clone);
    document.body.appendChild(endbutton);
    array.push(newdiv);
    console.log(array);
}



let formselector = document.querySelectorAll('formdiv')

function emptyinput(input) {
    if (inputtxt.value.length == 0) 
    {
        return true;
    }
    else {
        return false;

    }
}


endbutton.



