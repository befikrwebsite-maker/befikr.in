<?php
// Enable CORS for local development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-Master/src/SMTP.php';
require 'PHPMailer-Master/src/PHPMailer.php';
require 'PHPMailer-Master/src/Exception.php';

require 'vendor/autoload.php';

ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt'); // Log errors to a file
ini_set('display_errors', 0); // Disable direct error display

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $message = $_POST["message"] ?? "";
    $serviceTitle = $_POST["service"] ?? "";

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit;
    }

    //Create a new PHPMailer instance
    $mail = new PHPMailer();

    //Tell PHPMailer to use SMTP
    $mail->isSMTP();

    //Enable SMTP debugging
    //SMTP::DEBUG_OFF = off (for production use)
    //SMTP::DEBUG_CLIENT = client messages
    //SMTP::DEBUG_SERVER = client and server messages
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;

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
    $mail->Username = 'divyam.study.work@gmail.com';

    //Password to use for SMTP authentication
    $mail->Password = 'reqwvklemfpqsuyv';

    //Set who the message is to be sent from
    //Note that with gmail you can only use your account address (same as `Username`)
    //or predefined aliases that you have configured within your account.
    //Do not use user-submitted addresses in here
    $mail->setFrom('animeshsrivastava2003@gmail.com', 'First Last');

    //Set an alternative reply-to address
    //This is a good place to put user-submitted addresses
    //$mail->addReplyTo('replyto@example.com', 'First Last');

    //Set who the message is to be sent to
    $mail->addAddress('divyamsharma511@gmail.com', 'John Doe');

    //Set the subject line
    $mail->Subject = 'PHPMailer GMail SMTP test';

    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    //$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
    
    $mail->isHTML(false);
    
    //Replace the plain text body with one created manually
    $mail->Body = "This is a message from $name with email $email with its message as $message for $serviceTitle";

    //Attach an pdf file
    //$mail->addAttachment('Output.pdf');

    //send the message, check for errors
    if (!$mail->send()) {
        echo json_encode(["status" => "error","message" => 'Mailer Error: ' . $mail->ErrorInfo]);
    } else {
        echo json_encode(["status" => "success", "message" => "Email successfully sent!"]);
        //Section 2: IMAP
        //Uncomment these to save your message in the 'Sent Mail' folder.
        #if (save_mail($mail)) {
        #    echo "Message saved!";
        #}
    }

} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}

?>