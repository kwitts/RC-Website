<?php
    $email = $_POST['email'];
	$to = 'kristibeckart@gmail.com'; 
	$subject = 'RC Info Request';
	
	$body = "New request for ReferralClix info or a demo from $email";
	
	if ($_POST['submit']) {
		if ($name != '' && $email != '') {
			if (mail ($to, $subject, $body, $email)) { 
				echo '<p>Your message has been sent!</p>';
			} else { 
				echo '<p>Something went wrong, go back and try again!</p>'; 
			}
		} else {
			echo '<p>Please fill in your email!</p>';
		}
	}	
?> 