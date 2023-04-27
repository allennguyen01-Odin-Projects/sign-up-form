const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const submit = document.getElementById('submit-button');
const passwordValidation = document.getElementById('password-validation');

function confirmPassword() {

  if (password.value !== passwordConfirm.value) {
    submit.disabled = true;
    submit.classList.add('disabled');
    passwordValidation.textContent = '❌ Passwords do not match';
  } else {
    submit.disabled = false;
    submit.classList.remove('disabled');
    passwordValidation.textContent = '✅ Passwords match';
  }
}

passwordConfirm.addEventListener('keyup', confirmPassword);
password.addEventListener('keyup', confirmPassword);
