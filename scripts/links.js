const baseURL = "https://leepermatt.github.io/wdd230/";
const linksURL = "https://leepermatt.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    ///console.log(data); ///test
    displayLinks(data.lessons);
}



const displayLinks = (lessons) => {


    lessons.forEach((lesson) => {
        let lessonDiv = document.createElement('div');
        let lessonHeader = document.createElement('h2');
        lessonHeader.textContent = `Lesson Number:${lesson.lesson}`;
        lessonDiv.appendChild(lessonHeader);
        lesson.links.forEach((link) => {
            let linkElement = document.createElement('a');
            linkElement.textContent = link.title;
            linkElement.href = link.url;
            linkElement.target = "_blank"; // Open link in a new tab
            let listItem = document.createElement('li');
            listItem.appendChild(linkElement);
            lessonDiv.appendChild(listItem);


        });
        cards.appendChild(lessonDiv);

    });// end of arrow function and forEach loop
}
getLinks();