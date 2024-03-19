const baseURL = "https://leepermatt.github.io/wdd230/";
const linksURL = "https://leepermatt.github.io/wdd230/data/links.json";
const card = document.querySelector(".card");

// Asynchronous function to get the links data from the links.json file
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach(lesson => {
        const list = document.createElement('ul');
        lesson.links.forEach(link => {
            const items = document.createElement('li');
            const linkElement = document.createElement('a');

            linkElement.href = baseURL + link.url;
            linkElement.textContent = `${lesson.lesson}: ${link.title}`
            items.appendChild(linkElement);
            list.appendChild(items);
        });

        card.appendChild(list);
    });
}

// Call the getLinks() function to fetch the links data and display it
getLinks();
