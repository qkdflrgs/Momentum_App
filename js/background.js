const images = ["a.jpeg", "b.jpeg", "c.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.backgroundImage = `url(img/${chosenImage})`;