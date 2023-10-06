// get current year as copyrightYear
document.querySelector("#copyrightYear").innerHTML = `@${new Date().getFullYear()} Helsingør Commerce Chamber`;


// get last modified date&time
document.querySelector("#lastModified").innerHTML = `LAST MODIFIED:<br>${document.lastModified}`;