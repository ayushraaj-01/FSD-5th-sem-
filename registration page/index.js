const form = document.getElementById('registrationForm');
const registrationsContainer = document.getElementById('registrations');

const registrations = [];

function renderRegistrations() {
	if (registrations.length === 0) {
		registrationsContainer.innerHTML = '<p class="empty-state">No registrations yet.</p>';
		return;
	}

	registrationsContainer.innerHTML = registrations
		.map((registration, index) => `
			<article class="registration-item">
				<h3>Registration ${index + 1}</h3>
				<p><strong>Name:</strong> ${registration.name}</p>
				<p><strong>Email:</strong> ${registration.email}</p>
				<p><strong>Password:</strong> ${registration.password}</p>
			</article>
		`)
		.join('');
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const password = document.getElementById('password').value.trim();

	registrations.push({ name, email, password });
	form.reset();
	renderRegistrations();
});

renderRegistrations();
