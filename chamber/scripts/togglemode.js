function toggleDark() {
    var toggleSwitch = document.querySelector('#togglemode');

    if (toggleSwitch.checked == true) {
        document.documentElement.style.setProperty('--page-background', '#252525');
        document.documentElement.style.setProperty('--main-color-background', '#030303');
        document.documentElement.style.setProperty('--secondary-color-background', '#1B1B1B');
        document.documentElement.style.setProperty('--accent-color', '#C48208');
        document.documentElement.style.setProperty('--main-color-text', '#030303');
        document.documentElement.style.setProperty('--secondary-color-text', '#C48208');
        document.documentElement.style.setProperty('--text-on-dark', '#D7D7D7');
        document.documentElement.style.setProperty('--text-on-white', '#D7D7D7');
        document.documentElement.style.setProperty('--ffffff-background', '#303030');
        document.documentElement.style.setProperty('--ffffff-text', '#D7D7D7');
        document.documentElement.style.setProperty('--logo-brightness', 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7489%) hue-rotate(188deg) brightness(118%) contrast(69%)');
        document.documentElement.style.setProperty('--hero-img-filter', '.5');

        
    } else {
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
        document.documentElement.style.setProperty('--hero-img-filter', '0');
    }
}