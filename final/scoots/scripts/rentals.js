const vehicleCards = document.querySelector('#vehicle-cards');
const pricingTable = document.querySelector('#pricing-table');
const rentalSelect = document.querySelector('#rental-type');

const rentalsURL = 'https://j-kleine.github.io/wdd230/final/scoots/data/rentals.json';

async function getVehicleData() {
    const response = await fetch(rentalsURL);
    const data = await response.json();

    // console.table(data.rentals);
    if (vehicleCards) {
        displayVehicles(data.rentals);
        displayPricingTable(data.rentals);
    } else if (rentalSelect) {
        getRentalSelect(data.rentals);
    }
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
        vehiclePicture.setAttribute('width', 'auto');
        vehiclePicture.setAttribute('height', 'auto');

        title.textContent = `${vehicle.brand} ${vehicle.model}`;

        maxPersons.textContent = `max. Persons: ${vehicle.maxPerson}`;

        info.textContent = `${vehicle.info}`;


        card.appendChild(vehiclePicture);
        card.appendChild(title);
        card.appendChild(maxPersons);
        card.appendChild(info);

        vehicleCards.appendChild(card);
    });
}

const displayPricingTable = (rentals) => {
    const tableBody = document.createElement('tbody');
    pricingTable.appendChild(tableBody);
    rentals.forEach((vehicle) => {
        let tableRow = document.createElement('tr');
        let tableCellType = document.createElement('td');
        let tableCellReservHalf = document.createElement('td');
        let tableCellReservFull = document.createElement('td');
        let tableCellWalkHalf = document.createElement('td');
        let tableCellWalkFull = document.createElement('td');

        tableCellType.textContent = `${vehicle.brand} ${vehicle.model}\r\n${vehicle.extra}`;
        tableCellType.setAttribute('class', 'cell-rental-type')
        tableRow.appendChild(tableCellType);
        tableCellReservHalf.textContent = `${vehicle.prices[0].reservation.halfDay}$`;
        tableRow.appendChild(tableCellReservHalf);
        tableCellReservFull.textContent = `${vehicle.prices[0].reservation.fullDay}$`;
        tableRow.appendChild(tableCellReservFull);
        tableCellWalkHalf.textContent = `${vehicle.prices[0].walkIn.halfDay}$`;
        tableRow.appendChild(tableCellWalkHalf);
        tableCellWalkFull.textContent = `${vehicle.prices[0].walkIn.fullDay}$`;
        tableRow.appendChild(tableCellWalkFull);

        tableBody.appendChild(tableRow);
    });
}

const getRentalSelect = (rentals) => {
    rentals.forEach((vehicle) => {
        let selectOption = document.createElement('option')
        selectOption.setAttribute('value', `${vehicle.brand} ${vehicle.model} ${vehicle.extra}`);
        selectOption.innerHTML = `${vehicle.brand} ${vehicle.model} ${vehicle.extra}`;
        rentalSelect.appendChild(selectOption);
    });
}

getVehicleData();