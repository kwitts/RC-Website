<?php
    $to = $_POST["email"];
    $subject = "Test mail";
    $from = "address@someisp.com";
    $headers = "From:" . $from;
    mail($to, $headers);
?> 