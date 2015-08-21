<?php
	if(isset($_POST['email'])) {
		
		date_default_timezone_set('America/Los_Angeles');
		
		$email      = $_POST['email'];
		$recipients = "rc-contact@hotbsoftware.com";
		$subject    = "ReferralClix.com contact us request";
		$now        = date("l, F jS Y g:i A T");
		$headers    = 'From: noreply@referralclix.com' . "\r\n" . 'Reply-To: mark.witte@referralclix.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
		
		
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			die("<h1>Error: Bad Email</h1><br />Sorry there seems to be a problem with your email. Please go back and try again.");
		}
		
		$body = "ReferralClix.com contact us request from " . $email . " on " . $now . "";
		
		mail($recipients, $subject, $body, $headers);
	}
?>
 <!DOCTYPE html>
<html>
<head>
<title>Sending Email...</title>
</head>
<body onload="location.replace('thankyou.html');">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</body>
</html> 