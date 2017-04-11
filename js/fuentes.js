/**
* fuentes.js
*
* funciones para llamar datos de Fuentes Bibliográficas y representarlos en fichas , índices y formularios  
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




var Fcursando='no';

function cargarFuentes(_id){
 	
	var parametros = {
		id: _id
	};
			
	$.ajax({
		data:  parametros,
		url:   'cons_fuentes_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			console.log(_res);							
			if(_res.res=='exito'){
				_tabla=document.getElementById('tabla');
				
				if(_res.data.fuentes!=undefined){
				for(i=0;i<_res.data.fuentes.length;i++){
					
					if(_res.data.fuentes[i].zz_borrada!='1'){					
					_tr=document.createElement('tr');
					_tr.setAttribute('class','fuente');
					_tr.setAttribute('idreg',_res.data.fuentes[i].id);
					_tr.setAttribute('id','FU'+_res.data.fuentes[i].id);
					_tabla.appendChild(_tr);
					
					for(_campo in _res.data.fuentes[i]){
						_td=document.createElement('td');
						_td.innerHTML=_res.data.fuentes[i][_campo];
						
							if(_campo=='FI_copialocal'){
								_td.innerHTML='';
								if(_res.data.fuentes[i][_campo]==''){
									_aaa=document.createElement('a');
									_aaa.setAttribute('onclick','cargador(this,event);');
									_aaa.innerHTML='cargar archivo';
									_td.appendChild(_aaa);	
								}else{
									_aaa=document.createElement('a');
									_aaa.setAttribute('href',_res.data.fuentes[i][_campo]);
									_aaa.innerHTML='ver archivo';
									_td.appendChild(_aaa);										
									
									_aaa=document.createElement('a');
									_aaa.setAttribute('onclick','descargador(this,event);');
									_aaa.innerHTML='eliminar archivo';
									_td.appendChild(_aaa);	
													
								}
							}else if(_campo=='zz_escaneado'){
								//_td.innerHTML='';
								if(_res.data.fuentes[i][_campo]==''){
									_res.data.fuentes[i][_campo]='inicio';
								}							
								
								$split=_res.data.fuentes[i][_campo].split("_");
								if($split[0]!=$split[1]){
									_aaa=document.createElement('a');
									_aaa.setAttribute('estado',_res.data.fuentes[i][_campo]);
									_aaa.setAttribute('name','scanner');
									_aaa.setAttribute('id','sc'+_res.data.fuentes[i].id);
									_aaa.setAttribute('onclick','escanear(this,"");');
									_aaa.innerHTML='escanear';
									_td.appendChild(_aaa);	
								}
							}else if(_campo=='zz_escaneadoHD'){
								//_td.innerHTML='';
								if(_res.data.fuentes[i][_campo]==''){
									_res.data.fuentes[i][_campo]='inicio';
								}							
								
								$split=_res.data.fuentes[i][_campo].split("_");
								if($split[0]!=$split[1]){
									_aaa=document.createElement('a');
									_aaa.setAttribute('estado',_res.data.fuentes[i][_campo]);
									_aaa.setAttribute('name','scannerHD');
									_aaa.setAttribute('id','scHD'+_id);
									_aaa.setAttribute('onclick','escanear(this,"HD");');
									_aaa.innerHTML='escanear';								
									_td.appendChild(_aaa);
								}
							}			
						
						_tr.appendChild(_td);
					}
					}
				}
				
				}
			             
					 $(function() {
					  $('tr.fuente').click(function() {
					  		formularFuentes(this.getAttribute('idreg'));
						  });
					});	
				}

			}
		})			
 }   

function descargarFuentes(_id){
 	_fi=document.getElementById('FU'+_id);
 	_fi.parentNode.removeChild(_fi);	
}   

function actualizarFuentes(_id,_salida){
var parametros = {
		id: _id
	};
			
	$.ajax({
		data:  parametros,
		url:   'cons_fuentes_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			console.log(_res);							
			if(_res.res=='exito'){
				
				if(_res.data.fuentes!=undefined){
				for(i=0;i<_res.data.fuentes.length;i++){
					if(_res.data.fuentes[i].zz_borrada!='1'){
						
					_tr=document.getElementById('FU'+_id);
					_tr.innerHTML='';
					_tr.setAttribute('class','fuente');
					_tr.setAttribute('idreg',_res.data.fuentes[i].id);
					_tr.setAttribute('id','FU'+_res.data.fuentes[i].id);
					
					for(_campo in _res.data.fuentes[i]){
						_td=document.createElement('td');
						_td.innerHTML=_res.data.fuentes[i][_campo];
						_tr.appendChild(_td);
						
						if(_campo=='FI_copialocal'){
							_td.innerHTML='';
							if(_res.data.fuentes[i][_campo]==''){
								_aaa=document.createElement('a');
								_aaa.setAttribute('onclick','cargador(this,event);');
								_aaa.innerHTML='cargar archivo';
								_td.appendChild(_aaa);	
							}else{
								_aaa=document.createElement('a');
								_aaa.setAttribute('href',_res.data.fuentes[i][_campo]);
								_aaa.innerHTML='ver archivo';
								_td.appendChild(_aaa);										
								
								_aaa=document.createElement('a');
								_aaa.setAttribute('onclick','descargador(this,event);');
								_aaa.innerHTML='eliminar archivo';
								_td.appendChild(_aaa);													
							}
						}else if(_campo=='zz_escaneado'){
							//_td.innerHTML='';
							if(_res.data.fuentes[i][_campo]==''){
								_res.data.fuentes[i][_campo]='inicio';
							}							
							
							$split=_res.data.fuentes[i][_campo].split("_");
							if($split[0]!=$split[1]){
								_aaa=document.createElement('a');
								_aaa.setAttribute('estado',_res.data.fuentes[i][_campo]);
								_aaa.setAttribute('name','scanner');
								_aaa.setAttribute('id','sc'+_id);
								_aaa.setAttribute('onclick','escanear(this,"");');
								_aaa.innerHTML='escanear';								
								_td.appendChild(_aaa);	
								if(_salida=='escanear'){escanear(_aaa,"");}
							}
						}else if(_campo=='zz_escaneadoHD'){
							//_td.innerHTML='';
							if(_res.data.fuentes[i][_campo]==''){
								_res.data.fuentes[i][_campo]='inicio';
							}							
							
							$split=_res.data.fuentes[i][_campo].split("_");
							if($split[0]!=$split[1]){
								_aaa=document.createElement('a');
								_aaa.setAttribute('estado',_res.data.fuentes[i][_campo]);
								_aaa.setAttribute('name','scannerHD');
								_aaa.setAttribute('id','scHD'+_id);
								_aaa.setAttribute('onclick','escanear(this,"HD");');
								_aaa.innerHTML='escanear HD';								
								_td.appendChild(_aaa);	
								if(_salida=='escanearHD'){escanear(_aaa,"HD");}
							}
						}				
							
					}
					}
				}
				}
			             
				$(function() {
					$('tr.fuente').click(function() {
				  		formularFuentes(this.getAttribute('idreg'));
					});
				});	
				
				
				}
			    
			}
		})	
 }          
             
function formularFuentes(_id){
 		var parametros = {
			id: _id
		};
				
		$.ajax({
			data:  parametros,
			url:   'cons_fuentes_ajax.php',
			type:  'post',
			success:  function (response){
				var _res = $.parseJSON(response);
				console.log(_res);							
				if(_res.res=='exito'){
					_input=document.getElementById('Iacc');
					_input.value='cambiar';
					document.getElementById('botoncrear').style.display='none';
					document.getElementById('botoncambiar').style.display='block';
					document.getElementById('botoneliminar').style.display='block';
					
					if(_res.data.fuentes!=undefined){
					for(i=0;i<_res.data.fuentes.length;i++){						
						
						for(_campo in _res.data.fuentes[i]){

							_idinput='I'+_campo;
							_input=document.getElementById(_idinput);
							if(_input!=null&&_campo!='FI_copialocal'){
								_input.value=_res.data.fuentes[i][_campo];
							}
							
						}
					}
					}
				}
			}
		})	
 	
 }

function cargarFile() {

  // Update button text.
 // uploadButton.innerHTML = 'Uploading...';

  // The rest of the code will go here...  
  // Get the selected files from the input.
	var files = document.getElementById('IFI_copialocal').files;
	_id=document.getElementById('IFI_copialocal').getAttribute('idreg');
	
	for (i = 0; i < files.length; i++) {
    
		var parametros = new FormData();
		parametros.append("upload",files[i]);
		parametros.append("id",_id);
		parametros.append("accion",'cargar');
		
		//Llamamos a los puntos de la actividad
		$.ajax({
				data:  parametros,
				url:   'ed_agrega_adjunto.php',
				type:  'post',
				processData: false, 
				contentType: false,
				success:  function (response) {
					actualizarFuentes(_id);
					desactivarCarga();
				}
		});
	}
}

function descargarFile() {

	var _id=document.getElementById('Idescarga').getAttribute('idreg');
	var parametros = new FormData();
	parametros.append("id",_id);
	parametros.append("accion",'descargar');
	//Llamamos a los puntos de la actividad
	$.ajax({
			data:  parametros,
			url:   'ed_agrega_adjunto.php',
			type:  'post',
			processData: false, 
			contentType: false,
			success:  function (response) {
				actualizarFuentes(_id);
				desactivarCarga();
			}
	});
}

function escanear(_this,_resol){
	var _this = _this;
	var _id=_this.parentNode.parentNode.getAttribute('idreg');
	var _estado =_this.getAttribute('estado');
	var _resol = _resol;
 	var parametros = {
		id: _id,
		estado: _estado,
		resolucion: _resol,
		accion: 'scan'
	};
	//Llamamos a los puntos de la actividad
	$.ajax({
		data:  parametros,
		url:   'proc_pdf_scan.php',
		type:  'post',
		success:  function (response){			
			var _res = $.parseJSON(response);							
			if(_res.res=='exito'){
				console.log(_res);
				console.log(_this);
				_this.setAttribute('estado',_res.data.cont);				
				console.log(_this);
				if(_res.data.totPags > _res.data.actPags){
					_salida='escanear'+_resol;
					actualizarFuentes(_id,_salida);
				}else if(_res.data.totPags == _res.data.actPags){
					_this.setAttribute('name','scannerF');
					_sc=document.getElementsByName('scanner'+_resol);
					actualizarFuentes(_id);				
					
					if(_sc.length>0){
						console.log(_sc[0]);
						//console.log(_sc[0].parentNode);
						escanear(_sc[0],_resol);
					}
				}
			}
		}
	})
}