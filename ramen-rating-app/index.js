document.addEventListener('DOMContentLoaded', () => {
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517798/preview" },
        { id: 4, name: "Tatty Ramen", restaurant: "Tatty's Place", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 3, comment: "Interesting flavor!" }
    ];

    function displayRamens() {
        const ramenMenu = document.getElementById('ramen-menu');
        ramenMenu.innerHTML = ''; // Clear existing images
        ramens.forEach(ramen => {
            const img = document.createElement('img');
            img.src = ramen.image;
            img.alt = ramen.name;
            img.width = 50;
            img.height = 50;
            img.addEventListener('click', () => handleClick(ramen));
            ramenMenu.appendChild(img);
        });
    }

    function handleClick(ramen) {
        document.getElementById('ramen-name').textContent = ramen.name;
        document.getElementById('ramen-restaurant').textContent = ramen.restaurant;
        document.getElementById('ramen-image').src = ramen.image;
        document.getElementById('ramen-rating').textContent = ramen.rating;
        document.getElementById('ramen-comment').textContent = ramen.comment;
    }

    function addSubmitListener() {
        const form = document.getElementById('new-ramen');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const newRamen = {
                name: event.target['new-name'].value,
                restaurant: event.target['new-restaurant'].value,
                image: event.target['new-image'].value,
                rating: event.target['new-rating'].value,
                comment: event.target['new-comment'].value
            };
            ramens.push(newRamen);
            displayRamens();
            form.reset();
        });
    }

    function main() {
        displayRamens();
        addSubmitListener();
    }

    main();
});
