//selectors
let addbutton = document.querySelector(".adds");



// creating formstruction
let formstructure = document.createElement('select');
let option1 = document.createElement('option');
let option2 = document.createElement('option');
let option3 = document.createElement('option');
option1.innerText = "True or False";
option2.innerText = "Yes or No";
option3.innerText = "Multiple choice";
formstructure.appendChild(option1);
formstructure.appendChild(option2);
formstructure.appendChild(option3);



//creating div container

let newdiv = document.createElement("div");
let linebreak = document.createElement("br");
let linebreak2 = document.createElement("br");
let newform = document.createElement("form");
let inp = document.createElement("input");
    inp.setAttribute("placeholder","Question")
let fcopy = formstructure.cloneNode(true);
newdiv.appendChild(newform);
newform.appendChild(inp);
newform.appendChild(fcopy);
newdiv.appendChild(linebreak);
newdiv.appendChild(butt);
newdiv.appendChild(linebreak2); 
newdiv.classList.add("formdiv");