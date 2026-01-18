const today = new Date();
today.getFullYear();

document.getElementById("lastmodified").innerHTML = document.lastModified;



const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
