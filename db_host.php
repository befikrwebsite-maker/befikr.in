<?php
$servername = "localhost"; // Try localhost first
$username = "u485173045_befikr_in";
$password = "Befikr@@@@####123123befikr";
$dbname = "u485173045_befikr";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully to: " . $servername;
}

$conn->close();
?>
