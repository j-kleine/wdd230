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

        // ------ Change FAVICON ------
        document.querySelector('link[rel~="icon"]').href = 'dm-favicon.ico';



        // ------ Change PAGE BACKGROUND IMAGE ------
        document.documentElement.style.setProperty('--backgound-image', 'url("../images/darkmode/pattern.svg"), url("../images/darkmode/gradient.svg")');



        // ------ Change BACKGROUND / FILL COLORS ------
        document.documentElement.style.setProperty('--fill-main', '#161A1D');
        document.documentElement.style.setProperty('--fill-accent1', '#F6B41E');
        document.documentElement.style.setProperty('--fill-accent2', '#7337BA');



        // ------ Change TEXT COLORS ------
        document.documentElement.style.setProperty('--text-main', '#F5F5F5');
        document.documentElement.style.setProperty('--text-secondary', '#161A1D');
        document.documentElement.style.setProperty('--text-accent1', '#F6B41E');
        document.documentElement.style.setProperty('--text-accent2', '#7337BA');
        document.documentElement.style.setProperty('--text-logo-rentals', '#F6B41E');



        // ------ Change BACKDROP COLOR ------
        document.documentElement.style.setProperty('--backdrop-color', 'rgba(17, 25, 40, 0.5)');



        // ------ Change IMAGES ------
        // HEADER LOGO
        document.querySelector('#header-logo').src = 'images/darkmode/logo.webp';

        // HERO IMAGE
        if (document.querySelector('#hero-image')) {
            document.querySelector('#hero-img275').srcset = 'images/darkmode/hero-img275.webp';
            document.querySelector('#hero-img325').srcset = 'images/darkmode/hero-img325.webp';
            document.querySelector('#hero-img450').srcset = 'images/darkmode/hero-img450.webp';
            document.querySelector('#hero-img600').srcset = 'images/darkmode/hero-img600.webp';
            document.querySelector('#hero-image').src = 'images/darkmode/hero-img800.webp';
        }
        

        // FOOTER LOGO
        document.querySelector('#footer-logo').src = 'images/darkmode/logo.webp';

        // FOOTER IMAGE
        document.querySelector('#footer-image').src = 'images/darkmode/footer-img.webp';



        // CONTACT MAP
        if (document.querySelector('.map')) {
            document.querySelector('.map').style.webkitFilter = 'brightness(.8) saturate(.8)';
            document.querySelector('.map').style.filter = 'brightness(.8) saturate(.8)';
        }
        


        localStorage.setItem('isDarkMode', isDarkMode);
    } else {
    // if toggle switch gets unchecked, save state to localStorage and restore color variable values back to Light Mode
    isDarkMode = 0;

    // ------ Change FAVICON ------
    document.querySelector('link[rel~="icon"]').href = 'favicon.ico';



    // ------ Change PAGE BACKGROUND IMAGE ------
    document.documentElement.style.setProperty('--backgound-image', 'url("../images/lightmode/pattern.svg"), url("../images/lightmode/gradient.svg")');



    // ------ Change BACKGROUND / FILL COLORS ------
    document.documentElement.style.setProperty('--fill-main', '#F5F5F5');
    document.documentElement.style.setProperty('--fill-accent1', '#ED7C14');
    document.documentElement.style.setProperty('--fill-accent2', '#74B561');



    // ------ Change TEXT COLORS ------
    document.documentElement.style.setProperty('--text-main', '#161A1D');
    document.documentElement.style.setProperty('--text-secondary', '#F5F5F5');
    document.documentElement.style.setProperty('--text-accent1', '#161A1D');
    document.documentElement.style.setProperty('--text-accent2', '#74B561');
    document.documentElement.style.setProperty('--text-logo-rentals', '#ED7C14');



    // ------ Change BACKDROP COLOR ------
    document.documentElement.style.setProperty('--backdrop-color', 'rgba(255, 255, 255, 0.5)');



    // ------ Change IMAGES ------
    // HEADER LOGO
    document.querySelector('#header-logo').src = 'images/lightmode/logo.webp';

    // HERO IMAGE
    if (document.querySelector('#hero-image')) {
        document.querySelector('#hero-img275').srcset = 'images/lightmode/hero-img275.webp';
        document.querySelector('#hero-img325').srcset = 'images/lightmode/hero-img325.webp';
        document.querySelector('#hero-img450').srcset = 'images/lightmode/hero-img450.webp';
        document.querySelector('#hero-img600').srcset = 'images/lightmode/hero-img600.webp';
        document.querySelector('#hero-image').src = 'images/lightmode/hero-img800.webp';
    }

    // FOOTER LOGO
    document.querySelector('#footer-logo').src = 'images/lightmode/logo.webp';

    // FOOTER IMAGE
    document.querySelector('#footer-image').src = 'images/lightmode/footer-img.webp';



    // CONTACT MAP
    if (document.querySelector('.map')) {
        document.querySelector('.map').style.webkitFilter = 'brightness(1) saturate(1)';
        document.querySelector('.map').style.filter = 'brightness(1) saturate(1)';
    }
    


    localStorage.setItem('isDarkMode', isDarkMode);
    }
}