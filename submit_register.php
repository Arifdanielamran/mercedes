<?php
session_start(); // Start session

// Database connection 
$servername = "fdb1028.awardspace.net";
$port = "3306";
$username = "4555670_mercedesdb";
$dbname = "4555670_mercedesdb";
$password = "Mercedes633pp24";
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection 
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

$user = $_POST['username'];
$pass = $_POST['password'];
$email = $_POST['email'];
$dept = $_POST['department'];

// Hash the password 
$hashed_password = password_hash($pass, PASSWORD_DEFAULT);

// Prepare and bind 
$stmt = $conn->prepare("INSERT INTO user (username, password, email, department) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $user, $hashed_password, $email, $dept);

// Execute the statement 
if ($stmt->execute()) {
    // Redirect to login page
    header("Location: index.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>