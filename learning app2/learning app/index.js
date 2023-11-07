// Get the About Us link and the About Us container
const aboutUsLink = document.querySelector('a[href="#aboutus"]');
const aboutUsContainer = document.getElementById('aboutus');

// Function to smoothly scroll to the About Us section
function scrollToAboutUs() {
    window.scrollTo({
        top: aboutUsContainer.offsetTop,
        behavior: 'smooth'
    });
}

// Add click event listener to the About Us link
aboutUsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    scrollToAboutUs(); // Scroll to the About Us section
});

document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input from the signup form
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Store user data in localStorage
        const userData = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to login page after successful signup
        window.location.href = 'login.html';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from localStorage
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            // Check if login details match
            if (email === userData.email && password === userData.password) {
                // Redirect to levels.html after successful login
                window.location.href = 'levels.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        } else {
            alert('No user found. Please sign up.');
        }
    });

    // Get the "Start" button and add click event listener
    var startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", function() {
        // Redirect to the login page
        window.location.href = "login.html";
    });

    // Get the "Logged In" button and add click event listener
    var loggedInButton = document.querySelector(".logged-in-button");
    loggedInButton.addEventListener("click", function() {
        // Open the language page (replace "language.html" with the actual URL)
        window.location.href = "language.html";
    });

    function redirectToLevels(language) {
        // Redirect to the next page with language parameter in the URL
        window.location.href = `levels.html?language=${language}`;
    }
});
document.getElementById("helpDeskLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default behavior of the link click
    
    // Simulate an asynchronous request to fetch content for the Help Desk
    // For example, you can fetch content from a server using AJAX or fetch API
    // For demonstration purposes, I'll directly set the content here
    
    // Suppose you have content for the help desk in different languages
    const userLanguage = "en"; // You can dynamically determine user's language
    let helpDeskContent = "";
    
    // Example content for different languages
    if (userLanguage === "en") {
        helpDeskContent = "Welcome to our Help Desk! If you have any questions or issues related to the language learning app, please feel free to reach out to us.";
    } else if (userLanguage === "es") {
        helpDeskContent = "¡Bienvenido a nuestro Centro de Ayuda! Si tiene alguna pregunta o problema relacionado con la aplicación para aprender idiomas, no dude en comunicarse con nosotros.";
    }
    
    // Display the content in the help desk section
    document.getElementById("helpDeskContent").textContent = helpDeskContent;
});


