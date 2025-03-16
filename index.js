const ramens = [
    { 
        id: 1,
        name: "Shoyu Ramen", 
        restaurant: "Nonono", 
        image: "./images/shoyu.jpg", 
        rating: 7,
        comment: "Delish. Can't go wrong with a classic!" ,
    },
    {
        id: 2,
        name: "Naruto Ramen",
        restaurant: "Naruto", 
        image: "./images/naruto.jpg",
        rating: 10, 
        comment: "My absolute fave!",
    },
    { 
        id: 3,
        name: "Nirvana Shiromaru",
        restaurant: "Ippudo",
        image: "./images/nirvana.jpg",
        rating: 7,
        comment: "Do but the hype.",
    },
    {
        id: 4,
        name: "Gyukotsu Ramen",
        restaurant: "Za-Ya Ramen",
        image: "./images/gyukotsu.jpg",
        rating: 8,
        comment: "Good to the last drop!",
    },
    {
        id: 5,
        name: "Kojiro Red Ramen",
        restaurant: "Ramen-Ya",
        image: "./images/kojiro.jpg",
        rating: 6,
        comment: "Perfect for a cold night.",
    },
];

//function that displays all ramens in the ramen menu
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

//function that displays the ramen details when an image is clicked
function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `
        <h2>${ramen.name}</h2>
        <h3>${ramen.restaurant}</h3>
        <p>Rating: ${ramen.rating}</p>
        <p>${ramen.comment}</p>
    `;
}

//function that adds a new ramen to the ramen menu
function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newRamen = {
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.image.value,
            rating: parseInt(event.target.rating.value),
            comment: event.target.comment.value,
        };

        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener('click', () => handleClick(newRamen));
        
        const ramenMenu = document.getElementById('ramen-menu');
        ramenMenu.appendChild(img);

        form.reset();
    });
}

//function that calls all other functions to intitialize the page 
function main() {
    displayRamens();
    addSubmitListener();
    handleClick(ramens[0]); 
}

document.addEventListener('DOMContentLoaded', main);
 