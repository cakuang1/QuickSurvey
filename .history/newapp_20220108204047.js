//selectors
let addbutton = document.querySelector(".adds");



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