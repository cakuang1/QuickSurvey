//selectors
let addbutton = document.querySelector(".adds");



// creatinig formstruction
let formstructure = document.createElement('select');
let option1 = document.createElement('option').innerText = "True or False";;
let option2 = document.createElement('option');
let option3 = document.createElement('option');
option1.innerText = "True or False";
option2.innerText = "Yes or No";
option3.innerText = "Multiple choice";
formstructure.appendChild(option1);
formstructure.appendChild(option2);
formstructure.appendChild(option3);