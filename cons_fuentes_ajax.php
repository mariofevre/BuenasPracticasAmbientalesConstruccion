<?php
/**
* cons_fuentes_ajax.php
*
* realiza una consulta ala base de datos a partir de un llamado ajax devolviento fuentes consultadas
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


include('./includes/encabezado.php');

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

if(isset($_POST['id'])){
	$where= "WHERE id='".$_POST['id']."'";
}

$query="

SELECT `FUfuentes`.`id`,
    `FUfuentes`.`nombre`,
    `FUfuentes`.`descripcion`,
    `FUfuentes`.`url`,
    `FUfuentes`.`FI_copialocal`,
    `FUfuentes`.`autor`,
    `FUfuentes`.`entidad`,
    `FUfuentes`.`pais`,
    `FUfuentes`.`fecha`,
    `FUfuentes`.`ISBN`,
    `FUfuentes`.`zz_escaneado`,
    `FUfuentes`.`zz_escaneadoHD`,    
    `FUfuentes`.`zz_borrada`
	FROM `sustentabilidad`.`FUfuentes`
	$where
	";
$consulta=mysql_query($query,$Conec1);
	if(mysql_error($Conec1)!=''){
		$Log['res']='err';
		$Log['tx'][]="error al consultar la base de datos";
		$Log['tx'][]=mysql_error($Conec1);
		$Log['tx'][]=$query;
		terminar($Log);
	}
while($row=mysql_fetch_assoc($consulta)){
	foreach($row as $k => $v){
		$r[$k]=utf8_encode($v);	
	}
	$Fuentes[]=$r;
	$IndiceFuentes[$row['id']]=count($Fuentes)-1;
	unset($r);
}

$Log['res']='exito';
$Log['data']['fuentes']=$Fuentes;
$Log['data']['indice']=$IndiceFuentes;
terminar($Log);
	