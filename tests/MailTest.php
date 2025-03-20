<?php

require_once 'vendor/autoload.php';

use PHPUnit\Framework\TestCase;

class SendMailTest extends TestCase {

    public function testEmailSentSuccessfully() {
        // Create a mock file
        $mockFilePath = __DIR__ . '/test.pdf';
        file_put_contents($mockFilePath, 'Test PDF content');

        $postData = [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'message' => 'This is a test message.'
        ];

        $fileData = [
            'resume' => new CURLFile($mockFilePath, 'application/pdf', 'test.pdf')
        ];

        // Send a POST request to the locally running PHP server
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://localhost:8000/mail.php");
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, array_merge($postData, $fileData));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        curl_close($ch);

        $decodedResponse = json_decode($response, true);
        $this->assertEquals("success", $decodedResponse["status"]);
    }
}
