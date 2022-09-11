const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.body.style.backgroundImage = `url('img/${chosenImage}')`;

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.id = "background-image";

document.body.appendChild(bgImage);
