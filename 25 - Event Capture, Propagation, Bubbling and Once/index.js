const divs = document.querySelectorAll('div');

function logtext(e) {
	console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logtext));
