let lang = 'en';

const siteContent = {
    'intro-h1': {
      'en': 'welcome test',
      'fr': 'Bonjour tout le monde!',
    },
	'intro-p': {
		'en': 'english version',
		'fr': 'en francais!',
	},
	'language': {
		'en': 'fr',
		'fr': 'en',
	}
  };
  
function switchLanguage() {
	if(lang === 'en'){
		lang = 'fr';
	}
	else{
		lang = 'en';
	}

	document.documentElement.lang = lang; 

	document.querySelectorAll('[id]').forEach((element) => {
		const id = element.id;
		if (siteContent[id]) 
		{
			element.textContent = siteContent[id][lang];
		}
	});
}