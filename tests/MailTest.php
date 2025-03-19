<?php

use PHPUnit\Framework\TestCase;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/../sendMail.php';

class SendMailTest extends TestCase {

    public function testEmailSentSuccessfully() {
        // Mock file path
        $mockFilePath = __DIR__ . '/tests/mock_resume.pdf';
        file_put_contents($mockFilePath, 'Test PDF content');

        // Mock successful email
        $response = sendMail('Test User', 'test@example.com', 'This is a test message.', $mockFilePath, 'resume.pdf');

        // Assert that email is sent
        $this->assertEquals("success", $response["status"]);
    }

    public function testEmailFailsWithInvalidSMTP() {
        // Backup original credentials
        $originalUsername = getenv('SMTP_USERNAME');
        $originalPassword = getenv('SMTP_PASSWORD');

        // Set invalid credentials
        putenv('SMTP_USERNAME=invalid@example.com');
        putenv('SMTP_PASSWORD=wrongpassword');

        // Mock file path
        $mockFilePath = __DIR__ . '/mock_resume.pdf';
        file_put_contents($mockFilePath, 'Test PDF content');

        // Mock failed email
        $response = sendMail('Test User', 'test@example.com', 'This is a test message.', $mockFilePath, 'resume.pdf');

        // Restore credentials
        putenv("SMTP_USERNAME=$originalUsername");
        putenv("SMTP_PASSWORD=$originalPassword");

        // Assert failure
        $this->assertEquals("error", $response["status"]);
    }
}
