

// add event listeners to each button

let color = document.querySelector('#color.btns')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')


function favoriteColor (event) {
    event.preventDefault();
    document.getElementById("color").style.backgroundColor = "white";
    alert('My favorite color is purple')
}

function favoritePlace (event) {
    event.preventDefault();
    document.getElementById("place").style.backgroundColor = "white";
    alert('My favorite place is Disney World')
}

function favoriteRitual (event) {
    event.preventDefault();
    document.getElementById("ritual").style.backgroundColor = "white";
    alert('My favorite ritual is listening to podcast')
    
}


color.addEventListener('click', favoriteColor)
place.addEventListener('click', favoritePlace)
ritual.addEventListener('click', favoriteRitual)



//could not get it to work with one function
//function favorite (event) {
//     event.preventDefault();
//     let list = Array.from(btns)
//     console.log(list)
//     for(let i =0; i < list.length; i++) {
//     if (list[i] === "buttons#color.btns") {
//     alert('My favorite color is purple')
//     } else if (list[i] === "buttons#place.btns") {
//     alert('My favorite place is Disney World')
//     } else if(list[i] === "buttons#ritual.btns") {
//     alert('My favorite ritual is listening to podcasts')
//     }
// }
// }