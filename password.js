function password() {
	const password = document.getElementById("password").value;
	const passwordConfirm = document.getElementById("password-confirm").value;
	const submit = document.getElementById("submit-button");
	const passwordValidation = document.getElementById("password-validation");

	if (password != passwordConfirm) {
		submit.disabled = true;
		submit.classList.add("disabled");
		passwordValidation.textContent = "❌ Password does not match";
	} else {
		submit.disabled = false;
		submit.classList.remove("disabled");
		passwordValidation.textContent = "✅ Passwords match";
	}
}

const passwordConfirm = document.getElementById("password-confirm");
passwordConfirm.addEventListener("keyup", password);
