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
        document.documentElement.style.setProperty('--page-background', '#252525');
        document.documentElement.style.setProperty('--main-color-background', '#030303');
        document.documentElement.style.setProperty('--secondary-color-background', '#1B1B1B');
        document.documentElement.style.setProperty('--accent-color', '#C48208');
        document.documentElement.style.setProperty('--main-color-text', '#D7D7D7');
        document.documentElement.style.setProperty('--secondary-color-text', '#f6ae2d');
        document.documentElement.style.setProperty('--text-on-dark', '#D7D7D7');
        document.documentElement.style.setProperty('--text-on-white', '#D7D7D7');
        document.documentElement.style.setProperty('--ffffff-background', '#303030');
        document.documentElement.style.setProperty('--ffffff-text', '#D7D7D7');
        document.documentElement.style.setProperty('--logo-brightness', 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7489%) hue-rotate(188deg) brightness(118%) contrast(69%)');
        document.documentElement.style.setProperty('--dm-img-filter', '.5');
        localStorage.setItem('isDarkMode', isDarkMode);
        
    } else {
        
    // if toggle switch gets unchecked, save state to localStorage and switch color variable values to Light Mode
        isDarkMode = 0;
        document.documentElement.style.setProperty('--page-background', '#eaf1f9');
        document.documentElement.style.setProperty('--main-color-background', '#023368');
        document.documentElement.style.setProperty('--secondary-color-background', '#014397');
        document.documentElement.style.setProperty('--accent-color', '#f6ae2d');
        document.documentElement.style.setProperty('--main-color-text', '#023368');
        document.documentElement.style.setProperty('--secondary-color-text', '#014397');
        document.documentElement.style.setProperty('--text-on-dark', '#eaf1f9');
        document.documentElement.style.setProperty('--text-on-white', '#555');
        document.documentElement.style.setProperty('--ffffff-background', '#FFF');
        document.documentElement.style.setProperty('--ffffff-text', '#FFF');
        document.documentElement.style.setProperty('--logo-brightness', 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)');
        document.documentElement.style.setProperty('--dm-img-filter', '0');
        localStorage.setItem('isDarkMode', isDarkMode);
    }
}