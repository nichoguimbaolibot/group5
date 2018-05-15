<?php
session_start();
if(isset($_POST['submit'])) {
	$file = $_FILES['file'];

	$fileName = $_FILES['file'] ['name'];
	$fileTmpName = $_FILES['file'] ['tmp_name'];
	$fileSize = $_FILES['file'] ['size'];
	$fileError = $_FILES['file'] ['error'];
	$fileType = $_FILES['file'] ['type'];

	$fileExt = explode ('.', $fileName);
	$fileActualExt = strtolower(end($fileExt));
	$allowed = array('ai','bmp', 'gif', 'ico', 'jpeg', 'jpg', 'png', 'psd', 'svg', 'tif', 'tiff', 'avi', 'flv', 'm4v', 'mkv', 'mov', 'mp4', 'mpg', 'mpeg', 'rm', 'swf', 'vob', 'wmv');
	if(in_array($fileActualExt, $allowed)) {
		if($fileError === 0){
			if($fileSize < 10000000) {
				$fileDestination = '' . $fileName;
				move_uploaded_file($fileTmpName, $fileDestination);
				echo "Upload Successful";
				if (isset($_SESSION['u_id'])) {
		echo'<form action="upload.php" method="POST">
		<button type="submit" name="submit" class="btn-primary">Back</button>
		</form>';
}

			}else{
				echo "Your file is too big!";
						if (isset($_SESSION['u_id'])) {
		echo'<form action="upload.php" method="POST">
		<button type="submit" name="submit" class="btn-primary">Back</button>
		</form>';
}
			}
		}else{
			echo "There was an error uploading your file.";
					if (isset($_SESSION['u_id'])) {
		echo'<form action="upload.php" method="POST">
		<button type="submit" name="submit" class="btn-primary">Back</button>
		</form>';
}
		}
	}else{
		echo "You cannot upload file of this type.";
				if (isset($_SESSION['u_id'])) {
		echo'<form action="upload.php" method="POST">
		<button type="submit" name="submit" class="btn-primary">Back</button>
		</form>';
}
	}
}