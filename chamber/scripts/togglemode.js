function toggleDark() {
    var toggleSwitch = document.querySelector('#togglemode');

    if (toggleSwitch.checked == true) {
        document.documentElement.style.setProperty('--page-background', '#141414');
        document.documentElement.style.setProperty('--main-color', '#000');
        document.documentElement.style.setProperty('--secondary-color', '#1D1D1D');
        document.documentElement.style.setProperty('--accent-color', '#f6ae2d');
        document.documentElement.style.setProperty('--text-on-dark', '#eaf1f9');
        document.documentElement.style.setProperty('--text-on-white', '#555');
        
    } else {
        document.documentElement.style.setProperty('--page-background', '#eaf1f9');
        document.documentElement.style.setProperty('--main-color', '#023368');
        document.documentElement.style.setProperty('--secondary-color', '#014397');
        document.documentElement.style.setProperty('--accent-color', '#f6ae2d');
        document.documentElement.style.setProperty('--text-on-dark', '#eaf1f9');
        document.documentElement.style.setProperty('--text-on-white', '#555');
    }
}