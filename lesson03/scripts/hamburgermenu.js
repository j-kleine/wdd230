const hamButton = document.querySelector('#menubutton');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('opennav');
	hamButton.classList.toggle('openbutton');
});