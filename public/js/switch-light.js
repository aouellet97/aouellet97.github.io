let light = true;
const lightSwitch = document.getElementById('lightSwitch');
const textElements = document.querySelectorAll('.switch-text');
const skills = document.querySelectorAll('.skill-style');
const skillTexts = document.querySelectorAll('.blue-text');
const main = document.getElementById('main');
const contactSection = document.getElementById('contact-section');
const lightBgs = document.querySelectorAll('.light-bg');
const navBar = document.getElementById('nav-bar');
const buttons = document.querySelectorAll('.blue-bg');
const cards = document.querySelectorAll('.card-body');
const techs = document.querySelectorAll('.text-muted');

function switchLight(){
	lightSwitch.className = '';
	lightSwitch.classList.add('bi');
	
	let skillColor;
	let lightBgColor;

	if(light){
		light = false;
		document.body.style.backgroundColor = '#2b333f'; 
		main.style.backgroundColor = '#2b333f';
		skillColor = '#bbd2f5';
		lightSwitch.classList.add('bi-sun');
		
		contactSection.style.backgroundColor = '#222832';
		lightBgColor = '#2d3642';
		navBar.classList.remove('navbar-light');
		navBar.classList.add('navbar-dark');
		textElements.forEach((element) => {
			element.classList.add('text-white');
		});
		buttons.forEach((element) => {
			element.classList.add('blue-bg-dark');
			element.classList.remove('blue-bg');
		});
		cards.forEach((element) => {
			element.style.backgroundColor = '#313a46';
		});
		techs.forEach((element) => {
			element.classList.add('text-muted-dark');
		});
	}
	else{
		light = true;
		document.body.style.backgroundColor = 'white';
		main.style.backgroundColor = 'white';
		lightSwitch.classList.add('bi-moon');
		skillColor = '#1c5ec2';
		
		contactSection.style.backgroundColor = '#455266';
		lightBgColor = '#F8F9FA';
		navBar.classList.remove('navbar-dark');
		navBar.classList.add('navbar-light');
		textElements.forEach((element) => {
			element.classList.remove('text-white');
		});
		buttons.forEach((element) => {
			element.classList.remove('blue-bg-dark');
			element.classList.add('blue-bg');
		});
		cards.forEach((element) => {
			element.style.backgroundColor = 'white';
		});
		techs.forEach((element) => {
			element.classList.remove('text-muted-dark');
		});
	}
	skills.forEach((element) => {
		element.style.color = skillColor;
	});
	skillTexts.forEach((element) => {
		element.style.color = skillColor;
	});
	lightBgs.forEach((element) => {
		element.style.backgroundColor = lightBgColor;
	});
}