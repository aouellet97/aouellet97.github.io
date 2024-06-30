let light = true;
const lightSwitch = document.getElementById('lightSwitch');
const textElements = document.querySelectorAll('.switch-text');
const skills = document.querySelectorAll('.skill-style');

function switchLight(){
	lightSwitch.className = '';
	lightSwitch.classList.add('bi');
	let textColor;
	if(light){
		light = false;
		document.body.style.backgroundColor = '#242424'; 
		lightSwitch.classList.add('bi-sun');
		textColor = 'white';
	}
	else{
		light = true;
		document.body.style.backgroundColor = 'white';
		lightSwitch.classList.add('bi-moon');
		textColor = 'red';
	}
	textElements.forEach((element) => {
		element.style.color = textColor;
	});
}