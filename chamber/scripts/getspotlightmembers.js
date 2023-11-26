const getMembersURL = "https://j-kleine.github.io/wdd230/chamber/data/members.json";

const spotlightContainer = document.querySelector('.spotlight-grid');

async function getMembers() {
    try {
        const response = await fetch(getMembersURL);
        if (response.ok) {
            const data = await response.json();
            displaySpotlightMembers(data.companies);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displaySpotlightMembers = (companies) => {
    // Filter 'Silver' and 'Gold' companies
    const filteredCompanies = companies.filter(company => company.membershipLvl === 'Silver' || company.membershipLvl === 'Gold');

    // Shuffle the array randomly
    const shuffledCompanies = shuffleArray(filteredCompanies);

    // Display the first three companies (or fewer if there are less than three)
    for (let i = 0; i < Math.min(3, shuffledCompanies.length); i++) {
        const company = shuffledCompanies[i];
        let spotlightCard = createSpotlightCard(company);
        spotlightContainer.appendChild(spotlightCard);
    }
};

// Function to shuffle an array randomly
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// Function to create a spotlight card for a company
function createSpotlightCard(company) {
    let spotlightCard = document.createElement('section');
    spotlightCard.setAttribute('class', 'spotlight');

    let spotlightName = document.createElement('h3');
    spotlightName.textContent = company.name;

    let spotlightAddress = document.createElement('p');
    spotlightAddress.textContent = company.address;

    let spotlightPhone = document.createElement('a');
    spotlightPhone.textContent = company.phone;
    spotlightPhone.setAttribute('href', `tel:${company.phone}`);

    let spotlightURL = document.createElement('a');
    spotlightURL.textContent = company.url;
    spotlightURL.setAttribute('href', `https://${company.url}/`);
    spotlightURL.setAttribute('target', '_blank');

    spotlightCard.appendChild(spotlightName);
    spotlightCard.appendChild(spotlightAddress);
    spotlightCard.appendChild(spotlightPhone);
    spotlightCard.appendChild(spotlightURL);

    return spotlightCard;
}

getMembers();