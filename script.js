
// This is the script for the home page
 




document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-buttons a');

    links.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
       


/*
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "your_username", // Replace with your Elastic Email username
        Password : "your_password", // Replace with your Elastic Email password
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}
// */
// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "vilehardik@gmail.com", // Replace with your Elastic Email username
//         Password : "6FF4EB486DAF50F2EE96BDBA165435DC5CD4", // Replace with your Elastic Email password
//         To : 'vilehardik@gmail.com',
//         From : Document.getElementById("email").value, 
//         Subject : "This is the subject",
//         Body : Document.getElementById("message").value + "From: " + Document.getElementById("name").value + "Email: " + Document.getElementById("email").value, 
//     }).then(
//         message => alert("mail sent successfully") 
//     );
// } 

