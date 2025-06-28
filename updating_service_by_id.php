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
$service_name = $_POST['service_name'];
$service_description = $_POST['service_description'];
$service_category = $_POST['service_category'];
$service_link = $_POST['service_link'];
$service_parent_id = intval($_POST['service_parent_id']);


$stmt = $conn->prepare("UPDATE services SET service_name = ?, service_description = ?, service_category = ?, service_link = ?, service_parent_id = ?  WHERE service_id = ?");
$stmt->bind_param("ssssii",$service_name, $service_description, $service_category, $service_link, $service_parent_id, $service_id);
$stmt->execute();
$result = $stmt->get_result();


echo json_encode($service, JSON_PRETTY_PRINT);


