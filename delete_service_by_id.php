<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
require_once "db_conn.php";

if (!isset($_POST['service_id'])) {
    echo json_encode(["error" => "Missing service_id"]);
    exit;
}

$service_id = intval($_POST['service_id']);

$stmt = $conn->prepare("DELETE FROM services WHERE service_id = ?");
$stmt->bind_param("i", $service_id);
$stmt->execute();
$result = $stmt->get_result();


echo json_encode($service, JSON_PRETTY_PRINT);
