<?php
/**
* cons_ajax.php
*
 * dirije una consulta ajax a una funci�n php
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
ini_set('display_errors', '1');
header("Cache-control: private");
include('./includes/encabezado.php');
include('./cons_general.php');


//ini_set('display_errors', '1');
$func = $_POST['funcion'];
$resultado=$func($_POST['id'],$_POST['v1']);
//$res['res']='exito';

//print_r($resultado);
//ini_set('display_errors', '1');
//echo json_encode($resultado);
?>