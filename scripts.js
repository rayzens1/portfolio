document.addEventListener("DOMContentLoaded", () => {
	const nav = document.querySelector(".nav");
	const toggle = document.querySelector(".nav-toggle");
	const yearSpan = document.getElementById("year");
	const form = document.getElementById("contact-form");
	const status = document.getElementById("form-status");

	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear().toString();
	}

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("is-open");
		});

		nav.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => {
				nav.classList.remove("is-open");
			});
		});
	}

	if (form && status) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			status.textContent = "Merci pour votre message, je vous réponds vite !";
			form.reset();
		});
	}
});

