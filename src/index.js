const form = document.getElementById('poem-form');

function generatePoem(event) {
	event.preventDefault();

	new Typewriter('#poem', {
		strings: 'Here is your generated poem based on the theme you provided.',
		autoStart: true,
		delay: 1,
		cursor: '',
	});
}

form.addEventListener('submit', generatePoem);
