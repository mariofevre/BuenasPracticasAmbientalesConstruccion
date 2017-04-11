/**
* fuentesaBPA.js
*
* funciones para llamar datos de Fuentes Bibliográficas y representarlos en fichas de BPA  
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

function asignar(_this){
	_id=_this.getAttribute('idreg');

	_desel=document.getElementById('indicefuentes').querySelectorAll('.fuente');
	for(_nn in _desel){
		//console.log(typeof _desel[_nn]);
		if(typeof _desel[_nn]=='object'){
		_desel[_nn].removeAttribute('marcado');
		}
	}

	_this.setAttribute('marcado','si');
	
	_inp=document.getElementById('Iid_p_FUfuentes');
	_inp.value=_id;
	if(_inp.getAttribute('estado')!='cambiante'){
		_inp.setAttribute('estado','cambiante');
		_statusROJO++;
	}
	
	_inp=document.getElementById('Ifuente');
	_inp.value=_this.querySelector('.nombre').innerHTML;
	if(_inp.getAttribute('estado')!='cambiante'){
		_inp.setAttribute('estado','cambiante');
		_statusROJO++;
	}
	
	_inp=document.getElementById('Ifecha');
	_inp.value=_this.querySelector('.fecha').innerHTML;
	if(_inp.getAttribute('estado')!='cambiante'){
		_inp.setAttribute('estado','cambiante');
		_statusROJO++;
	}
	
	_inp=document.getElementById('Ientidad');
	_inp.value=_this.querySelector('.entidad').innerHTML;
	if(_inp.getAttribute('estado')!='cambiante'){
		_inp.setAttribute('estado','cambiante');
		_statusROJO++;
	}

	_inp=document.getElementById('Ifuentepags');
	_inp.value='0';
	if(_inp.getAttribute('estado')!='cambiante'){
		_inp.setAttribute('estado','cambiante');
		_statusROJO++;
	}
}


function navegar(_this,_Npag){
		
  	_id=_this.getAttribute('idreg');
  	_pags=_this.getAttribute('pags');
  	if(_Npag==undefined){
  		document.getElementById('navegafuentes').setAttribute('pags',_pags);	
  	}
  	if(_Npag==_pags){
  		return;
  	}
  	
  	document.getElementById('navegafuentes').setAttribute('idreg',_id);
  	
  	
  	pad = "00000";
	_idstr = pad.substring(0, pad.length - _id.length) + _id;
	
	_carpetaLD="./documentos/fuentes/imagen/"+_idstr+"/";
	
	//console.log('np:'+_Npag);
	if(_Npag!=undefined&&_Npag!=0){
		_i=_Npag;	
	}else{
		_i=1;
	}
	_Ip=parseInt(_i)+15;
	//console.log('i:'+_i);
	_max=Math.min(_pags,_Ip);
	//console.log('i:'+_Ip);
	
	_tabla=document.getElementById('contenedorhojas');
	_tabla.setAttribute('fuenteId',_id);	
	
	if(_Npag==undefined){
		_tabla.innerHTML='';
	}
	//console.log('max:'+_max);
  	for(i=_i;i<=_max;i++){  		
  		_tr=document.createElement('div');
		_tr.setAttribute('class','hoja');
		_tr.setAttribute('hojaN',i);
		_tr.setAttribute('onclick','cargaHoja(this)');
		_tabla.appendChild(_tr);
		
		_dnum=document.createElement('div');
		_dnum.setAttribute('class','refNumP');
		_dnum.innerHTML=i;
		_tr.appendChild(_dnum);
		
		_td=document.createElement('img');
		_hpad = "0000";
		
		_stI=i.toString();
		_filN = "_"+_hpad.substring(0, _hpad.length - _stI.length) + _stI;
		
		_file=_carpetaLD+_filN+'.jpg';
		_td.setAttribute('src',_file);
		_td.setAttribute('hojaN',i);
		_tr.appendChild(_td);
  		document.getElementById('navegafuentes').setAttribute('pag',i);
  	}
  	
  	_estadodecarga = 'activo';
 }

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
				_tabla=document.getElementById('indicefuentes');
				
				if(_res.data.fuentes!=undefined){
				for(i=0;i<_res.data.fuentes.length;i++){
					
					if(_res.data.fuentes[i].zz_borrada!='1'){
						_navOk='si';
						
						_apdf=document.createElement('a');
						_pathbase='./documentos/fuentes/originales/';
						
						_faltan=5-_res.data.fuentes[i]['id'].length;
						_idst=_res.data.fuentes[i]['id'];
						for(h=0;h<_faltan;h++){
							//console.log('maisum');
							_idst="0"+_idst;
						}
						_href=_pathbase+_idst+'.pdf';						
						_apdf.setAttribute('href',_href);
						_apdf.setAttribute('download','');
						_apdf.innerHTML='pdf'
						
						_divpdf=document.createElement('div');
						_divpdf.appendChild(_apdf);
						_divpdf.setAttribute('class','portaapdf')
						_tabla.appendChild(_divpdf);
						
											
						_tr=document.createElement('div');
						_tr.setAttribute('class','fuente');
						_tr.setAttribute('idreg',_res.data.fuentes[i].id);
						
						_tr.setAttribute('id','FU'+_res.data.fuentes[i].id);
						_tabla.appendChild(_tr);
						
						_td=document.createElement('div');
						_td.setAttribute('class','nombre');
						_td.innerHTML=_res.data.fuentes[i]['nombre'];
						
						_td.innerHTML+="<div class='oculto entidad'>"+_res.data.fuentes[i]['entidad']+"</div>";
						_td.innerHTML+="<div class='oculto fecha'>"+_res.data.fuentes[i]['fecha']+"</div>";
						
						_tr.appendChild(_td);
											
						_td=document.createElement('div');
						_td.setAttribute('class','scan');
												
						
						$split=_res.data.fuentes[i]['zz_escaneado'].split("_");
						_tr.setAttribute('pags',$split[1]);
						if($split[0]!=$split[1]){
							_aaa=document.createElement('a');
							_aaa.setAttribute('estado',_res.data.fuentes[i]['zz_escaneado']);
							_aaa.setAttribute('name','scanner');
							_aaa.setAttribute('id','sc'+_res.data.fuentes[i].id);
							_aaa.setAttribute('onclick','escanear(this,"");');
							_aaa.innerHTML=' scan';
							_td.appendChild(_aaa);	
							_navOk='no';
						}else{
							_scanStat="ok";
						}
						
					
						$split=_res.data.fuentes[i]['zz_escaneadoHD'].split("_");
						if($split[0]!=$split[1]){
							_aaa=document.createElement('a');
							_aaa.setAttribute('estado',_res.data.fuentes[i]['zz_escaneadoHD']);
							_aaa.setAttribute('name','scanner');
							_aaa.setAttribute('id','sc'+_res.data.fuentes[i].id);
							_aaa.setAttribute('onclick','escanear(this,"HD");');
							_aaa.innerHTML=_res.data.fuentes[i]['zz_escaneadoHD']+' scanHD';
							_td.appendChild(_aaa);	
							_navOk='no';
						}else{
							_scanHdStat="ok";
						}
						_tr.appendChild(_td);
						
						
						if(_scanStat=="ok"){
						_img=document.createElement('img');
						_pathbase='./documentos/fuentes/imagen/';
						_faltan=5-_res.data.fuentes[i]['id'].length;
						_idst=_res.data.fuentes[i]['id'];
						for(h=0;h<_faltan;h++){
							//console.log('maisum');
							_idst="0"+_idst;
						}
						_img.src=_pathbase+_idst+'/_0001.jpg';
						_td.appendChild(_img);
						}else{
							_scanHdStat="ok";
						}
												
						if(_navOk=='si'){
							_tr.setAttribute('onclick','navegar(this);asignar(this);');
						}else{
							_tr.setAttribute('onclick','alert("esta fuente no fue escaneada para navegar aún")');
						}
						
					}
				}
				}
			}
		}
	})			
 }   


function cargarFuentesFichas(_id){
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
				
				_FuentesData=_res.data.fuentes;
				_FuentesIndice=_res.data.indice;
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
								_aaa.innerHTML='escanear';								
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
   
   
function cargaHoja(_this){	
 		console.log(_this);
		_id = _this.parentNode.parentNode.getAttribute('idreg');
		_Hnum = _this.getAttribute('hojan');
	
		pad = "00000";
		_idstr = pad.substring(0, pad.length - _id.length) + _id;	
		_carpetaLD="./documentos/fuentes/imagenHD/"+_idstr+"/";
		
		_hpad = "0000";		
		_stI=_Hnum.toString();
		_filN = "_"+_hpad.substring(0, _hpad.length - _stI.length) + _stI;
		
		_file=_carpetaLD+_filN+'.jpg';
		_td.setAttribute('src',_file);
		
		_ver=document.getElementById('verHoja');
		_ver.parentNode.setAttribute('idreg',_id);
		_ver.parentNode.setAttribute('hojan',_Hnum);
		_ver.innerHTML='';
		_td=document.createElement('img');
		_td.setAttribute('src',_file);
		//_td.setAttribute('onload',"this.width/=2;");
		_td.setAttribute('hojaN',i);
		_ver.appendChild(_td);
		_ver.parentNode.style.display='block';		
		
		
		
		_inp=document.getElementById('Ifuentepags');
		_inp.value=_Hnum;
		if(_inp.getAttribute('estado')!='cambiante'){
			_inp.setAttribute('estado','cambiante');
			_statusROJO++;
		}
 }
 
 function siguiente(_this){	
 		console.log(_this);
		_id = _this.parentNode.parentNode.getAttribute('idreg');
		_Hnum = _this.parentNode.parentNode.getAttribute('hojaN');
		_Hnum = parseInt(_Hnum)+1;
		
		pad = "00000";
		_idstr = pad.substring(0, pad.length - _id.length) + _id;	
		_carpetaLD="./documentos/fuentes/imagenHD/"+_idstr+"/";
		
		_hpad = "0000";		
		_stI=_Hnum.toString();
		_filN = "_"+_hpad.substring(0, _hpad.length - _stI.length) + _stI;
		
		_file=_carpetaLD+_filN+'.jpg';
		_td.setAttribute('src',_file);
		
		_ver=document.getElementById('verHoja');
		_ver.parentNode.setAttribute('idreg',_id);
		_ver.parentNode.setAttribute('hojan',_Hnum);
		_ver.innerHTML='';
		_td=document.createElement('img');
		_td.setAttribute('src',_file);
		_td.setAttribute('onload',"this.width/=2;");
		_td.setAttribute('hojaN',i);
		_ver.appendChild(_td);
		_ver.parentNode.style.display='block';		
 } 
  function anterior(_this){	
 		console.log(_this);
		_id = _this.parentNode.getAttribute('idreg');
		_Hnum = _this.parentNode.parentNode.getAttribute('hojaN');
		_Hnum = parseInt(_Hnum)-1;
		
		pad = "00000";
		_idstr = pad.substring(0, pad.length - _id.length) + _id;	
		_carpetaLD="./documentos/fuentes/imagenHD/"+_idstr+"/";
		
		_hpad = "0000";		
		_stI=_Hnum.toString();
		_filN = "_"+_hpad.substring(0, _hpad.length - _stI.length) + _stI;
		
		_file=_carpetaLD+_filN+'.jpg';
		_td.setAttribute('src',_file);
		
		_ver=document.getElementById('verHoja');
		_ver.parentNode.setAttribute('idreg',_id);
		_ver.parentNode.setAttribute('hojan',_Hnum);
		_ver.innerHTML='';
		_td=document.createElement('img');
		_td.setAttribute('src',_file);
		_td.setAttribute('onload',"this.width/=2;");
		_td.setAttribute('hojaN',i);
		_ver.appendChild(_td);
		_ver.parentNode.style.display='block';		
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