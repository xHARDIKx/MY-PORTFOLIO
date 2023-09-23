<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set the recipient email address
    $to = "hardik21673@gmail.com"; // Replace with your own email address
    
    // Set the subject of the email
    $subject = "Contact Form Submission";
    
    // Construct the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";
    
    // Set the headers
    $headers = "From: $email";
    
    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message. I will get back to you soon!";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request!";
}
?>
