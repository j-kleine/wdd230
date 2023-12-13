const vehicleCards = document.querySelector('#vehicle-cards');

const rentalsURL = 'https://j-kleine.github.io/wdd230/final/scoots/data/rentals.json';

async function getVehicleData() {
    const response = await fetch(rentalsURL);
    const data = await response.json();

    // console.table(data.rentals);
    displayVehicles(data.rentals);
    // displayPricingTable(data.rentals);
}

const displayVehicles = (rentals) => {
    rentals.forEach((vehicle) => {
        let card = document.createElement('section');
        let vehiclePicture = document.createElement('img');
        let title = document.createElement('h3');
        let maxPersons = document.createElement('span');
        let info = document.createElement('span');


        vehiclePicture.setAttribute('src', vehicle.vehicleImgURL);
        vehiclePicture.setAttribute('alt', `Picture of ${vehicle.brand} ${vehicle.model}`);
        vehiclePicture.setAttribute('loading', 'lazy');
        vehiclePicture.setAttribute('width', '500px');
        vehiclePicture.setAttribute('height', 'auto');

        title.textContent = `${vehicle.brand} ${vehicle.model}`

        maxPersons.textContent = `max. Persons: ${vehicle.maxPerson}`

        info.textContent = `${vehicle.info}`


        card.appendChild(vehiclePicture);
        card.appendChild(title);
        card.appendChild(maxPersons);
        card.appendChild(info);

        vehicleCards.appendChild(card);
    });
}

// const displayPricingTable = (rentals) => {

// }

getVehicleData();