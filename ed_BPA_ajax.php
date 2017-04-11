<?php
/**
* ed_BPA_ajax.php
*
* modifica la base de datos, alterando los datos de las Buenas Prácticas Ambientales.  
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

//print_r($_FILES);
$Log=array();
function terminar($Log){
	$res = json_encode($Log);
	if($res==''){
		echo "error al codificar el array resultante";
		print_r($Log);
	}else{
		echo $res;
	}	
	exit;
}


if(!isset($_POST['accion'])){
	$Log['res']='err';
	$Log['tx'][]=utf8_encode('error, no se definío la accion');	
	terminar($Log);
}


$campos=array('nombre','descripcion','fuente','entidad','fecha','id_p_FUfuentes','copia','observaciones','fuentepags','valoracion','id_p_PROestrategias','procedimiento','recorte','recursos');

foreach($campos as $c){
	if($_POST[$c]!=''){
		if($_POST[$c]==$CODELIM){$_POST[$c]='';}
		$e=explode("_",$c);
		if($e[0]=='FI'){continue;}		
		$sets.="$c ='".utf8_decode($_POST[$c])."', ";
	}
}
$sets=substr($sets,0,-2);



if($_POST['accion']=='crear'){	
	$query="INSERT INTO $Base.BPbuenasprac SET $sets";
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
		$Log['tx'][]=utf8_encode('No se generó un id postivo en la base');
		terminar($Log);	
	}

	
	$Log['res']='exito';
	$NID=mysql_insert_id($Conec1);
	$Log['data']['nid']=mysql_insert_id($Conec1);
	$Log['data']['id']='NA';
	
	if(count($_FILES)>0){
		$Log['tx'][]=utf8_encode('guardando archivo adjunto');
		procesarFile($NID,$_FILES[0]);
	}		
	
	terminar($Log);	
}

if($_POST['accion']=='guardar'){$_POST['accion']='cambiar';}
if($_POST['accion']=='cambiar'){

	$query="UPDATE $Base.BPbuenasprac SET $sets WHERE id='".$_POST['id']."'";
	$cons=mysql_query($query,$Conec1);
	
	if(mysql_error($Conec1)!=''){
		$Log['res']='err';
		$Log['tx'][]='Error al insertar en base de datos';
		$Log['tx'][]=mysql_error($Conec1);
		$Log['tx'][]=$query;
		terminar($Log);	
	}	

	if(count($_FILES)>0){
		$Log['tx'][]=utf8_encode('guardando archivo adjunto');
		procesarFile($NID,$_FILES[0]);
	}		
		
	$Log['res']='exito';
	$Log['data']['nid']='NA';
	$Log['data']['id']=$_POST['id'];
	terminar($Log);	
	
}


if($_POST['accion']=='eliminar'||$_POST['accion']=='confirmar'){

	$query="UPDATE $Base.BPbuenasprac SET zz_borrada='1' WHERE id='".$_POST['id']."'";
	$cons=mysql_query($query,$Conec1);
	
	if(mysql_error($Conec1)!=''){
		$Log['res']='err';
		$Log['tx'][]='Error al insertar en base de datos';
		$Log['tx'][]=mysql_error($Conec1);
		$Log['tx'][]=$query;
		terminar($Log);	
	}	
	
	$Log['res']='exito';
	$Log['data']['nid']='NA';
	$Log['data']['id']=$_POST['id'];
	terminar($Log);	
	
}



