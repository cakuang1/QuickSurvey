
/* selectors */

let theform = document.querySelector()
let firstdiv = document.querySelector(".formdiv");
let seconddiv = document.querySelector(".bottomdiv");
let addbutton = seconddiv.querySelector(".adds");


addbutton.addEventListener("click",function(e) {
    let newfirstdiv = firstdiv.cloneNode(true);


    theform.appendChild(newfirstdiv);
})
endbutton.addEventListener("submit",generateform);
function emptyinput(input) {
    if (inputtxt.value.length == 0) 
    {
        return true;
    }
    else {
        return false;

    }
}





function generateform() {
    if (array.length == 0) {
        alert('no questions dumbo');
        return ;
    }




}




