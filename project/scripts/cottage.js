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

// setting up orders counter
let orders = Number(window.localStorage.getItem("orders-ls")) || 0;

if (orders !== 0) {
    orders += 1;
} else {
    orders = 1;
}

// visit counter
window.localStorage.setItem("orders-ls", orders);

const ordersE1 = document.querySelector(".orders");
if (ordersE1) {
    ordersE1.textContent = orders;
    
}

let visits = Number(window.localStorage.getItem("visits-ls")) || 0;
if (visits !== 0) {
    visits += 1;
} else {
    visits = 1;
}
window.localStorage.setItem("visits-ls", visits);

const visitsE1 = document.querySelector(".visits");
if (visitsE1) {
    visitsE1.textContent = visits;
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
        category: "Seasonal",
        imageUrl: "images/sweetpotato.webp",
    },
    {
        breadName: "Sourdough Round",
        price: "$15.00",
        category: "Bread",
        imageUrl: "images/largeround.webp",
    },
    {
        breadName: "Mini Rounds(2)",
        price: "$15.00",
        category: "Bread",
        imageUrl: "images/smallrounds.webp",
    },
    {
        breadName: "Sourdough Loaf",
        price: "$15.00",
        category: "Bread",
        imageUrl: "images/sourdoughloaf.webp",
    },
    {
        breadName: "Sourdough Cinnamon Rolls",
        price: "$15.00",
        category: "Treats",
        imageUrl: "images/cinnamonrolls.webp",
    },
    {
        breadName: "Jalapeno Cheddar Loaf",
        price: "$15.00",
        category: "Bread",
        imageUrl: "images/jalapenocheddar.webp",
    },
    {
        breadName: "Chocolate Chip Cookies",
        price: "$12.00",
        category: "Treats",
        imageUrl: "images/cookies.webp",
    },
    {
        breadName: "Cake Pops",
        price: "$12.00",
        category: "Treats",
        imageUrl: "images/cakepops.webp",
    },]

// Only run createBreadcard if the cards container exists (on index.html)
const cardsContainer = document.querySelector('div.cards');
if (cardsContainer) {
    createBreadcard(breads);
}

function createBreadcard(filteredBreads) {
    const cardsDiv = document.querySelector('div.cards');
    if (!cardsDiv) return;  // Exit if cards div doesn't exist
    
    cardsDiv.innerHTML = "";
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


        cardsDiv.appendChild(card);
    });
}

// product array
const products = [
    {
        name: "Sweet Potato Round",
        price: "$18.00",
        category: "Seasonal",
    },
    {
        name: "Sourdough Round",
        price: "$15.00",
        category: "Bread",
    },
    {
        name: "Mini Rounds(2)",
        price: "$15.00",
        category: "Bread",
    },
    {
        name: "Sourdough Loaf",
        price: "$15.00",
        category: "Bread",
    },
    {
        name: "Sourdough Cinnamon Rolls",
        price: "$15.00",
        category: "Treats",
    },
    {
        name: "Chocolate Chip Cookies",
        price: "$12.00",
        category: "Treats",
    },
    {
        name: "Cake Pops",
        price: "$12.00",
        category: "Treats",
    },
];

function populateProductDropdown() {
    const productSelect = document.getElementById("product-name");
    console.log("Product select element:", productSelect);

    if (!productSelect) {
        console.log("Product select not found!");
        return;
    }

    console.log("Populating dropdown with", products.length, "products");

    products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
        console.log("Added product:", product.name);
    });
}

document.addEventListener("DOMContentLoaded", populateProductDropdown);