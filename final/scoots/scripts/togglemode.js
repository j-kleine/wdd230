var toggleSwitch = document.querySelector('#toggledarkmode');
let isDarkMode = Number(window.localStorage.getItem('isDarkMode')) || 0;

// Check initial state of Dark Mode, if checked in localStorage, run toggleDark() function
if (isDarkMode === 0) {
    toggleSwitch.checked = false;
    toggleDark();
} else {
    toggleSwitch.checked = true;
    toggleDark();
}

function toggleDark() {
    // if toggle switch gets checked, save state to localStorage and switch color variable values to Dark Mode
    if (toggleSwitch.checked === true) {
        isDarkMode = 1;

        document.documentElement.style.setProperty('--backgound-image', 'url("../images/darkmode/dm-pattern.svg"), url("../images/darkmode/dm-gradient.svg")');

        document.documentElement.style.setProperty('--fill-main', '#161A1D');
        document.documentElement.style.setProperty('--fill-accent1', '#F6B41E');
        document.documentElement.style.setProperty('--fill-accent2', '#7337BA');

        document.documentElement.style.setProperty('--text-main', '#F5F5F5');
        document.documentElement.style.setProperty('--text-secondary', '#161A1D');
        document.documentElement.style.setProperty('--text-accent1', '#F6B41E');
        document.documentElement.style.setProperty('--text-accent2', '#7337BA');

        document.documentElement.style.setProperty('--backdrop-color', 'rgba(17, 25, 40, 0.5)');

        document.querySelector('#header-logo').src = 'images/darkmode/dm-logo.webp';
        document.querySelector('#footer-logo').src = 'images/darkmode/dm-logo.webp';
        document.querySelector('#footer-image').src = 'images/darkmode/dm-footer-img.webp';
        
        localStorage.setItem('isDarkMode', isDarkMode);
    } else {
    // if toggle switch gets unchecked, save state to localStorage and switch color variable values to Light Mode
        isDarkMode = 0;

        document.documentElement.style.setProperty('--backgound-image', 'url("../images/lightmode/pattern.svg"), url("../images/lightmode/gradient.svg")');

        document.documentElement.style.setProperty('--fill-main', '#F5F5F5');
        document.documentElement.style.setProperty('--fill-accent1', '#ED7C14');
        document.documentElement.style.setProperty('--fill-accent2', '#74B561');

        document.documentElement.style.setProperty('--text-main', '#161A1D');
        document.documentElement.style.setProperty('--text-secondary', '#F5F5F5');
        document.documentElement.style.setProperty('--text-accent1', '#ED7C14');
        document.documentElement.style.setProperty('--text-accent2', '#74B561');

        document.documentElement.style.setProperty('--backdrop-color', 'rgba(255, 255, 255, 0.5)');
        
        document.querySelector('#header-logo').src = 'images/lightmode/logo.webp';
        document.querySelector('#footer-logo').src = 'images/lightmode/logo.webp';
        document.querySelector('#footer-image').src = 'images/lightmode/footer-img.webp';


        localStorage.setItem('isDarkMode', isDarkMode);
    }
}