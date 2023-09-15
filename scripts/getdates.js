// get current year as copyrightYear
document.querySelector("#copyrightYear").innerHTML = `@ ${new Date().getFullYear()}`;


// get last modified date&time
document.querySelector("#lastModified").innerHTML = document.lastModified;