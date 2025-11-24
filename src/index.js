const form = document.getElementById('poem-form');

const displayPoem = response => {
	new Typewriter('#poem', {
		strings: `${response.data.answer}`,
		autoStart: true,
		delay: 1,
		cursor: '',
	});
};

function generatePoem(event) {
	event.preventDefault();

	const themeInput = document.getElementById('theme-input').value;
	const API_KEY = 'aao33d4100dc1f18c42d1b9teb580408';
	const prompt = `Generate a poem about ${themeInput}`;
	const context =
		'You are a creative poet who writes beautiful and imaginative poems. Your poems are short, up to 6 lines long. Make sure the poem corresponds to the given theme. Each line is an HTML paragraph.';
	const API_URL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${API_KEY}`;
	axios.get(API_URL).then(displayPoem);
}

form.addEventListener('submit', generatePoem);
