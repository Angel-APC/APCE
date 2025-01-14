<?php
// contacto.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "cadereyta@apce.mx";
    $subject = "Nuevo mensaje de contacto";
    
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";
    
    $headers = "From: $email";
    
    mail($to, $subject, $email_content, $headers);
    
    echo json_encode(["success" => true]);
    exit;
}