
// Content delay, appears while scrolling:

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
	const triggerBottom = window.innerHeight / 6 * 3;

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	});
}

// Navbar menu on/of

const body = document.querySelector("body");
const navBurger = document.querySelector(".nav-burger");
const menu = document.querySelector(".nav-menu");
const nav = document.querySelector("nav");


navBurger.addEventListener('click', function() {
	navBurger.classList.toggle("opened");
	if (navBurger.classList.contains("opened")){
		menu.classList.add("display");
		nav.style.backgroundColor="rgba(0, 0, 0, 0.8)";
		stopScroll();
	} else {
		menu.classList.remove("display");
		nav.style.backgroundColor="var(--dark-green)";
		allowScroll();
	}
});



// Freeze scrolling:

function stopScroll() {
	body.style.overflow = 'hidden';
}

// Let scrolling: 

function allowScroll() {
	body.style.overflow = 'visible';
}

