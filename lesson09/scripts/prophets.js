const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const card = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object

}
getProphetData();
const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let dob = document.createElement('h3')
        let pob = document.createElement('h3')
        let portrait = document.createElement('img');
        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name}  ${prophet.lastname}`; // fill in the blank
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);


        cards.appendChild(card);
    });// end of arrow function and forEach loop
}
