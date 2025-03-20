<?php

// Enable CORS for local development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer
require __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer-master/src/SMTP.php';
require __DIR__ . '/PHPMailer-master/src/Exception.php';

ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt'); // Log errors to a file
ini_set('display_errors', 0); // Disable direct error display

/**
 * Function to handle job application email
 */
function handleJobApplication($postData, $fileData) {
    $name = $postData["name"] ?? "";
    $email = $postData["email"] ?? "";
    $message = $postData["message"] ?? "";
    $resume = $fileData["resume"] ?? null;

    if (empty($name) || empty($email) || empty($message) || empty($resume)) {
        return ["status" => "error", "message" => "All fields are required"];
    }

    // Validate the file upload
    if ($resume['error'] !== UPLOAD_ERR_OK) {
        return ["status" => "error", "message" => "File upload error"];
    }

    // Move the file to a safe directory
    $uploadDir = __DIR__ . "/uploads/";
    $filePath = $uploadDir . basename($resume["name"]);

    if (!move_uploaded_file($resume["tmp_name"], $filePath)) {
        return ["status" => "error", "message" => "Failed to save file"];
    }

    return sendMail($name, $email, $message, $filePath, $resume["name"]);
}

/**
 * Function to send an email
 */
function sendMail($fromName, $fromEmail, $message, $filePath, $fileName) {
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPDebug = 0; // No debug output
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPAuth = true;

    // Use environment variables for security
    $mail->Username = getenv('SMTP_USERNAME') ?: 'divyam.study.work@gmail.com';
    $mail->Password = getenv('SMTP_PASSWORD') ?: 'reqwvklemfpqsuyv';

    $mail->setFrom($mail->Username, $fromName);
    $mail->addAddress('bebefikr@befikr.in', 'Befikr');

    $mail->Subject = 'Job Application';
    $mail->isHTML(true);
    $mail->Body = "
        <html>
        <body>
            <p>Dear Hiring Manager,</p>
            <p>My name is <strong>$fromName</strong>, and I am reaching out regarding my application.</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
            <p>Best regards,</p>
            <p><strong>$fromName</strong></p>
            <p>Email: <strong>$fromEmail</strong></p>
        </body>
        </html>
    ";

    $mail->addAttachment($filePath, $fileName);

    if (!$mail->send()) {
        return ["status" => "error", "message" => 'Mailer Error: ' . $mail->ErrorInfo];
    }

    return ["status" => "success", "message" => "Email sent successfully!"];
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = handleJobApplication($_POST, $_FILES);
    echo json_encode($response);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
