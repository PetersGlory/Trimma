<?php 
$host = "localhost";
$user = 'root';
$passW = "Glory2200";
$db = "Trimma";

#Connecting to the Server and to the Database also
$connection = new mysqli($host, $user, $passW, $db);

#Checking if connection is TRUE or FALSE,
if ($connection->connect_error) {
	#Reconnecting
	$connect = new mysqli($host, $user, $passW);
	if ($connect->connect_error) {
		echo "Unable to connect to the database" . $connect->error;
	}else{
		// Create database
		$sql = "CREATE DATABASE Trimma";
		if ($connect->query($sql) === TRUE) {
			// Creating the first Table for the registration
			$signup = "CREATE TABLE userEmployee(
						id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
						name VARCHAR(500) NOT NULL,
						mail VARCHAR(200) NOT NULL,
						address VARCHAR(300) NOT NULL,
						password VARCHAR(50) NOT NULL,
						reg_date TIMESTAMP,
					)";
					// Checking if connection is TRUE
			if ($connect->query($signup) === TRUE) {
				echo "Table UserEmployee has been created";
				// Creating the second table for the registration
				$sign = "CREATE TABLE userEmployer(
						id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
						name VARCHAR(500) NOT NULL,
						mail VARCHAR(200) NOT NULL,
						age VARCHAR(100) NOT NULL,
						Company VARCHAR(200) NOT NULL,
						work VARCHAR(200) NOT NULL,
						address VARCHAR(300) NOT NULL,
						password VARCHAR(50) NOT NULL,
						reg_date TIMESTAMP,						
						)";
						//Checking if Connection is True
				if ($connect->query($sign) === TRUE) {
					echo "done and ready to roll..";
				}else{
					echo "unable to create";
				}
			}else{
				echo "Table not Created !!!";
			}
		}
	}
}
 ?>
