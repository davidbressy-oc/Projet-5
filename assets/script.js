/* Slide Tableau*/
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Bullet points */
let dotscontainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	let dotspan = document.createElement("span");
	dotspan.classList.add("dot");
	if (i === 0) {
		dotspan.classList.add("dot_selected");
	}
	dotscontainer.appendChild(dotspan);
}

/* Flèches Slider */
let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", (event) => {
		if (i === 0) {
			console.log("currentSlideGauche");
		} else {
			console.log("currentSlideDroite");
		}
	});
}

/* Slide clicks*/

let currentSlide = 0;