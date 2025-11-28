<?php
$host = "localhost";
$dbname = "users";
$user = "root";     // change selon ta config
$pass = "root";         // change aussi si besoin

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch (Exception $e) {
    die("Erreur : " . $e->getMessage());
}
?>
