console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('form submit');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);


function compliment(event) {
	event.target.textContent
	alert('you are smart')
}

let img = document.querySelector('img')
img.addEventListener('mouseover', compliment)