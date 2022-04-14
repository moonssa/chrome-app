const background = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

const idx = Math.floor(Math.random() * background.length);
console.log(idx);

// console.log(process.cwd());
const chosenImage = background[idx];

const bgImg = document.createElement("img");
bgImg.src = `./img/${chosenImage}`;
document.body.appendChild(bgImg);
