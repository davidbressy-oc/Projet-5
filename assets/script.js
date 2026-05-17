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
let dots = document.querySelectorAll(".dot");
let currentSlide = 0;

for (let i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", () => {
		if (i === 0) {
			if (currentSlide === 0) {
				currentSlide = slides.length - 1;
			} else {
				currentSlide--;
			}
		} else {
			if (currentSlide === slides.length - 1) {
				currentSlide = 0;
			} else {
				currentSlide++;
			}
		}
        document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[currentSlide].image}`;
        document.querySelector("#banner p").innerHTML = slides[currentSlide].tagLine;

        for (let bullets = 0; bullets < dots.length; bullets++) {
            dots[bullets].classList.remove('dot_selected')
        }
        dots[currentSlide].classList.add('dot_selected')
	});
}
