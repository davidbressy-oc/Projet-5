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
let currentSlide = 0;
for (let i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", () => {
		if (i === 0) {
			currentSlide--;
		} else {
			currentSlide++;
		}
		console.log(currentSlide);
	});
}




/* Récupérer slides image et slides tagLine ?
récupérer les bullet points ?

dans le html
banner img ===> slides image
banner p ===> slides tagLine

sortir dot selected de la boucle et le faire correspondre au currentSlide ?


Au clic sur la flèche droite : 
on change le bullet point actif au suivant ;
on change l’image ;
on change le texte correspondant à l’image.
Au clic sur la flèche gauche, nous faisons la même chose mais pour les éléments précédents. 
Recommandations : 

Pour changer l’image, pensez à bien construire le chemin de la nouvelle image.
Pour intégrer le texte, utilisez la propriété innerHTML et insérez la tagLine de la slide.
Travaillez avec les index du tableau. 


*/