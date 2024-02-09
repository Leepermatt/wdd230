const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = oLastModif;

let year = { year: 'numeric' };
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', year);