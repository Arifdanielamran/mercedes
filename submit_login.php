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

// Get form data
$user = $_POST['username'];
$pass = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT password FROM user WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashed_password);
    $stmt->fetch();

    if (password_verify($pass, $hashed_password)) {
        $_SESSION['username'] = $user;
        // Redirect to a protected page
        header("Location: home.html");
        exit();
    } else {
        echo "Invalid password.";
    }
} else {
    echo "No user found with that username.";
}

$stmt->close();
$conn->close();
?>