<?php
/**
* ed_marcaclase_ajax.php
*
* modifica la clase a la que pertenece una Buena Práctica Ambiental.  
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
* y/o modificarlo bajo los términos de la "AGNU Affero AGeneral Public License" 
* publicada por la Free Software Foundation, version 3
* 
* Este archivo es distribuido por si mismo y dentro de sus proyectos 
* con el objetivo de ser útil, eficiente, predecible y transparente
* pero SIN NIGUNA GARANTÍA; sin siquiera la garantía implícita de
* CAPACIDAD DE MERCANTILIZACIÓN o utilidad para un propósito particular.
* Consulte la "GNU AFFERO GENERAL PUBLIC LICENSE" para más detalles.
* 
* Si usted no cuenta con una copia de dicha licencia puede encontrarla aquí: <https://www.gnu.org/licenses/agpl-3.0.html>.
*/


ini_set('display_errors', '1');
include ('./includes/encabezado.php');	
$Base=$_SESSION['AppSettings']->DATABASE_NAME;



$Log=array();
function terminar($Log){
	$qa=json_encode($Log);
	if($qa==null){print_r($Log);}else{echo $qa;}
	exit;
}

						
if(!isset($_POST['clase'])){
	$Log['res']='err';
	$Log['tx'][]='No fue enviada la variable clase';
	terminar($Log);
}
if(!isset($_POST['idclase'])){
	$Log['res']='err';
	$Log['tx'][]='No fue enviada la variable idclase';	
	terminar($Log);
}
if(!isset($_POST['idBPA'])){
	$Log['res']='err';
	$Log['tx'][]='No fue enviada la variable idBPA';	
	terminar($Log);
}

if(!isset($_POST['accion'])){
	$Log['res']='err';
	$Log['tx'][]='No fue enviada la variable accion';	
	terminar($Log);
}



$arrTC=array(
"escalas" => "CLASescalas",
"fases" => "CLASfases",
"medio" => "CLASmedio",
"tipos" => "CLAStipos"
);

$arrTL=array(
"escalas" => "BPclasifEscala",
"fases" => "BPclasifFases",
"medio" => "BPclasifMedio",
"tipos" => "BPclasifTipo"
);

if(!isset($arrTC[$_POST['clase']])){
	$Log['res']='err';
	$Log['tx'][]='Clase no reconocida para asignacion de tabla';	
	terminar($Log);
}

$tablaC= $arrTC[$_POST['clase']];
$tablaL= $arrTL[$_POST['clase']];



if($_POST['accion']=='agrega'){
	$query ="
	INSERT INTO `sustentabilidad`.`".$tablaL."`
	values(null,".$_POST['idBPA'].",".$_POST['idclase'].")";	
	
	$Log['tx'][]='tageando';
}elseif($_POST['accion']=='borra'){
	$query ="
	DELETE FROM `sustentabilidad`.`".$tablaL."`
	WHERE id_h_BPbuenasprac_id = ".$_POST['idBPA']."
	AND   id_h_".$tablaC."_id = ".$_POST['idclase'];
	
	$Log['tx'][]='destageando';
}else{
	$Log['res']='err';
	$Log['tx'][]='accion no reconocida';	
	terminar($Log);
}


$cons=mysql_query($query,$Conec1);
if(mysql_error($Conec1)!=''){
	$Log['res']='err';
	$Log['tx'][]='Error al insertar en base de datos';
	$Log['tx'][]=mysql_error($Conec1);
	$Log['tx'][]=$query;
	terminar($Log);	
}

$Log['res']='exito';
$Log['data']['nid']=mysql_insert_id($Conec1);
terminar($Log);	

