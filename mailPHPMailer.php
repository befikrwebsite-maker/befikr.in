<?php

// Enable CORS for local development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Correct PHPMailer Path
require __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';


ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt'); // Log errors to a file
ini_set('display_errors', 0); // Disable direct error display

if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $message = $_POST["message"] ?? "";
    $resume = $_FILES["resume"] ?? null;
    $team = $_POST["team"] ?? "";
    $position = $_POST["position"] ?? "";
    $location = $_POST["location"] ?? "";
    $qa_pairs_json = $_POST["qa_pairs"] ?? "";

    if (empty($name) || empty($email) || empty($message) || empty($resume)) {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit;
    }

     // Validate the file upload
     if ($resume['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(["status" => "error", "message" => "File upload error"]);
        exit;
    }

    // Move the file to a safe directory (e.g., 'uploads/')
    $uploadDir = __DIR__ . "/uploads/";
    $filePath = $uploadDir . basename($resume["name"]);

    if (!move_uploaded_file($resume["tmp_name"], $filePath)) {
        echo json_encode(["status" => "error", "message" => "Failed to save file"]);
        exit;
    }

    $qa_pairs = json_decode($qa_pairs_json, true); // true = return associative array

    $questions = [];
    $index = 1;

    // Loop until no more question/answer pair is found
    while (isset($_POST["question_$index"]) && isset($_POST["answer_$index"])) {
        $question = $_POST["question_$index"];
        $answer = $_POST["answer_$index"];
        $questions[] = ["question" => $question, "answer" => $answer];
        $index++;
    }

    $qa_html = "<h4>Additional Questions and Answers:</h4><ul>";
    foreach ($questions as $pair) {
        $qa_html .= "<li><strong>" . htmlspecialchars($pair['question']) . ":</strong> " . htmlspecialchars($pair['answer']) . "</li>";
    }
    $qa_html .= "</ul>";

    //Create a new PHPMailer instance
    $mail = new PHPMailer();

    //Tell PHPMailer to use SMTP
    $mail->isSMTP();

    //Enable SMTP debugging
    //SMTP::DEBUG_OFF = off (for production use)
    //SMTP::DEBUG_CLIENT = client messages
    //SMTP::DEBUG_SERVER = client and server messages
    $mail->SMTPDebug = SMTP::DEBUG_OFF;

    $mail->SMTPDebug = 0; // Disable debugging
    $mail->Debugoutput = function ($str, $level) {}; // Prevent debug output from interfering

    //Set the hostname of the mail server
    $mail->Host = 'smtp.gmail.com';
    //Use `$mail->Host = gethostbyname('smtp.gmail.com');`
    //if your network does not support SMTP over IPv6,
    //though this may cause issues with TLS

    //Set the SMTP port number:
    // - 465 for SMTP with implicit TLS, a.k.a. RFC8314 SMTPS or
    // - 587 for SMTP+STARTTLS
    $mail->Port = 587;

    //Set the encryption mechanism to use:
    // - SMTPS (implicit TLS on port 465) or
    // - STARTTLS (explicit TLS on port 587)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    //Whether to use SMTP authentication
    $mail->SMTPAuth = true;

    //Username to use for SMTP authentication - use full email address for gmail
    $mail->Username = 'befikrdropbox@gmail.com';

    //Password to use for SMTP authentication
    $mail->Password = 'mtlaqdrevpyleszw';

    //Set who the message is to be sent from
    //Note that with gmail you can only use your account address (same as `Username`)
    //or predefined aliases that you have configured within your account.
    //Do not use user-submitted addresses in here
    $mail->setFrom('befikrdropbox@gmail.com', $name);

    //Set an alternative reply-to address
    //This is a good place to put user-submitted addresses
    //$mail->addReplyTo('replyto@example.com', 'First Last');

    //Set who the message is to be sent to
    $mail->addAddress('bebefikr@befikr.in', 'Befikr');
    
    //Set who the CC recipients are
    $mail->addCC('maninder.singh@befikr.in');


    //Set the subject line
    $mail->Subject = 'Job Application';

    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    //$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
    
    $mail->isHTML(true);
    $mail->Subject = "New Job Application: $position - $team ($location)";
    $mail->Body = "
        <h3>New Application Received</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Strategic Business Unit:</strong> $team</p>
        <p><strong>Position Applied For:</strong> $position</p>
        <p><strong>Preferred Location:</strong> $location</p>
        <p><strong>Message:</strong><br>$message</p>
        <p>Resume is attached with this email.</p>
        $qa_html
    ";


    $mail->addAttachment($filePath, $resume["name"]);

    if (!$mail->send()) {
        echo json_encode(["status" => "error", "message" => "Mailer Error: " . $mail->ErrorInfo]);
    } else {
        $conn = new mysqli("localhost", "u485173045_befikr_in", "Befikr@@@@####123123befikr", "u485173045_befikr");

        if ($conn->connect_error) {
            echo json_encode(["status" => "error", "message" => "DB Connection Failed: " . $conn->connect_error]);
            exit;
        }

        $stmt = $conn->prepare("INSERT INTO job_applicants (name, email, message, team, position, location, resume_path) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssss", $name, $email, $message, $team, $position, $location, $filePath);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Application submitted successfully!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "DB Insert Error: " . $stmt->error]);
        }

        $stmt->close();
        $conn->close();
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}