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

function moveToBottom() {
			
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth'
	});
}

// moving photo

const movingImg = document.getElementById('profile-img');
	
window.addEventListener('scroll', () => {
	//compatible on old browsers too
	const scrollTop = window.scrollY || window.pageYOffset;

	movingImg.style.transform = `translateX(${scrollTop}px)`;
});
