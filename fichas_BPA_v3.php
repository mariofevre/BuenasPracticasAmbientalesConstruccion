<?php
/**
* fichas_BPA_v3.php
*
* genera fichas a partir de la consulta en la base de datos  
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
include('./cons_general.php');
?>
<!DOCTYPE html>
<head>
	 
	   <title>RED SUSTENTABLE DE LA CONSTRUCCIÓN</title>
	   <link href="./img/pdfajpg.ico" type="image/x-icon" rel="shortcut icon">         
	<style>
				 #fmodelo{
				 	display:none;
				 }	
				 #indiceBPAs a{
				 	display:block;
				 }
	</style>
	
</head>
<body>
		<script language="javascript" type="text/javascript" src="./js/jquery/jquery-1.8.2.js"></script>		
		<script language="javascript" type="text/javascript" src="./js/fuentesaBPA.js"></script>
		<script language="javascript" type="text/javascript" src="./js/BPA.js"></script>		
<?php
$Result=consultaPropEstructura();
//echo "<pre>";print_r($Result);echo "</pre>";
$Indice=$Result['Indice'];
$Estrategias=$Result['Estrategias'];
$Areas=$Result['Areas'];
$Ambitos=$Result['Ambitos'];
$Acciones=$Result['Acciones'];

	echo "<div id='indiceBPAs' class='ficha'><h1>Índice de Fichas</h1></div>";	
	
	echo "
	<div class='ficha' id='fmodelo'>
		<header id='id'>-sin datos-</header>
		
		<h1 id='nombre'>-sin datos-</h1>
		<h2 id='categoria'>-sin datos-</h2>
		
		
		<p id='descripcion'>-sin datos-</p>
			
		<h3 class='aclara'>Esta Buena Práctica se recomienda:</h3>

		<div id='tags'>
			<div id='escalas'>
				<h4 class='titulito'>
					para escalas:
				</h4>
			</div><div id='fases'>
				
				<h4 class='titulito'>
					para fases:
				</h4>
			</div><div id='medios'>
				<h4 class='titulito'>
					para medios:
				</h4>
			</div><div id='tipos'>
				<h4 class='titulito'>
					para tipologías:
				</h4>
			</div>		
		</div>
		
		<h3 class='aclara'>Procedimiento recomendado:</h3>
		<p id='procedimiento'></p>				
		
		<h3 class='aclara'>Previsión de Recursos recomendada:</h3>
		<div id='recursos'></div>
		
		<h3 class='aclara'>Para más información sobre esta buena práctica recomendamos:</h3>
		<p id='fuente'>-sin datos-</p>					
		<div id='transcripcion'>x</div>
						
		<div id='cuadro'></div>
								
	</div>
	";
?>

   <script type="text/javascript">
           
       var _FuentesData=Array();
       var _FuentesIndice=Array();
       cargarFuentesFichas();//en js/fuentesaBPA.js
       
	   var _ClasesCargadas='no' // la función cargar clases modifica esta variable al terminar.
	   var _DataBPAs=Array(); // esta variable se completa con la función cargarBPAs.
	   var _ClasesData=Array();
	   cargarClasesVar();// en /js/BPA.js
   
       
		function checkVariable() {
			console.log('checando');
			   if(_ClasesCargadas=='si'){
			   	clearInterval(myVar);
			     cargarBPAsFicha_v3(); 
			   }
		}
		var myVar = setInterval(checkVariable,200);
		
	
    	function enviarFormulario(_this){             		
         		var _Acc=_this.getAttribute('value');
         		document.getElementById('Iacc').value=_Acc;
				__FF=$('#formularioBPA').serialize();
				console.log(__FF);
         		$.post('ed_BPA_ajax.php', $('#formularioBPA').serialize(),function(response){						  	
				        var _res = $.parseJSON(response);
						console.log(_res);
						if(_res.res=='exito'){
							if(_Acc=='crear'){
								if(_res.data.nid!='NA'){
									cargarFuentes(_res.data.nid);
								}
							}else if(_Acc=='guardar'){
								if(_res.data.id!='NA'){
									actualizarFuentes(_res.data.id);
								}
							}else if(_Acc=='confirmar'){
								if(_res.data.id!='NA'){
									descargarFuentes(_res.data.id);
								}
							}
						vaciarFormulario();	
						}
				});				
          }
          
        

          
          function tagToggle(_this){
          		var _this = _this;
              	_est=_this.getAttribute('marcado');
              	if(_est=='si'){
              		var _accion='borra';
              	}else if(_est=='no'){
              		var _accion='agrega';
              	}else{
              		alert('guarde esta BPA antes de definir sus clasificaciones. error al consultar estado (att: "marcado")');
              		return;
              	}
              	
              	_clase=_this.parentNode.getAttribute('clasif');
              	_idclase=_this.getAttribute('idreg');
              	_idBPA = document.getElementById('Iid').value;
              	
          		var parametros = {
					clase: _clase,
					idclase : _idclase,
					idBPA : _idBPA,
					accion: _accion
				};
						
				$.ajax({
					data:  parametros,
					url:   'ed_marcaclase_ajax.php',
					type:  'post',
					success:  function (response){
						var _res = $.parseJSON(response);
						console.log(_res);							
						if(_res.res=='exito'){
							if(_accion=='agrega'){
								_this.setAttribute('marcado','si');								
							}else{
								_this.setAttribute('marcado','no');
							}
						}else{
							_this.setAttribute('marcado','err');
							_this.removeAttribute('onclick');
						}
						cargarBPAs();
					},
					failure:  function (response){
						_this.setAttribute('marcado','err');
						_this.removeAttribute('onclick');
					}
				})
          }
        </script>

</body>