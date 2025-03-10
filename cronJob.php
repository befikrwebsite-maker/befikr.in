<?php
$servername = "localhost";
$username = "u485173045_befikr_in";
$password = "Befikr@@@@####123123befikr";
$dbname = "u485173045_befikr";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Update the number every hour
$sql = "UPDATE counter SET current_value = current_value + 1 WHERE id = 1";

if ($conn->query($sql) === TRUE) {
    echo "Number updated successfully";
} else {
    echo "Error updating number: " . $conn->error;
}

$conn->close();
?>
