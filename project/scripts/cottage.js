const today = new Date();
today.getFullYear();

document.getElementById("lastmodified").innerHTML = document.lastModified;

// Put in hambutton for nav toggle
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

function toggleActive(element) {
    element.classList.toggle("active");
}

