<?php
$_SESSION["AppSettings"] = new ApplicationSettings();


//if ($_SESSION["App"] == 'intrax'){
		
	$Conec1 = mysql_connect(
		$_SESSION["AppSettings"]->DATABASE_HOST, 
		$_SESSION["AppSettings"]->DATABASE_USERNAME, 
		$_SESSION["AppSettings"]->DATABASE_PASSWORD);
		echo mysql_error();
	
	mysql_select_db($_SESSION["AppSettings"]->DATABASE_NAME,$Conec1) or die(DisplaySQLErrorMessage("Could not select database", mysql_error()));
	
	ini_set('mysql.connect_timeout', 1);

//}else{
	//header("location: ./login.php");
//}
?>
