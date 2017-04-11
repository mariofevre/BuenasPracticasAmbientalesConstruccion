<?php
/**
* ed_vinculos_temas_ajax.php
*
* altera la vinculacion de BPA a temas
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

$Log=array();
function terminar($Log){
	echo json_encode($Log);
	exit;
}




$r=array("bpid","temaid","predominancia");

foreach($r as $var){
	if(!isset($_POST[$var])){	
	$Log['res']='err';
	$Log['tx'][]='No fue enviada la variable '.$var;
	terminar($Log);
	}
}

$query="
	SELECT
		`BPclasifTemas`.`id`,
	    `BPclasifTemas`.`id_h_BPbuenasprac_id`,
	    `BPclasifTemas`.`id_h_CLAStemas_id`,
	    `BPclasifTemas`.`predominancia`
	FROM
		`sustentabilidad`.`BPclasifTemas`
	WHERE
		id_h_BPbuenasprac_id='".$_POST['bpid']."'
";
$cons=mysql_query($query,$Conec1);

$existente='sd';
while($row=mysql_fetch_assoc($cons)){
	
	if($row['id_h_CLAStemas_id']==$_POST['temaid']){
		$existente='si';
		if($_POST['predominancia']==='0'){
			$query="
			DELETE FROM `sustentabilidad`.`BPclasifTemas`
			WHERE id='".$row['id']."'			
			";
			$Log['tx'][]="eliminando registro";
		}else{
			$query="
			UPDATE `sustentabilidad`.`BPclasifTemas`
			SET
			`predominancia` = '".$_POST['predominancia']."'
			WHERE id='".$row['id']."'	
			";
			$Log['tx'][]="actualizado registro";
		}
		mysql_query($query,$Conec1);
		
		if(mysql_error($Conec1)!=''){
			$Log['res']='err';
			$Log['tx'][]="error al crear el vínculo";
			$Log['tx'][]=mysql_error($Conec1);
			$Log['tx'][]=$query;
			terminar($Log);
		}
		
		$Log['tx'][]="actualizada predominancia primaria";
				
	}else{
		if($_POST['predominancia']==='1'){
			$query="
			UPDATE `sustentabilidad`.`BPclasifTemas`
			SET
			`predominancia` = '2'
			WHERE id='".$row['id']."'	
			";				
		}
		mysql_query($query,$Conec1);
		
		if(mysql_error($Conec1)!=''){
			$Log['res']='err';
			$Log['tx'][]="error al crear el vínculo";
			$Log['tx'][]=mysql_error($Conec1);
			$Log['tx'][]=$query;
			terminar($Log);
		}
		$Log['tx'][]="actualizada predominancia secundaria";
	}
		
}
if($existente=='sd'){
	$query="
	INSERT INTO 
		`sustentabilidad`.`BPclasifTemas`
	SET
		`id_h_BPbuenasprac_id`='".$_POST['bpid']."',
		`id_h_CLAStemas_id`='".$_POST['temaid']."',
		`predominancia`='".$_POST['predominancia']."'
	";				
	
	mysql_query($query,$Conec1);
	
	if(mysql_error($Conec1)!=''){
		$Log['res']='err';
		$Log['tx'][]="error al crear el vínculo";
		$Log['tx'][]=mysql_error($Conec1);
		$Log['tx'][]=$query;
		terminar($Log);
	}
	$Log['tx'][]="creado nuevo registro";		
}

$Log['res']='exito';

$Log['tx'][]=mysql_error($Conec1);
$Log['tx'][]=$query;
terminar($Log);


