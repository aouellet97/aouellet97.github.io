let lang = 'en';

const siteContent = {
    'intro-h1': {
      'en': "HEY, I'M ALEX OUELLET FOURNIER",
      'fr': "BONJOUR, JE SUIS ALEX OUELLET FOURNIER",
    },
	'intro-p': {
		'en': 'A junior full-stack developer driven by curiosity and a passion for learning. I enjoy diving into both frontend and backend technologies, eager to expand my skills and contribute to innovative projects',
		'fr': "Un développeur full-stack junior motivé par la curiosité et la passion d'apprendre. J'aime me plonger dans les technologies frontend et backend, désireux d'élargir mes compétences et de contribuer à des projets innovants.",
	},
	'language': {
		'en': 'fr',
		'fr': 'en',
	},
	'about': {
		'en': 'About',
		'fr': 'À propos',
	},
	'project': {
		'en': 'Projects',
		'fr': 'Projets',
	},
	'home': {
		'en': 'Home',
		'fr': 'Accueil',
	},
	'project-button': {
		'en': 'PROJECTS',
		'fr': 'PROJETS',
	},
  };
  
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