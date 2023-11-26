const getMembersURL = "https://j-kleine.github.io/wdd230/chamber/data/members.json";

const spotlightContainer = document.querySelector('.spotlight-grid');

async function getMembers() {
    const response = await fetch(getMembersURL);
    const data = await response.json();
    
    // console.log(data.companies);

    displaySpotlightMembers(data.companies);
}

const displaySpotlightMembers = (companies) => {
    companies.forEach((company) => {
        if (company.membershipLvl == 'Silver' || company.membershipLvl == 'Gold') {
            // console.log(company.name + ': ' + company.membershipLvl);

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

            spotlightContainer.appendChild(spotlightCard);
        }
        
    });
}

getMembers();