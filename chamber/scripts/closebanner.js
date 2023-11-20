const banButton = document.querySelector('#close-banner');
const banner = document.querySelector('#banner');

banButton.addEventListener('click', () => {
	banner.style.display = 'none';
});