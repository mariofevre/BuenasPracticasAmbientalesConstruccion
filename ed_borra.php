<?php
/**
* ed_borra.php
*
* modifica la base de datos eliminando  o enviando a papelera los registros solicitados por POST
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

include("../includes/mensajesdesarrollo.php");// carga sistema de mensajes de desarrollo
include ('./includes/encabezado.php');	
include ('../includes/usuarioaccesos.php');

$Id = $_POST[id];
$Contrato = $_POST[contrato];
$Tabla = $_POST[tabla];
$Accion = $_POST[accion];
$Salida = $_POST[salida];
$Salidaid = $_POST[salidaid];	
$Salidatabla = $_POST[salidatabla];	
$HOY = date("Y-m-d");


foreach($_POST as $k => $v){// estas variables son pasadas por als aplicaciones comunes manteniendose.
	$_SESSION['DEBUG']['mensajes'][]="$k => $v";
	if(substr($k,0,5)=='PASAR'){
		$PASAR[$k]=$v;
	}
}


$Consulta = mysql_query("SELECT * FROM $Tabla WHERE id = $Id",$Conec1);

$query="SHOW COLUMNS FROM $Tabla";
$campos = mysql_query($query,$Conec1);
$_SESSION['DEBUG']['mensajes'][]=mysql_error($Conec1);

$accion = "DELETE FROM $Tabla "; //por defecto elimina el registro, excepto que la tabla presente campos de papelera

$sets = "SET ";
while($row=mysql_fetch_assoc($campos)){
	
	if(substr($row['Field'],0,17)=='zz_borradausuario'){
		$sets .= $row['Field']."='$UsuarioI', ";
	}	
	
	if(substr($row['Field'],0,15)=='zz_borradafecha'){
		$sets .= $row['Field']."='$HOY', ";
	}		


	if(substr($row['Field'],0,9)=='zz_borrad'){		
		$accion = "UPDATE $Tabla ";	
		$val='1';
		$valtx='si';
		if($Accion == "recupera"){$val='0';$valtx='no';}
		
		if(substr($row['Type'],0,4)=='tiny'){
			$sets .= $row['Field']."='".$val."', ";
		}elseif(substr($row['Type'],0,4)=='enum'){
			$sets .= $row['Field']."='".$valtx."', ";
		}
		
	}
	
}
if($sets=="SET "){$sets='';}else{$sets=substr($sets,0,-2);}

$_SESSION['DEBUG']['mensajes'][]="$accion $sets WHERE id='$Id'";

		
	echo $Accion;
	if($Accion == "borra"||$Accion == "recupera"){
		$query = "$accion $sets WHERE id='$Id'";
		$Consulta_contrato = mysql_query($query,$Conec1);
		$_SESSION['DEBUG']['mensajes'][]=mysql_error($Conec1);
	}else{
		$_SESSION['DEBUG']['mensajes'][]="esta acci�n no fue llamada correctamente, borra.php solo se activa enviando via POST la 'accion' 'borra' o 'recupera'";
	}





if($Salidaid == ""){$Salidaid = $Id;}
if($Salida == ""){$Salida = "./ficha.php?";}

echo $Salida;
echo".php?tabla=";
echo $Tabla;
echo"&id=";
echo $Salidaid;
$cadenapasar='';
foreach($PASAR as $k => $v){
	$cadenapasar.='&'.substr($k,5).'='.$v;
}

$_SESSION['DEBUG']['mensajes'][]=$errorsalida;

if($Salida!=''){
	?>
	    <SCRIPT LANGUAGE="javascript">
	    location.href = "./<?php echo $Salida;?>.php?tabla=<?php echo $Tabla;?>&id=<?php echo $Salidaid.$cadenapasar;?>";
	    </SCRIPT> 
	<?php
	}else{
	?>
	    <SCRIPT LANGUAGE="javascript">
	    window.close();
	    </SCRIPT> 
	<?php	
		
}

