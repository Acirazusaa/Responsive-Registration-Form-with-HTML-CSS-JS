const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Access the form fields
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked').value; // Corrected syntax
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contactNumber").value;

    // Display a message upon successful form submission
    alert("Registration Successful!");
    alert(`Welcome, ${name}! You have registered for the course: ${course} in Year ${year}.`);
});
