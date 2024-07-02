let lang = 'en';

let siteContent;
let infoButtons = document.querySelectorAll('.info-button');
let elements = document.querySelectorAll('[id]');

fetch('site-content.json')
.then( (response) => {
	return response.json();
})
.then((data) => {
	siteContent = data;
})
.catch(error => {
	console.error('Error fetching JSON:', error);
});
  
function switchLanguage() {
	if(lang === 'en'){
		lang = 'fr';
	}
	else{
		lang = 'en';
	}

	document.documentElement.lang = lang; 
	typeEffect(siteContent['intro-h1'][lang], speed); 
	
	infoButtons.forEach((button) => {button.textContent = siteContent['info-button'][lang];});
	elements.forEach((element) => {
		const id = element.id;
		if (siteContent[id]) 
		{
			if(id == 'intro-p'){
				element.innerHTML = siteContent[id][lang];
			}
			else{
				element.textContent = siteContent[id][lang];
			}
		}
	});
}