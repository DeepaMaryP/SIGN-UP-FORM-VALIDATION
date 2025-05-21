const form = document.querySelector('.needs-validation');
const password = document.getElementById('password');

document.getElementById('submit').addEventListener("click", (event) => {
    const confirmPassword =
        document.getElementById('confirmpassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match');
    }
    else {
        confirmPassword.setCustomValidity('');
    }
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
})

document.getElementById('showpassword').addEventListener('change', () => {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})