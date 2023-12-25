const toggleUi = document.querySelectorAll(".toggle-ui");
const dropdown = document.querySelectorAll(".dropdown");

const clicked = -1;
dropdown.forEach((nav) => {
	nav.addEventListener("click", (e) => {
		console.log(nav.children.item(1).children);
		nav.children[0].children[0].classList.toggle("toggle-ui");
		nav.children[0].children[1].classList.toggle("toggle-ui");
		nav.children[1].classList.toggle("toggle-ui");
	});
});
