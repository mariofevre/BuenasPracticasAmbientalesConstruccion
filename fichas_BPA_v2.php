<?php
/**
* fichas_BPA_v2.php
*
* genera fichas de visualización de BPA.  
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
	   <link rel="stylesheet" type="text/css" href="./css/panelbase.css" />
	   <link rel="stylesheet" type="text/css" href="./css/indice_fuentes.css" />
	   <link rel="stylesheet" type="text/css" href="./css/fichas_BPA_v2.css" />          
	<style>
					
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
		<div id='id-nombre'>
				<div id='id'>-sin datos-</div>
				<div id='categoria'>-sin datos-</div>
				<div id='nombre'>-sin datos-</div>
		</div>
		<div id='descripcion'>-sin datos-</div>
		
		
		<div class='bloque' id='bloque1'>
			<div class='columna' id='columna1'>
			
				<div class='aclara'>Esta Buena Práctica se recomienda:</div>
				<div id='tags'>
					
					<div id='escalas'>
						<img src='./img/tag_escala.png'>
						<div class='titulito'>
							para escalas:
						</div>
					</div><div id='fases'>
						<img src='./img/tag_fase.png'>
						<div class='titulito'>
							para fases:
						</div>
					</div><div id='medios'>
						<img src='./img/tag_medio.png'>
						<div class='titulito'>
							para medios:
						</div>
					</div><div id='tipos'>
						<img src='./img/tag_tipologia.png'>
						<div class='titulito'>
							para tipologías:
						</div>
					</div>		
				</div>
				
			</div><div class='columna' id='columna2'>

	
				<div id='proced-rec'>
					<div class='aclara'>Procedimiento recomendado:</div>
					<div id='procedimiento'></div>				
				</div>
			
			
		</div>	

		<div class='bloque' id='bloque2'>
			<div class='columna' id='columna1'>
				
				<div id='recursog'>
					<div class='aclara'>Previsión de Recursos recomendada:</div>
					<div id='recursos'>
					</div>
				</div>			
			</div><div class='columna' id='columna2'>
				<div id='fuenteg'>
					<div class='aclara'>Para más información sobre esta buena práctica recomendamos:</div>
					<p id='fuente'>-sin datos-</p>					
				</div>		
			</div>	
		</div>
		
				
		<div class='bloque' id='bloque3'>
			<div class='columna' id='columna1'>
				
				<div id='cuadro'>
				</div>
								
			</div><div class='columna' id='columna2'>
				<div id='transcripcion'>x</div>				
			</div>			
		</div>
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
			     cargarBPAsFicha(); 
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