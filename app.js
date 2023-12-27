const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

const items = document.querySelectorAll(".item");

const iconOpen = document.querySelector(".icon-open-menu");
const iconClose = document.querySelector(".icon-close-menu");

function toggleMenu() {
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
		iconOpen.classList.remove("d-none");
		iconClose.classList.add("d-none");
	} else {
		menu.classList.add("active");
		iconOpen.classList.add("d-none");
		iconClose.classList.remove("d-none");
	}
}

toggle.addEventListener("click", toggleMenu, false);
