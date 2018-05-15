<?php

session_start();
if(isset($_POST['submit'])) {
include 'dbh-inc.php';
$secpass=mysqli_real_escape_string($conn, $_POST['secpass']);

//error handlers
//check if inputs are empty

if(empty($secpass)) {
	header("Location: ../entrance.php?entrance=empty");
	exit();
}else{
	$sql = "SELECT * FROM users WHERE user_secpass = '$secpass' ";
	$result = mysqli_query($conn, $sql);
	$resultCheck = mysqli_num_rows($result);
	if ($resultCheck < 1) {
		header("Location: ../entrance.php?entrance=wrong_code");
	exit();
	}elseif($resultCheck == true){
//login the user here
				$_SESSION ['u_secpass'] = $row['user_secpass'];
			
				header("Location: ../signup.php?entrance=successful");
	exit();		
			}
		}
	

}else{
		header("Location: ../entrance.php?entrance=error");
	exit();
}