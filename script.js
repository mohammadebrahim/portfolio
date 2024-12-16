// Form submission handler
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Your message has been sent!');
//     this.reset();  // Reset the form fields
// });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Prepare the data to send
    var formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the data using AJAX (POST request to Google Apps Script Web App URL)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbxs9z6gPUwU6Wiy9M-O6W0NDTuZn9b5Ka3Sd5FZ810n3ZPlsZ_7pEnDEQkJB1Qw3Nfvjg/exec", true); // Replace with your Web App URL
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    // Format the data to be sent in the body of the POST request
    var data = "name=" + encodeURIComponent(formData.name) +
               "&email=" + encodeURIComponent(formData.email) +
               "&message=" + encodeURIComponent(formData.message);

    // Handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // On success, display success message and reset form
            document.getElementById('success-message').style.display = "block";
            document.getElementById('contact-form').reset(); // Reset the form
            setTimeout(function() {
                document.getElementById('success-message').style.display = "none";
            }, 5000);
        } else if (xhr.readyState == 4 && xhr.status != 200) {
            // On failure, display error message
            document.getElementById('error-message').style.display = "block";
            setTimeout(function() {
                document.getElementById('error-message').style.display = "none";
            }, 5000);
        }
    };

    // Send the POST request
    xhr.send(data);
});

// Toggle Navbar Links on Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
