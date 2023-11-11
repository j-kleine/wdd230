const getMembersURL = "https://j-kleine.github.io/wdd230/chamber/data/members.json";

const directoryContainer = document.querySelector('.directory-grid');

async function getMembers() {
    const response = await fetch(getMembersURL);
    const data = await response.json();
    
    console.log(data.companies);

    displayMembers(data.companies);
}

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let mCard = document.createElement('section');
        let mName = document.createElement('h2');
        let mAddress = document.createElement('p');
        let mPhone = document.createElement('a');
        let mURL = document.createElement('a');
        let mLogo = document.createElement('img');
        let mMembership = document.createElement('p');
        
        mCard.setAttribute('class', 'member-card');

        mName.setAttribute('class', 'm-name');
        mName.textContent = company.name;

        mAddress.setAttribute('class', 'm-address');
        mAddress.textContent = company.address;

        mPhone.setAttribute('class', 'm-phone');
        mPhone.textContent = company.phone;
        mPhone.setAttribute('href', `tel:${company.phone}`);

        mURL.setAttribute('class', 'm-url');
        mURL.textContent = company.url;
        mURL.setAttribute('href', `https://${company.url}/`);
        mURL.setAttribute('target', '_blank');

        mLogo.setAttribute('class', 'm-logo');
        mLogo.setAttribute('src', company.logo);
        mLogo.setAttribute('alt', `Logo of ${company.name}`);
        mLogo.setAttribute('loading', 'lazy');

        mMembership.setAttribute('class', 'm-lvl');
        mMembership.textContent = company.membershipLvl;



        mCard.appendChild(mName);
        mCard.appendChild(mLogo);
        mCard.appendChild(mAddress);
        mCard.appendChild(mPhone);
        mCard.appendChild(mURL);


        
        directoryContainer.appendChild(mCard);
    });
}

getMembers();