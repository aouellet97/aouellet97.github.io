// type effect 

const textElement = document.getElementById('text');
const speed = 25;
let intervalId;

function typeEffect(text, delay){
	textElement.textContent = '';
	let index = 0;
	if (intervalId) {
		clearInterval(intervalId);
	}
	intervalId = setInterval(() => {
		textElement.textContent += text.charAt(index);
		index++;
		if (index >= text.length) {
			clearInterval(intervalId);
		}
	}, delay);
}

typeEffect("HEY, I'M ALEX OUELLET FOURNIER", speed); //lunch at start

// fade in effect

function fadeIn(sections) {
	sections.forEach((section) => {
	  if (section.isIntersecting) {
		section.target.classList.add('fade-in-fx');
	  }
	});
  }
  

const observer = new IntersectionObserver(fadeIn,{
	root: null, 
	rootMargin: '0px', 
	threshold: 0.5 
});


document.querySelectorAll('.fade-in-fx-section').forEach((section) => {
	observer.observe(section);
});

// smooth move to effect

function moveTo(target) {
    let element = document.querySelector(target);
  
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - 100;
    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
}


// skill text effect

let skillTitle = document.getElementById('skill-h1');
const skillIcons = document.querySelectorAll('.skill-style');

function showName(icon){
	const level = icon.getAttribute('data-level');
	let name;
		
	if(level == '1' && lang == 'en'){
		name = 'beginner';
	}
	else if(level == '2' && lang == 'en'){
		name = 'intermediate';
	}
	else if(level == '3' && lang == 'en'){
		name = 'advanced';
	}
	else if(level == '1' && lang == 'fr'){
		name = 'débutant';
	}
	else if(level == '2' && lang == 'fr'){
		name = 'intermédiaire';
	}
	else if(level == '3' && lang == 'fr'){
		name = 'avancé';
	}

	skillTitle.innerText = icon.getAttribute('data-name') + " / " + name;
}

function showTitle(){
	let title;
	if(lang == 'en'){
		title = 'SKILLS';
	}
	else{
		title = 'COMPÉTENCES';
	}
	skillTitle.innerText = title;
}


skillIcons.forEach((icon) => {
	icon.addEventListener('mouseover', () => {
		showName(icon);
	});
	icon.addEventListener('mouseout', () => {
		showTitle();
	});
});



