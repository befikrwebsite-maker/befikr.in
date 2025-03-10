<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Database connection details
$servername = "localhost"; // Try localhost first
$username = "u485173045_befikr_in";
$password = "Befikr@@@@####123123befikr";
$dbname = "u485173045_befikr";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$sql = "SELECT current_value FROM counter WHERE id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(["number" => $row["current_value"]]);
} else {
    echo json_encode(["number" => 0]);
}

$conn->close();
?>
