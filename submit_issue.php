<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $model = $_POST['model'];
    $variant = $_POST['variant'];
    $comm_no = $_POST['comm_no'];
    $fault_prior = $_POST['fault_prior'];
    $fault_type = $_POST['fault_type'];
    $fault_desc = $_POST['fault_desc'];
    $cl = $_POST['cl'];
    $person_in_charge = $_POST['person_in_charge'];
    $hyperlink = $_POST['hyperlink'];

    // Here you can add code to save the data to a database or send an email
    // For now, let's just display the data
    echo "Model: $model<br>";
    echo "Variant: $variant<br>";
    echo "Comm No: $comm_no<br>";
    echo "Fault Priority: $fault_prior<br>";
    echo "Fault Type: $fault_type<br>";
    echo "Fault Description: $fault_desc<br>";
    echo "CL: $cl<br>";
    echo "Person in Charge: $person_in_charge<br>";
    echo "Hyperlink: $hyperlink<br>";
}

?>