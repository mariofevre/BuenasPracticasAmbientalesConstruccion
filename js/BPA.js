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
			             
			$(function() {
				$('tr.fuente').click(function() {
					formularFuentes(this.getAttribute('idreg'));
				});
			});	
			
			_ClasesCargadas='si';
		}
	})			
	
}

function cargarClasesVar(){//carga las clases como variables al dom pero no genera html	
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
			
	$.ajax({
		data:  parametros,
		url:   'cons_BPAs_ajax.php',
		type:  'post',
		success:  function (response){
			var _res = $.parseJSON(response);
			console.log(_res);			
				
			if(_res.res=='exito'){
				_cont=document.getElementById('indiceBPAs');
				_cont.innerHTML='';
				
				if(_res.data.BPAs!=undefined){
				_DataBPAs=_res.data.BPAs;
				for(i in _res.data.BPAs){
					
					if(_res.data.BPAs[i].zz_borrada!='1'){					
					_div=document.createElement('a');
					_div.setAttribute('class','bpa');
					_div.setAttribute('onclick','formulaBPA(this)');
					_div.setAttribute('idreg',_res.data.BPAs[i].id);
					_div.setAttribute('id','bpa'+_res.data.BPAs[i].id);
					_div.innerHTML=_res.data.BPAs[i].nombre;
					_cont.appendChild(_div);
					
					
					/*
					
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
					}*/
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
				_cont.innerHTML='';
				
				if(_res.data.BPAs!=undefined){
				_DataBPAs=_res.data.BPAs;
					for(i in _res.data.BPAs){					
						if(_res.data.BPAs[i].zz_borrada!='1'){
							_modelo=document.getElementById('fmodelo').cloneNode(true);						
							_modelo.setAttribute('valoracion',_res.data.BPAs[i].valoracion);
							_modelo.setAttribute('id','f'+_res.data.BPAs[i].id);
							_modelo.querySelector('#id').innerHTML=_res.data.BPAs[i].id;
							_modelo.querySelector('#nombre').innerHTML=_res.data.BPAs[i].nombre;
							_modelo.querySelector('#descripcion').innerHTML=_res.data.BPAs[i].descripcion.replace(/(?:\r\n|\r|\n)/g, '<br />');
							
							
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
							_modelo.querySelector('#procedimiento').innerHTML+="<p>"+_spl[_nn]+"</p>";
							}
							
							_tx=_res.data.BPAs[i].recursos.replace(/(?:\r\n|\r|\n)/g, '<br />');
							_spl=_tx.split('<br />');
							for(_nn in _spl){
							_modelo.querySelector('#recursos').innerHTML+="<p>"+_spl[_nn]+"</p>";
							}							
														
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
							_modelo.querySelector('#tapa').appendChild(_img);


							_largo=4-_res.data.BPAs[i].fuentepags.length;
							_suss = "0000";
							_susOk = _suss.substring(0,_largo);

							_p_img1="./documentos/fuentes/imagen/"+_strFU+"/_"+_susOk+_res.data.BPAs[i].fuentepags+".jpg";
							_img=document.createElement('img');
							_img.src=_p_img1;
							_modelo.querySelector('#pagina').appendChild(_img);
							
							_pagnum=parseInt(_res.data.BPAs[i].fuentepags)+1;
							_largo=4-(_pagnum.toString().length);
							console.log(_pagnum.length);
							_suss = "0000";
							_susOk = _suss.substring(0,_largo);							
							_p_img1="./documentos/fuentes/imagen/"+_strFU+"/_"+_susOk+_pagnum+".jpg";
							_img=document.createElement('img');
							_img.src=_p_img1;
							_modelo.querySelector('#pagina').appendChild(_img);


						
							
							_modelo.querySelector('#transcripcion').innerHTML='" '+_res.data.BPAs[i].copia.replace(/(?:\r\n|\r|\n)/g, '<br />')+' "';
							
							document.body.appendChild(_modelo);
							
							_div=document.createElement('a');
							_div.setAttribute('class','bpa');
							_div.setAttribute('onclick','formulaBPA(this)');
							_div.setAttribute('idreg',_res.data.BPAs[i].id);
							_div.setAttribute('id','bpa'+_res.data.BPAs[i].id);
							_div.innerHTML=_res.data.BPAs[i].nombre;
							_cont.appendChild(_div);
						}
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
		console.log(typeof _desel[_nn]);
		if(typeof _desel[_nn]=='object'){
		_desel[_nn].removeAttribute('estado');
		}
	}

	_desel=document.getElementById('indicefuentes').querySelectorAll('.fuente');
	for(_nn in _desel){
		console.log(typeof _desel[_nn]);
		if(typeof _desel[_nn]=='object'){
		_desel[_nn].removeAttribute('marcado');
		}
	}
	vaciarFormulario();	
}
	
function formulaBPA(_this){
	
	limpiaBPA();

	_id= _this.getAttribute('idreg');
	_campos=['Iid','Inombre','Ifuente','Ientidad','Iid_p_FUfuentes','Ifuentepags','Ivaloracion','Ifecha','Idescripcion','Iobservaciones','Iprocedimiento','Irecursos','Icopia'];
	
	
	_marcado=document.querySelectorAll('#indiceclases div > a');
	for(_idesc in _marcado){
		if(typeof _marcado[_idesc] == 'object'){		
		_marcado[_idesc].setAttribute('marcado','no');
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


/*
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
*/