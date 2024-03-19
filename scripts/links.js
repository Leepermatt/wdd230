const baseURL = "https://leepermatt.github.io/wdd230/";
const linksURL = "https://leepermatt.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    ///console.log(data); ///test
    displayLinks(data);
}

getLinks();

const displayLinks = (assignments) => {
    // card build code goes here
    assignments.forEach((assignment) => {
        let card = document.createElement('div');
        let lesson = document.createElement('h2'); // fill in the blank
        let url = document.createElement('h3');
        let title = document.createElement('h3');

        // Build the h2 content out to show the prophet's full name
        lesson.textContent = `Lesson Number:${assignment.lesson}`;
        url.textContent = `Link: ${assignment.url}`;
        title.textContent = `Description: ${assignment.title}`;
        // Build the image portrait by setting all the relevant attributes
        ///portrait.setAttribute('src', prophet.imageurl);
        ////portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname}`); // fill in the blank
        ///portrait.setAttribute('loading', 'lazy');
        ///portrait.setAttribute('width', '340');
        ///portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(lesson); //fill in the blank
        card.appendChild(url);
        card.appendChild(title);
        ///card.appendChild(portrait);


        cards.appendChild(card);
    });// end of arrow function and forEach loop
}