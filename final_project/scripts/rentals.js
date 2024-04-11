const url = 'https://leepermatt.github.io/wdd230/final_project/data/rental.json';

const cards = document.querySelector('#card');

async function getRentalData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data retreival
    displayRentals(data); // note that we reference the prophets array of the JSON data object, not just the object

}
getRentalData();
const displayRentals = (rentals) => {
    // card build code goes here
    rentals.forEach((rental) => {
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let maxPerson = document.createElement('h3');
        let halfDay3 = document.createElement('h3');
        let fullDay = document.createElement('h3');
        let halfDay6 = document.createElement('h3');
        let fullDayExtend = document.createElement('h3');

        let portrait = document.createElement('img');

        name.textContent = `Rental Type  ${rental.RentalType}`;
        maxPerson.textContent = `Max Persons: ${rental.MaxPersons}`;
        halfDay3.textContent = `Price for half day 3 hours: ${rental.HalfDay3hrs}`;
        fullDay.textContent = `Price for full day: ${rental.FullDay}`;
        halfDay6.textContent = `Price for half day 6 hours: ${rental.HalfDay6hrs}`;
        fullDayExtend.textContent = `Price for full day extended: ${rental.FullDayExtended}`;

        portrait.setAttribute('src', rental.Image);
        portrait.setAttribute('alt', `Picture  of ${rental.RentalType}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(name); //fill in the blank
        card.appendChild(maxPerson);
        card.appendChild(halfDay3);
        card.appendChild(fullDay);
        card.appendChild(halfDay6);
        card.appendChild(fullDayExtend);

        card.appendChild(portrait);


        cards.appendChild(card);
    });// end of arrow function and forEach loop
}
