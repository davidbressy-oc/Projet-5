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

let dotscontainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
		let dotspan = document.createElement("span");
		dotspan.classList.add("dot");
	if (i === 0) {
		dotspan.classList.add("dot_selected");
	} 
	
dotscontainer.appendChild(dotspan);
}





let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", (event) => {
		if (i === 0) {
			console.log("Flèche Gauche");
		} else {
			console.log("Flèche Droite");
		}
	});

}


/*			<span class="dot dot_selected" data-slide="1"></span>
			<span class="dot" data-slide="2"></span>
			<span class="dot" data-slide="3"></span>
			<span class="dot" data-slide="4"></span> */