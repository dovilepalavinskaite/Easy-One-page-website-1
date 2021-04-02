
// Content delay, appears while scrolling:

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
	const triggerBottom = window.innerHeight / 6 * 3;

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top;

		if(boxTop < triggerBottom) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	})
}

// Navbar menu on/of

const header = document.querySelector("header");
const body = document.querySelector("body");
const navBurger = document.querySelectorAll(".nav-burger");
const html = document.querySelector("html");
const menu = document.querySelector(".nav-menu");

navBurger.forEach(item => {
	item.addEventListener('click', function() {
		item.classList.toggle("opened");
		if (item.classList.contains("opened")){
			menu.classList.add("display");
			stopScroll();
		} else {
			menu.classList.remove("display");
			allowScroll();
		}
	});
});


// Freeze scrolling:

function stopScroll() {
	body.style.overflow = 'hidden';
}

// Let scrolling: 

function allowScroll() {
	body.style.overflow = 'visible';
}
