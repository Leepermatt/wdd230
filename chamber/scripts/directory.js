const url = "data/members.json";
const card = document.querySelector(".directory");

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.Members); // temporary testing of data retreival
    displayDirectory(data.Members);
}

const displayDirectory = (Members) => {
    Members.forEach(member => {
        const direc = document.createElement('section');
        const h2 = document.createElement('h2');
        const phone_number = document.createElement('p');
        const addresses = document.createElement('p');
        const website = document.createElement('p');
        const membership = document.createElement('p');
        const img = document.createElement('img');
        const contact = document.createElement('contact')

        h2.textContent = `${member.Name}`;
        phone_number.textContent = `${member.Phone}`;
        addresses.textContent = `${member.Address}`;
        website.textContent = `${member.Web_url}`;
        membership.textContent = `${member.membership}`;
        contact.textContent = `${member.contact}`
        img.setAttribute('src', member.image);
        img.setAttribute('alt', member.altText)

        direc.appendChild(h2);
        direc.appendChild(phone_number);
        direc.appendChild(addresses);
        direc.appendChild(website);
        direc.appendChild(membership);
        direc.appendChild(contact);
        direc.appendChild(img);

        card.appendChild(direc); // Append direc to the cards div
    });
}

getData();