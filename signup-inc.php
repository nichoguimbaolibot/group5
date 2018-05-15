<?php

if (isset($_POST ['submit'])) {
include_once 'dbh-inc.php';
$first = mysqli_real_escape_string($conn, $_POST ['first']);
$last = mysqli_real_escape_string($conn, $_POST ['last']);
$email = mysqli_real_escape_string($conn, $_POST ['email']);
$uid = mysqli_real_escape_string($conn, $_POST ['uid']);
$pwd = mysqli_real_escape_string($conn, $_POST ['pwd']);
$pos = mysqli_real_escape_string($conn, $_POST ['pos']);
$secpass = mysqli_real_escape_string($conn, $_POST ['secpass']);

//check secret code






//error handlers
//check for empty fields

if (empty($first) || empty($last) || empty($email) || empty($uid) || empty($pwd) || empty($pos) || empty($secpass)) {
	header ("Location: ../signup.php?signup=checkemptyfield");
	exit();
}else{

	//check if input characters are valid
	if(!preg_match("/^[a-zA-Z]*$/", $first) || !preg_match("/^[a-zA-Z]*$/", $last) || !preg_match("/^[a-zA-Z]*$/", $pos)) {
header ("Location: ../signup.php?signup=invalidname");
	exit();

}else{
	//check if email is valid

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		header ("Location: ../signup.php?signup=invalidemail");
	exit();
}else{
	$sql = "SELECT * FROM users WHERE user_uid =  '$uid'";
	$result = mysqli_query($conn, $sql);
	$resultcheck = mysqli_num_rows($result);

	if($resultcheck > 0 ){
		header ("Location: ../signup.php?signup=user_exists");
	exit();
}else{
$passwordlength= strlen($pwd);
	if ($passwordlength < 8){
header ("Location: ../signup.php?signup=password_must_be_8_or_more_characters");



	}else{
	$sqla = "SELECT * FROM users WHERE user_secpass =  '$secpass'";
	$resulta = mysqli_query($conn, $sqla);
	$resultacheck = mysqli_num_rows($resulta);

	if($resultacheck < 1 ){
		header ("Location: ../signup.php?signup=wrong_code");
	exit();

	}else{
		//hashing the password
		$hashedpwd = password_hash($pwd, PASSWORD_DEFAULT);

	

		//insert the user into the database
		$sql = "INSERT INTO users(user_first, user_last, user_email, user_uid, user_pwd, user_pos) VALUES ('$first', '$last', '$email', '$uid', '$hashedpwd', '$pos');";
		mysqli_query($conn, $sql);
		header ("Location: ../signup.php?signup=successful");
	exit();
}
}
}
}
}
}
}else{
	header ("Location: ../signup.php");
	exit();
}