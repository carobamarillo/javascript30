const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logtext(e) {
		console.log(this.classList.value);
		e.stopPropagation();

}

divs.forEach(div => div.addEventListener('click', logtext, {capture: false}));
button.addEventListener('click', () => {
		console.log('Click!');
}, {once: true})