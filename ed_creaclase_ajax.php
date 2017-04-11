<?php
/**
* de_creaclase_ajax
*
* modifica la base de datos insetando nuevos registros en la tabla de clases  
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

include ('./includes/encabezado.php');	
$Base=$_SESSION['AppSettings']->DATABASE_NAME;

foreach($_POST as $k => $v){
	$_POST[$k]=utf8_decode($v);
}

$Log=array();
function terminar($Log){
	echo json_encode($Log);
	exit;
}

if(!isset($_POST['tabla'])){
	$Log['res']='err';
	$Log['tx'][]='No fue enviada la variable tabla';
	terminar($Log);
}
if(!isset($_POST['nombre'])){
	$Log['res']='err';
	$Log['tx'][]='No fue enviada la variable nobmre';	
	terminar($Log);
}

$n1=str_replace(" ","", $_POST['nombre']);

if(strlen($n1)<4){
	$Log['res']='err';
	$Log['alerta']='El nombre es muy corto';
	$Log['tx'][]='longitud de nombre muy corta';	
	terminar($Log);
}

$query="SELECT * FROM ".$_POST['tabla']." WHERE nombre like '%".$_POST['nombre']."%'";
$cons=mysql_query($query,$Conec1);
while($row=mysql_fetch_assoc($cons)){
	$n1=str_replace(" ","", $_POST['nombre']);
	$n1=strtolower($n1);
	$n2=str_replace(" ","", $row['nombre']);
	$n2=strtolower($n2);
	
	if($n1==$n2){
		$Log['res']='exito';
		$Log['alerta']='El nombre ya estaba utilizado, se asigna a la clase existente: '.$row['nombre'];
		$Log['data']['nombre']=utf8_encode($row['nombre']);
		$Log['data']['nid']=0;
		$Log['data']['eid']=$row['id'];
		terminar($Log);			
	}
}
if(mysql_error($Conec1)!=''){
	$Log['res']='err';
	$Log['tx'][]='Error al insertar en base de datos';
	$Log['tx'][]=mysql_error($Conec1);
	$Log['tx'][]=$query;
	terminar($Log);	
}

$query="INSERT INTO ".$_POST['tabla']." SET nombre='".$_POST['nombre']."'";
mysql_query($query,$Conec1);
if(mysql_error($Conec1)!=''){
	$Log['res']='err';
	$Log['tx'][]='Error al insertar en base de datos';
	$Log['tx'][]=mysql_error($Conec1);
	$Log['tx'][]=$query;
	terminar($Log);	
}

if(mysql_insert_id($Conec1)<1){
	$Log['res']='err';
	$Log['tx'][]='No se generó un id postivo wen la base';
	terminar($Log);	
}

$Log['res']='exito';
$Log['data']['nomre']=utf8_encode($_POST['nombre']);
$Log['data']['nid']=mysql_insert_id($Conec1);
terminar($Log);	

