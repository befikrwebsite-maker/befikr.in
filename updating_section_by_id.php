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
if (!isset($_POST['section_id'])) {
    echo json_encode(["error" => "Missing section_id"]);
    exit;
}

$service_id = intval($_POST['service_id']);
$section_id = intval($_POST['section_id']);
$section_name = $_POST['section_name'];
$section_content = $_POST['section_content'];
$design_format = $_POST['design_format'];
$display_order = intval($_POST['display_order']);


$stmt = $conn->prepare("UPDATE service_sections SET section_name = ?, section_content = ?, design_format = ?, display_order = ?  WHERE section_id = ?");
$stmt->bind_param("sssii",$section_name, $section_content, $design_format, $display_order, $section_id);
$stmt->execute();
$result = $stmt->get_result();


echo json_encode($service, JSON_PRETTY_PRINT);
