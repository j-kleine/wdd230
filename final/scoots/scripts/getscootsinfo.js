const getScootsInfoURL = "https://j-kleine.github.io/wdd230/final/scoots/data/scootsinfo.json";

async function getScootsInfo() {
    const response = await fetch(getScootsInfoURL);
    const data = await response.json();
    
    // console.log(data.scootsinformation);

    displayScootsInfo(data.scootsinformation);
}

const displayScootsInfo = (scootsinformation) => {
    // ------ address1
    document.querySelectorAll(".scoots-address1").forEach(el => el.textContent = scootsinformation[0].address1);
    document.querySelectorAll(".scoots-address1").forEach(el => el.setAttribute('href', `${scootsinformation[0].address1url}`));

    // ------ address2
    document.querySelectorAll(".scoots-address2").forEach(el => el.textContent = scootsinformation[0].address2);
    document.querySelectorAll(".scoots-address2").forEach(el => el.setAttribute('href', `${scootsinformation[0].address2url}`));

    // ------ email
    document.querySelectorAll(".scoots-email").forEach(el => el.textContent = scootsinformation[0].email);
    document.querySelectorAll(".scoots-email").forEach(el => el.setAttribute('href', `mailto:${scootsinformation[0].email}`));

    // ------ phone
    document.querySelectorAll(".scoots-phone").forEach(el => el.textContent = scootsinformation[0].phone);
    document.querySelectorAll(".scoots-phone").forEach(el => el.setAttribute('href', `tel:${scootsinformation[0].phone}`));
}

getScootsInfo();