let container = document.getElementById('container');

toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
};

setTimeout(() => {
    container.classList.add('sign-in');
}, 200);

function signIn() {
    const email = document.getElementById("username")?.value || '';
    const password = document.getElementById("password")?.value || '';

    const registeredUser = localStorage.getItem('registeredUser');         // Retrieve signup details from localStorage
    if (!registeredUser) {
        alert("You need to sign up first.");
        return;
    }
    const registeredUserData = JSON.parse(registeredUser);                 // Parse the registeredUser string to an object

    if (email === registeredUserData.email && password === registeredUserData.password) {
        window.location.href = 'MainPage/main.html';                        // Check if entered email and password match the stored signup details
    } else {
        alert("Invalid email or password.");
    }
}

function signup() {
    const email = document.getElementById("email")?.value || '';
    const password = document.getElementById("spassword")?.value || '';
    const name = document.getElementById("name")?.value || '';
    const cpassword = document.getElementById("cpassword")?.value || '';

    if (password !== cpassword) {
        alert("Password and confirm password do not match");                 // Check if the password and confirm password match
        return;
    }

    const userData = {
        email,
        password,
        name
    };
    localStorage.setItem('registeredUser', JSON.stringify(userData));       // Store user data in localStorage

    // Display success message
    alert("Registration successful. You can now sign in.");

    // Reset the signup form
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("spassword").value = '';
    document.getElementById("cpassword").value = '';

    // Toggle to the sign-in form
    toggle();
}
