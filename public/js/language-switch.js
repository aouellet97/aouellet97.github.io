let lang = 'en';

let siteContent;

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
	
	document.querySelectorAll('[id]').forEach((element) => {
		const id = element.id;
		if (siteContent[id]) 
		{
			element.textContent = siteContent[id][lang];
		}
	});
}