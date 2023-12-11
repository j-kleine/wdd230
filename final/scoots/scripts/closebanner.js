const maxTempBanner = document.querySelector('#max-temp-container');
const maxTempClose = document.querySelector('#max-temp-close');

maxTempClose.addEventListener('click', () => {
	maxTempBanner.style.display = 'none';
});