<?php
/**
* ed_vinculos_ajax.php
*
* edita la base de datos actualizando las relaciones de etiquetado
* 
* @package    	TReCC(tm) redsustentable.
* @subpackage 	
* @author     	TReCC SA
* @author     	<mario@trecc.com.ar> <trecc@trecc.com.ar>
* @author    	www.trecc.com.ar  
* @copyright	2015 TReCC SA
* @license    	https://www.gnu.org/licenses/agpl-3.0.html  GNU AFFERO GENERAL PUBLIC LICENSE
* Este archivo es parte de TReCC(tm) paneldecontrol y de sus proyectos hermanos: baseobra(tm) y TReCC(tm) intraTReCC.
* Este archivo es software libre: tu puedes redistriburlo 
* y/o modificarlo bajo los t�rminos de la "AGNU Affero AGeneral Public License" 
* publicada por la Free Software Foundation, version 3
* 
* Este archivo es distribuido por si mismo y dentro de sus proyectos 
* con el objetivo de ser �til, eficiente, predecible y transparente
* pero SIN NIGUNA GARANT�A; sin siquiera la garant�a impl�cita de
* CAPACIDAD DE MERCANTILIZACI�N o utilidad para un prop�sito particular.
* Consulte la "GNU AFFERO GENERAL PUBLIC LICENSE" para m�s detalles.
* 
* Si usted no cuenta con una copia de dicha licencia puede encontrarla aqu�: <https://www.gnu.org/licenses/agpl-3.0.html>.
*/

include ('./includes/encabezado.php');	
$Base=$_SESSION['AppSettings']->DATABASE_NAME;

$Log=array();
function terminar($Log){
	echo json_encode($Log);
	exit;
}


$r=array("tp","t1","l1","t2","l2","accion");

foreach($r as $var){
	if(!isset($_POST[$var])){	
	$Log['res']='err';
	$Log['tx'][]='No fue enviada la variable '.$var;
	terminar($Log);
	}
}


$query="SHOW COLUMNS FROM ".$_POST['tp'];
$cons=mysql_query($query,$Conec1);
while($row=mysql_fetch_assoc($cons)){
	$e=explode("_",$row['Field']);
	$link=$e[1];
	
	if($link==$_POST['t1']){
		if(isset($C1)){
			$Log['res']='err';
			$Log['tx'][]="Dos columnas en la tabla ".$_POST['tp']." parecen responder al v�nculo requerido: ".$C1." y ".$row['Field'];
			terminar($Log);
		}
		$C1=$row['Field'];
	}
	
	if($link==$_POST['t2']){
		if(isset($C2)){
			$Log['res']='err';
			$Log['tx'][]="Dos columnas en la tabla ".$_POST['tp']." parecen responder al v�nculo requerido: ".$C2." y ".$row['Field'];
			terminar($Log);
		}
		$C2=$row['Field'];
	}
	
}


$query="SELECT * FROM ".$_POST['tp']." WHERE $C1 = '".$_POST['l1']." AND $C2 = '".$_POST['l2']."'";
$cons=mysql_query($query,$Conec1);


while($row=mysql_fetch_assoc($cons)){
	
}

if($_POST['accion']=='vincular'){
	if(mysql_num_rows($cons)>0){
		$Log['res']='exito';
		$Log['tx'][]="El v�nculo ya se encontraba erstablecido";
		terminar($Log);
	}else{
		
		$query="INSERT INTO ".$_POST['tp']." SET $C1 = '".$_POST['l1'].", $C2 = '".$_POST['l2']."'";
		$cons=mysql_query($query,$Conec1);
		if(mysql_error($Conec1)!=''){
			$Log['res']='err';
			$Log['tx'][]="error al crear el v�nculo";
			$Log['tx'][]=mysql_error($Conec1);
			$Log['tx'][]=$query;
			terminar($Log);
		}
		$Log['res']='exito';
		$Log['tx'][]="El v�nculo se ha creado";
		terminar($Log);		
	}
		
}


if($_POST['accion']=='desvincular'){
	if(mysql_num_rows($cons)==0){
		$Log['res']='exito';
		$Log['tx'][]="El v�nculo ya se encontraba eliminado";
		terminar($Log);
	}else{
		
		$query="DELETE FROM ".$_POST['tp']." WHERE $C1 = '".$_POST['l1']." AND $C2 = '".$_POST['l2']."'";
		$cons=mysql_query($query,$Conec1);
		if(mysql_error($Conec1)!=''){
			$Log['res']='err';
			$Log['tx'][]="error al eliminar el v�nculo";
			$Log['tx'][]=mysql_error($Conec1);
			$Log['tx'][]=$query;
			terminar($Log);
		}
		$Log['res']='exito';
		$Log['tx'][]="El v�nculo se ha eliminado";
		terminar($Log);		
	}
		
}




