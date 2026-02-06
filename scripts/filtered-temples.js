const today = new Date();
today.getFullYear();

document.getElementById("lastmodified").innerHTML = document.lastModified;



const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

function toggleActive(element) {
    element.classList.toggle("active");
}




function dedicatedYear(datestring) {
    return parseInt(datestring.split(',')[0]);
}


// old
const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => dedicatedYear(temple.dedicated) < 1900));
})

// New
const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => dedicatedYear(temple.dedicated) >= 2000));
})

// Large
const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area >= 90000));
})

// Small
const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, U.S.",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, U.S.",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, U.S.",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // My temples were added here

    {
        templeName: "Oakland California",
        location: "Oakland, California, U.S.",
        dedicated: "1964, November, 17",
        area: 80157,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/oakland-temple-lds-996681-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, U.S.",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-736359-wallpaper.jpg"
    },
];

createTempleCard(temples);

function createTempleCard(filteredTemples) { 
    document.querySelector('div.cards').innerHTML = '';
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class"label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', `Image of ${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "250");
        image.setAttribute("decoding", "async");
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    })
}
