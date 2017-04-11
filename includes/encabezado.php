<?php 
	
	header("Cache-control: private");

	include('./includes/Settings.php');	
	
	session_start();

	//if($_SESSION["UsuarioI"]<1){
	//	header('Location: ../login.php');
	//}else{		
		include('./includes/mySqonect.php');	
		include_once('./includes/cadenas.php');				
		include_once('./includes/fechas.php');		
	//}
	
	$CODELIM='[x_x_x]';
?>
