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
// bread
const breadlink = document.querySelector("#bread");
breadlink.addEventListener("click", () => {
    createBreadcard(breads.filter(bread => bread.category === "Bread"));
})

// Treats
const treatslink = document.querySelector("#treats");
treatslink.addEventListener("click", () => {
    createBreadcard(breads.filter(bread => bread.category === "Treats"));
})

// Seasonal
const seasonalLink = document.querySelector("#seasonal");
seasonalLink.addEventListener("click", () => {
    createBreadcard(breads.filter(bread => bread.category === "Seasonal"));
})  


const breads = [
    {
        breadName: "Sweet Potato Round",
        price: "$18.00",
        category: "Treats",        
        imageUrl: "sweetpotato.jpg",
    },
    {
        breadName: "Sourdough Round",
        price: "$15.00",
        category: "Bread",        
        imageUrl: "sourdough.jpg",
    },
    { 
        breadName: "Sourdough Loaf",
        price: "$15.00",
        category: "Bread",        
        imageUrl: "sourdoughloaf.jpg",
    },
    {
        breadName: "Sourdough Cinnamon Rolls",
        price: "$15.00",               
        imageUrl: "sourdoughcinnamonrolls.jpg",
    }
]

createBreadcard(breads);

function createBreadcard(filteredBreads) {
    document.querySelector ('div.cards').innerHTML = "";
    filteredBreads.forEach(bread => {
        let card = document.createElement('section');
        let name = document.createElement("h2");
        let price = document.createElement("p");
        let category = document.createElement("p");
        let image = document.createElement("img");
        
        name.textContent = bread.breadName;
        price.innerHTML = `<strong>Price:</strong> ${bread.price}`;
        category.innerHTML = `<strong>Category:</strong> ${bread.category}`;
        image.setAttribute('src', bread.imageUrl);
        image.setAttribute('alt', `Image of ${bread.breadName}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '400');
        image.setAttribute('height', '250');
        image.setAttribute('decoding', 'async');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(category);


        document.querySelector('div.cards').appendChild(card);
    });
}