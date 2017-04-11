/**
* BPA.js
*
* funciones para llamar datos de BPA y representarlos en fichas, índices y formularios  
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

function cargarClases(){
	
	var parametros = {
		funcion: 'consultaClasesAjax',
		id: '',
		v1: ''
	};
	
	
	$.ajax({
		data:  parametros,
		url:   'cons_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			console.log(_res);							
			if(_res.res=='exito'){
				_cont=document.getElementById('indiceclases');
				
				
				
				for(_Clase in _res.data.clases){
					if(_Clase=='temas'){
						_cont=document.getElementById('temasdisponibles');
						_conta=document.getElementById('temasasociados');
						_clasediv=_cont;
						_clasediva=_conta;
						
						for(_valor in _res.data.clases[_Clase]){
							console.log(_res.data.clases[_Clase]);
							_NN=_res.data.clases[_Clase][_valor].nombre
							_anc=document.createElement('a');
							
							_anc.setAttribute('onclick','sumaTema(this, 1);');
							_anc.setAttribute('idreg',_res.data.clases[_Clase][_valor].id);
							
							//_anc.setAttribute('marcado','no');
							_anc.innerHTML=_NN;
							_anc.title=_res.data.clases[_Clase][_valor].descripcion
							
							_clasediv.appendChild(_anc);
							_ana=_anc.cloneNode(_anc);
							_clasediva.appendChild(_ana);
						}
						
					}else{
						_cont=document.getElementById('indiceclases');
						
						_clasediv=document.createElement('div');
						_clasediv.setAttribute('clasif',_Clase);
						_cont.appendChild(_clasediv);
						_clasediv.innerHTML='<p class="titulo">'+_Clase+'<a class="anade">+ añadir</a></p>';
						
						for(_valor in _res.data.clases[_Clase]){
							_NN=_res.data.clases[_Clase][_valor].nombre
							_anc=document.createElement('a');
							_anc.setAttribute('onclick','tagToggle(this);');
							_anc.setAttribute('idreg',_res.data.clases[_Clase][_valor].id);
							//_anc.setAttribute('marcado','no');
							_anc.innerHTML=_NN;
							_anc.title=_res.data.clases[_Clase][_valor].descripcion
							_clasediv.appendChild(_anc);	
						}
							
						
					}
					
				}			
			}
			             
			$(function() {
				$('tr.fuente').click(function() {
					formularFuentes(this.getAttribute('idreg'));
				});
			});	
			
			_ClasesCargadas='si';
		}
	})			
	
}

function sumaTema(_this, _pred){
	_idtema = _this.getAttribute('idreg');
	var parametros = {
		bpid: _idBPA,
		temaid: _idtema,
		predominancia: _pred
	};
	
	$.ajax({
		data:  parametros,
		url:   'ed_vinculos_temas_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			console.log(_res);		   
		}
	})				
	
}

function cargarClasesVar(){//carga las clases como variables al dom pero no genera html	
	console.log('cargando c');
	var parametros = {
		funcion: 'consultaClasesAjax',
		id: '',
		v1: ''
	};
	
	$.ajax({
		data:  parametros,
		url:   'cons_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			console.log(_res);							
			if(_res.res=='exito'){
				console.log('clases cargadas');
				_ClasesCargadas='si';
				_ClasesData=_res.data;	
			}			             
		}
	})			
}

function cargarBPAs(_id){

	var parametros = {
		id: _id
	};
	
	console.log('hola');
			
	$.ajax({
		data:  parametros,
		url:   'cons_BPAs_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			//console.log(_res);			
				
			if(_res.res=='exito'){
				_cont=document.getElementById('indiceBPAs');
				_cont.innerHTML='<h1>Índice de Fichas</h1>';
				
				if(_res.data.BPAs!=undefined){
				_DataBPAs=_res.data.BPAs;
				for(i in _res.data.BPAs){
					
					if(_res.data.BPAs[i].zz_borrada!='1'){					
						_div=document.createElement('a');
						_div.setAttribute('class','bpa');
						_div.setAttribute('valoracion',_res.data.BPAs[i].valoracion);
						_div.setAttribute('onclick','formulaBPA(this)');
						_div.setAttribute('idreg',_res.data.BPAs[i].id);
						_div.setAttribute('id','bpa'+_res.data.BPAs[i].id);
						_div.innerHTML=_res.data.BPAs[i].nombre;
						_cont.appendChild(_div);
						
					
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
 
function cargarBPAsFicha(_id){ 	
	var parametros = {
		id: _id
	};
			
	$.ajax({
		data:  parametros,
		url:   'cons_BPAs_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			console.log(_res);
		
					
			if(_res.res=='exito'){
				_cont=document.getElementById('indiceBPAs');
				_cont.innerHTML='<h1>Índice de Fichas</h1>';
				
				for(_no in _ClasesData.clases.orden){
					
					
					_idTema = _ClasesData.clases.orden[_no];
					
					_hC1=document.createElement('a');
					_hC1.setAttribute('href','#C'+_idTema);
					_hC1.setAttribute('class','categoria');
					_hC1.innerHTML=_ClasesData.clases.temas[_idTema].descripcion;
					_cont.appendChild(_hC1);
					//_h1=document.createElement('h1');
					//_h1.innerHTML=_ClasesData.clases.temas[_idTema].descripcion;
					
					_CategNombre=_ClasesData.clases.temas[_idTema].descripcion;
					
					//console.log(_h1);
					//document.body.appendChild(_h1);
					_BPAcargadasCat=0;
					if(_res.data.BPAs!=undefined){
						
						_DataBPAs=_res.data.BPAs;
						
						for(i in _res.data.BPAs){	
							
							if(_res.data.BPAs[i].valoracion=='rechazado'){
								continue;
							}						
							
							if(_res.data.BPAs[i].temas==undefined){
								continue;
							}		
									
							if(_res.data.BPAs[i].temas[_idTema]==undefined){
								continue;
							}
							if(_res.data.BPAs[i].temas[_idTema].predominancia!='1'){
								continue;
							}
							
							
							if(_res.data.BPAs[i].zz_borrada!='1'){
								_modelo=document.getElementById('fmodelo').cloneNode(true);						
								_modelo.setAttribute('valoracion',_res.data.BPAs[i].valoracion);
								_modelo.setAttribute('id','f'+_res.data.BPAs[i].id);
								
								_modelo.setAttribute('name','f'+_res.data.BPAs[i].id);
								
								var str = "" + _res.data.BPAs[i].id;
								var pad = "0000"
								var ans = pad.substring(0, pad.length - str.length) + str
								
								_modelo.querySelector('#id').innerHTML=ans;
								_modelo.querySelector('#nombre').innerHTML=_res.data.BPAs[i].nombre;
								
								_modelo.querySelector('#descripcion').innerHTML=_res.data.BPAs[i].descripcion.replace(/(?:\r\n|\r|\n)/g, '<br />');
								_modelo.querySelector('#cuadro').innerHTML=_res.data.BPAs[i].recorte.replace(/(?:\r\n|\r|\n)/g, '<br />');
								
								for(_nn in _res.data.BPAs[i].escala){
									_taGid=_res.data.BPAs[i].escala[_nn].id_h_CLASescalas_id;
									_tag=document.createElement('div');
									_tag.innerHTML=_ClasesData.clases.escalas[_taGid].nombre;
									_modelo.querySelector('#escalas').appendChild(_tag);	
								}
								
								for(_nn in _res.data.BPAs[i].fases){
									_taGid=_res.data.BPAs[i].fases[_nn].id_h_CLASfases_id;
									_tag=document.createElement('div');
									_tag.innerHTML=_ClasesData.clases.fases[_taGid].nombre;
									_modelo.querySelector('#fases').appendChild(_tag);	
								}
								
								for(_nn in _res.data.BPAs[i].medio){
									_taGid=_res.data.BPAs[i].medio[_nn].id_h_CLASmedio_id;
									_tag=document.createElement('div');
									_tag.innerHTML=_ClasesData.clases.medio[_taGid].nombre;
									_modelo.querySelector('#medios').appendChild(_tag);	
								}
								
								for(_nn in _res.data.BPAs[i].tipo){
									_taGid=_res.data.BPAs[i].tipo[_nn].id_h_CLAStipos_id;
									_tag=document.createElement('div');
									_tag.innerHTML=_ClasesData.clases.tipos[_taGid].nombre;
									_modelo.querySelector('#tipos').appendChild(_tag);	
								}
								
								_tx=_res.data.BPAs[i].procedimiento.replace(/(?:\r\n|\r|\n)/g, '<br />');
								_spl=_tx.split('<br />');
								for(_nn in _spl){
									_ttx=_spl[_nn];
									
									if(_ttx.substr(0,2)=="- "){
										_ttx="• "+_ttx.substr(2);
									}else if(_ttx.substr(0,1)=="-"){
										_ttx="• "+_ttx.substr(1);
									}
									
								_modelo.querySelector('#procedimiento').innerHTML+="<p>"+_ttx+"</p>";
								}
								
								_tx=_res.data.BPAs[i].recursos.replace(/(?:\r\n|\r|\n)/g, '<br />');
								_spl=_tx.split('<br />');
								for(_nn in _spl){
								_modelo.querySelector('#recursos').innerHTML+="<p>"+_spl[_nn]+"</p>";
								}							
								
								_modelo.querySelector('#categoria').innerHTML=_CategNombre;
													
								_fuenteId=_res.data.BPAs[i].id_p_FUfuentes;
								_fuenteNo=_FuentesIndice[_fuenteId];
								
								_modelo.querySelector('#fuente').innerHTML=_res.data.BPAs[i].entidad+". ";
								
								_spl=_FuentesData[_fuenteNo].fecha.split('-');
								_modelo.querySelector('#fuente').innerHTML+=_spl[0]+". ";
								_modelo.querySelector('#fuente').innerHTML+=' "<i>'+_FuentesData[_fuenteNo].nombre+'"</i>.';
								_modelo.querySelector('#fuente').innerHTML+=' (pag: '+_res.data.BPAs[i].fuentepags+')';
								
								_largo=5-_fuenteId.length;
								_suss = "00000";
								_susOk = _suss.substring(0,_largo);
								_strFU=_susOk+_fuenteId;
								_p_img1="./documentos/fuentes/imagen/"+_strFU+"/_0001.jpg";
								_img=document.createElement('img');
								_img.src=_p_img1;
								//_modelo.querySelector('#tapa').appendChild(_img);
	
								_largo=4-_res.data.BPAs[i].fuentepags.length;
								_suss = "0000";
								_susOk = _suss.substring(0,_largo);
	
								_p_img1="./documentos/fuentes/imagen/"+_strFU+"/_"+_susOk+_res.data.BPAs[i].fuentepags+".jpg";
								_img=document.createElement('img');
								_img.src=_p_img1;
								//_modelo.querySelector('#pagina').appendChild(_img);
								
								_pagnum=parseInt(_res.data.BPAs[i].fuentepags)+1;
								_largo=4-(_pagnum.toString().length);
								console.log(_pagnum.length);
								_suss = "0000";
								_susOk = _suss.substring(0,_largo);							
								_p_img1="./documentos/fuentes/imagen/"+_strFU+"/_"+_susOk+_pagnum+".jpg";
								//_img=document.createElement('img');
								//_img.src=_p_img1;
								//_modelo.querySelector('#pagina').appendChild(_img);
	
								_modelo.querySelector('#transcripcion').innerHTML=_res.data.BPAs[i].copia.replace(/(?:\r\n|\r|\n)/g, '<br />');
								
								document.body.appendChild(_modelo);
								
								
								if(_modelo.querySelector('#nombre').clientHeight>82){_modelo.querySelector('#nombre').style.width='200px';}
								if(_modelo.querySelector('#nombre').clientHeight>82){_modelo.querySelector('#nombre').style.width='300px';}
								if(_modelo.querySelector('#nombre').clientHeight>82){_modelo.querySelector('#nombre').style.width='350px';}						
								_a=_modelo.querySelector('#id-nombre').clientHeight;
								_a+=_modelo.querySelector('#descripcion').clientHeight;
								_a+=_modelo.querySelector('#proced-rec').clientHeight;
								
								if((670-_a)<0){
									_modelo.querySelector('#procedimiento').style.fontSize="9px";
								}
								
								_a=_modelo.querySelector('#id-nombre').clientHeight;
								_a+=_modelo.querySelector('#descripcion').clientHeight;
								_a+=_modelo.querySelector('#proced-rec').clientHeight;
								
								if((670-_a)<0){
									_modelo.querySelector('#procedimiento').style.fontSize="8px";
								}
								if(_modelo.querySelector('#procedimiento').clientHeight>320){_modelo.querySelector('#procedimiento').style.fontSize="9px";}	
								if(_modelo.querySelector('#procedimiento').clientHeight>320){_modelo.querySelector('#procedimiento').style.fontSize="8px";}
								
								if(_modelo.querySelector('#recursos').clientHeight>80){_modelo.querySelector('#recursos').style.fontSize="9px";}	
								if(_modelo.querySelector('#recursos').clientHeight>80){_modelo.querySelector('#recursos').style.fontSize="8px";}

								if(_modelo.querySelector('#fuente').clientHeight>60){_modelo.querySelector('#fuente').style.fontSize="9px";}	
								if(_modelo.querySelector('#fuente').clientHeight>60){_modelo.querySelector('#fuente').style.fontSize="8px";}		
								
								if(_modelo.querySelector('#transcripcion').clientHeight>60){_modelo.querySelector('#transcripcion').style.fontSize="7px";}	
								if(_modelo.querySelector('#transcripcion').clientHeight>60){_modelo.querySelector('#transcripcion').style.fontSize="6px";}	
														
								_a=_modelo.querySelector('#id-nombre').clientHeight;
								_a+=_modelo.querySelector('#descripcion').clientHeight;
								_a+=_modelo.querySelector('#proced-rec').clientHeight;
								
								
								console.log(_a);
								_cuadro=_modelo.querySelector('#cuadro');
								if((670-_a)<_cuadro.clientHeight||_cuadro.innerHTML==''){
									_cuadro.parentNode.removeChild(_cuadro);
								}else{
								//	_cuadro.style.marginTop=(680-_a-_cuadro.clientHeight)/2+"px";
								//	_cuadro.style.marginBottom=(680-_a-_cuadro.clientHeight)/2+"px";
								}
								
								_h1=document.createElement('a');
								_h1.setAttribute('href','#f'+_res.data.BPAs[i].id);
								_h1.innerHTML=_res.data.BPAs[i].nombre;
								_cont.appendChild(_h1);
								if(_BPAcargadasCat==0){
									_hC1.setAttribute('href','#f'+_res.data.BPAs[i].id);
								}
								_BPAcargadasCat++;
								
								
								
								_contra=document.createElement('div');
								_contra.setAttribute('class','contraficha');
								_contra.setAttribute('valoracion','viable');
								_contra.innerHTML="<img src='./img/contraficha.jpg'>";
								console.log(_contra);
								document.body.appendChild(_contra);
							}
						}	
					}
					
					if(_BPAcargadasCat==0){
						_h1.parentNode.removeChild(_hC1);
					}
				}
			}
		}
	})			
 }  
 
 
 
function cargarBPAsFicha_v3(_id){ 	
	var parametros = {
		id: _id
	};
			
	$.ajax({
		data:  parametros,
		url:   'cons_BPAs_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			console.log(_res);
		
					
			if(_res.res=='exito'){
				_cont=document.getElementById('indiceBPAs');
				_cont.innerHTML='<h1>Índice de Fichas</h1>';
				
				for(_no in _ClasesData.clases.orden){
					
					
					_idTema = _ClasesData.clases.orden[_no];
					
					_hC1=document.createElement('a');
					_hC1.setAttribute('href','#C'+_idTema);
					_hC1.setAttribute('class','categoria');
					_hC1.innerHTML=_ClasesData.clases.temas[_idTema].descripcion;
					_cont.appendChild(_hC1);
					//_h1=document.createElement('h1');
					//_h1.innerHTML=_ClasesData.clases.temas[_idTema].descripcion;
					
					_CategNombre=_ClasesData.clases.temas[_idTema].descripcion;
					
					//console.log(_h1);
					//document.body.appendChild(_h1);
					_BPAcargadasCat=0;
					if(_res.data.BPAs!=undefined){
						
						_DataBPAs=_res.data.BPAs;
						
						for(i in _res.data.BPAs){	
							
							if(_res.data.BPAs[i].valoracion=='rechazado'){
								continue;
							}						
							
							if(_res.data.BPAs[i].temas==undefined){
								continue;
							}		
									
							if(_res.data.BPAs[i].temas[_idTema]==undefined){
								continue;
							}
							if(_res.data.BPAs[i].temas[_idTema].predominancia!='1'){
								continue;
							}
							
							
							if(_res.data.BPAs[i].zz_borrada!='1'){
								_modelo=document.getElementById('fmodelo').cloneNode(true);						
								_modelo.setAttribute('valoracion',_res.data.BPAs[i].valoracion);
								_modelo.setAttribute('id','f'+_res.data.BPAs[i].id);
								
								_modelo.setAttribute('name','f'+_res.data.BPAs[i].id);
								
								var str = "" + _res.data.BPAs[i].id;
								var pad = "0000"
								var ans = pad.substring(0, pad.length - str.length) + str
								
								_modelo.querySelector('#id').innerHTML=ans;
								_modelo.querySelector('#nombre').innerHTML=_res.data.BPAs[i].nombre;
								
								_modelo.querySelector('#descripcion').innerHTML=_res.data.BPAs[i].descripcion.replace(/(?:\r\n|\r|\n)/g, '<br />');
								_modelo.querySelector('#cuadro').innerHTML=_res.data.BPAs[i].recorte.replace(/(?:\r\n|\r|\n)/g, '<br />');
								
								for(_nn in _res.data.BPAs[i].escala){
									_taGid=_res.data.BPAs[i].escala[_nn].id_h_CLASescalas_id;
									_tag=document.createElement('div');
									_tag.innerHTML=_ClasesData.clases.escalas[_taGid].nombre;
									_modelo.querySelector('#escalas').appendChild(_tag);	
								}
								
								for(_nn in _res.data.BPAs[i].fases){
									_taGid=_res.data.BPAs[i].fases[_nn].id_h_CLASfases_id;
									_tag=document.createElement('div');
									_tag.innerHTML=_ClasesData.clases.fases[_taGid].nombre;
									_modelo.querySelector('#fases').appendChild(_tag);	
								}
								
								for(_nn in _res.data.BPAs[i].medio){
									_taGid=_res.data.BPAs[i].medio[_nn].id_h_CLASmedio_id;
									_tag=document.createElement('div');
									_tag.innerHTML=_ClasesData.clases.medio[_taGid].nombre;
									_modelo.querySelector('#medios').appendChild(_tag);	
								}
								
								for(_nn in _res.data.BPAs[i].tipo){
									_taGid=_res.data.BPAs[i].tipo[_nn].id_h_CLAStipos_id;
									_tag=document.createElement('div');
									_tag.innerHTML=_ClasesData.clases.tipos[_taGid].nombre;
									_modelo.querySelector('#tipos').appendChild(_tag);	
								}
								
								_tx=_res.data.BPAs[i].procedimiento.replace(/(?:\r\n|\r|\n)/g, '<br />');
								_spl=_tx.split('<br />');
								for(_nn in _spl){
									_ttx=_spl[_nn];
									
									if(_ttx.substr(0,2)=="- "){
										_ttx="• "+_ttx.substr(2);
									}else if(_ttx.substr(0,1)=="-"){
										_ttx="• "+_ttx.substr(1);
									}
									
								_modelo.querySelector('#procedimiento').innerHTML+="<p>"+_ttx+"</p>";
								}
								
								_tx=_res.data.BPAs[i].recursos.replace(/(?:\r\n|\r|\n)/g, '<br />');
								_spl=_tx.split('<br />');
								for(_nn in _spl){
								_modelo.querySelector('#recursos').innerHTML+="<p>"+_spl[_nn]+"</p>";
								}							
								
								_modelo.querySelector('#categoria').innerHTML=_CategNombre;
													
								_fuenteId=_res.data.BPAs[i].id_p_FUfuentes;
								_fuenteNo=_FuentesIndice[_fuenteId];
								
								_modelo.querySelector('#fuente').innerHTML=_res.data.BPAs[i].entidad+". ";
								
								_spl=_FuentesData[_fuenteNo].fecha.split('-');
								_modelo.querySelector('#fuente').innerHTML+=_spl[0]+". ";
								_modelo.querySelector('#fuente').innerHTML+=' "<i>'+_FuentesData[_fuenteNo].nombre+'"</i>.';
								_modelo.querySelector('#fuente').innerHTML+=' (pag: '+_res.data.BPAs[i].fuentepags+')';
								
								
								
								_largo=5-_fuenteId.length;
								_suss = "00000";
								_susOk = _suss.substring(0,_largo);
								_strFU=_susOk+_fuenteId;
								_p_img1="http://190.111.246.33/redsustentable/documentos/fuentes/imagenHD/"+_strFU+"/_0001.jpg";
								_img=document.createElement('a');
								_img.setAttribute('href',_p_img1);
								_img.innerHTML='Descargar imagen de tapa<br>';
								_modelo.appendChild(_img);
	
								
								_largo=4-_res.data.BPAs[i].fuentepags.length;
								_suss = "0000";
								_susOk = _suss.substring(0,_largo);
								_p_img1="http://190.111.246.33/redsustentable/documentos/fuentes/imagenHD/"+_strFU+"/_"+_susOk+_res.data.BPAs[i].fuentepags+".jpg";
								_img=document.createElement('a');
								_img.setAttribute('href',_p_img1);
								_img.innerHTML='Descargar imagen interior<br>';
								_modelo.appendChild(_img);
								
								
								
								_pagnum=parseInt(_res.data.BPAs[i].fuentepags)+1;
								_largo=4-(_pagnum.toString().length);
								console.log(_pagnum.length);
								_suss = "0000";
								_susOk = _suss.substring(0,_largo);							
								_p_img1="./documentos/fuentes/imagen/"+_strFU+"/_"+_susOk+_pagnum+".jpg";
								//_img=document.createElement('img');
								//_img.src=_p_img1;
								//_modelo.querySelector('#pagina').appendChild(_img);
								
								
								_modelo.querySelector('#transcripcion').innerHTML=_res.data.BPAs[i].copia.replace(/(?:\r\n|\r|\n)/g, '<br />');
								
								document.body.appendChild(_modelo);
								
								
								
								_h1=document.createElement('a');
								_h1.setAttribute('href','#f'+_res.data.BPAs[i].id);
								_h1.innerHTML=_res.data.BPAs[i].nombre+"<br>";
								_cont.appendChild(_h1);
								if(_BPAcargadasCat==0){
									_hC1.setAttribute('href','#f'+_res.data.BPAs[i].id);
								}
								_BPAcargadasCat++;
	
							}
						}	
					}
					
					if(_BPAcargadasCat==0){
						_h1.parentNode.removeChild(_hC1);
					}
				}
			}
		}
	})			
 }  
 
function limpiaBPA(){
	if(_statusROJO>0){
	 var retVal = confirm("¿segura/o? vas a perder lo que no estér guardado (marcado en rojo)");
	   if( retVal == false ){
	      return;
	   }
	}	
	cerrar(document.getElementById('Bcerrar'));
	desmarcaCambiante();	
	_desel=document.getElementById('indiceBPAs').querySelectorAll('.bpa');
	for(_nn in _desel){
		//console.log(typeof _desel[_nn]);
		if(typeof _desel[_nn]=='object'){
		_desel[_nn].removeAttribute('estado');
		}
	}

	_desel=document.getElementById('indicefuentes').querySelectorAll('.fuente');
	for(_nn in _desel){
		//console.log(typeof _desel[_nn]);
		if(typeof _desel[_nn]=='object'){
		_desel[_nn].removeAttribute('marcado');
		}
	}
	vaciarFormulario();	
}
	
function formulaBPA(_this){
	
	limpiaBPA();

	_id= _this.getAttribute('idreg');
	_idBPA=_id;
	_campos=['Iid','Inombre','Ifuente','Ientidad','Iid_p_FUfuentes','Ifuentepags','Ivaloracion','Ifecha','Idescripcion','Iobservaciones','Iprocedimiento','Irecorte','Irecursos','Icopia'];
	
	
	_marcado=document.querySelectorAll('#indiceclases div > a');
	for(_idesc in _marcado){
		if(typeof _marcado[_idesc] == 'object'){		
		_marcado[_idesc].setAttribute('marcado','no');
		_marcado[_idesc].setAttribute('predominancia','0');
		}
	}
	
	_marcado=document.querySelectorAll('#indicetemas a');
	for(_idesc in _marcado){
		if(typeof _marcado[_idesc] == 'object'){		
		_marcado[_idesc].setAttribute('marcado','no');
		_marcado[_idesc].setAttribute('predominancia','0');
		}
	}
	
	for(_i in _campos){
		_cc=_campos[_i].substring(1);
		if(_DataBPAs['bpa'+_id][_cc] != undefined){
			document.getElementById(_campos[_i]).value=_DataBPAs['bpa'+_id][_cc];
		}
	}
	
	
	for(_idesc in _DataBPAs['bpa'+_id]['escala']){		
		_str='#indiceclases div[clasif="escalas"] > a[idreg="'+_idesc+'"]';
		//console.log(_str);
		_aes=document.querySelector('#indiceclases div[clasif="escalas"] > a[idreg="'+_idesc+'"]');
		_aes.setAttribute('marcado','si');
		
	}

	
	for(_idesc in _DataBPAs['bpa'+_id]['fases']){		
		_str='#indiceclases div[clasif="fases"] > a[idreg="'+_idesc+'"]';
		//console.log(_str);
		_aes=document.querySelector('#indiceclases div[clasif="fases"] > a[idreg="'+_idesc+'"]');
		_aes.setAttribute('marcado','si');
	}

	for(_idesc in _DataBPAs['bpa'+_id]['medio']){		
		_str='#indiceclases div[clasif="medio"] > a[idreg="'+_idesc+'"]';
		//console.log(_str);
		_aes=document.querySelector('#indiceclases div[clasif="medio"] > a[idreg="'+_idesc+'"]');
		_aes.setAttribute('marcado','si');
	}
	
	for(_idesc in _DataBPAs['bpa'+_id]['tipo']){		
		_str='#indiceclases div[clasif="tipos"] > a[idreg="'+_idesc+'"]';
		//console.log(_str);
		_aes=document.querySelector('#indiceclases div[clasif="tipos"] > a[idreg="'+_idesc+'"]');
		_aes.setAttribute('marcado','si');
	}	

	for(_idesc in _DataBPAs['bpa'+_id]['temas']){		
		_str='#indicetemas a[idreg="'+_idesc+'"]';
		//console.log(_str);
		_aes=document.querySelector(_str);
		_aes.setAttribute('marcado','si');
		_aes.setAttribute('onclick','sumaTema(this, 0);');
		
		
		_aes.setAttribute('predominancia',_DataBPAs['bpa'+_id]['temas'][_idesc].predominancia);
	}
		
	_idFu=_DataBPAs['bpa'+_id]['id_p_FUfuentes'];
	_idtagfu='FU'+_idFu;
	_divfu=document.getElementById(_idtagfu);
	_divfu.setAttribute('marcado','si');
	_divfu.parentNode.insertBefore(_divfu, _divfu.parentNode.firstChild);
	_divfu.parentNode.scrollTop = 0;
	
	navegar(_divfu);
	
	document.getElementById('botoncrear').style.display='none';
	document.getElementById('botoncambiar').style.display='block';
	
	_this.setAttribute('estado','formulado');

}
