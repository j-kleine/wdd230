const getScootsInfoURL = "https://j-kleine.github.io/wdd230/final/scoots/data/scootsinfo.json";

async function getScootsInfo() {
    const response = await fetch(getScootsInfoURL);
    const data = await response.json();
    
    console.log(data.scootsinformation);

    displayScootsInfo(data.scootsinformation);
}

const displayScootsInfo = (scootsinformation) => {
    // ------ address1
    document.querySelectorAll(".scoots-address1").forEach(el => el.textContent = scootsinformation[0].address1);
}

getScootsInfo();