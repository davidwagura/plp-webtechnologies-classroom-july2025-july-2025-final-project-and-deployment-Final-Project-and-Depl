document.addEventListener("DOMContentLoaded", () => {
	const navLinks = document.querySelectorAll("nav a");
	const currentPage = window.location.pathname.split("/").pop();

	navLinks.forEach(link => {
		if (link.getAttribute("href") === currentPage) {
			link.classList.add("active");
		}
	});

	const contactForm = document.getElementById("contactForm");
	const formResponse = document.getElementById("formResponse");

	if (contactForm) {
		contactForm.addEventListener("submit", (e) => {
			e.preventDefault();

			const name = document.getElementById("name").value.trim();
			const email = document.getElementById("email").value.trim();
			const message = document.getElementById("message").value.trim();

			if (name && email && message) {
				formResponse.textContent = `✅ Thank you, ${name}! We have received your message and will get back to you at ${email}.`;
				formResponse.style.color = "green";
				contactForm.reset();
			} else {
				formResponse.textContent = "⚠️ Please fill in all fields before submitting.";
				formResponse.style.color = "red";
			}
		});
	}

	const searchInput = document.getElementById("diseaseSearch");
	if (searchInput) {
		searchInput.addEventListener("input", () => {
			const filter = searchInput.value.toLowerCase();
			const diseaseLists = document.querySelectorAll(".disease-list li");

			diseaseLists.forEach(item => {
				const text = item.textContent.toLowerCase();
				item.style.display = text.includes(filter) ? "" : "none";
			});
		});
	}
});
