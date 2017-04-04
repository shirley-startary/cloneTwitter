var comentarios=[];
var contadorCliks=0;

document.getElementById("botonEnviar").addEventListener("click", crearComentario);

var areaDeComentario=document.getElementById("comentario");
areaDeComentario.addEventListener("keydown",cuentaCaracteres);
areaDeComentario.addEventListener("keyup",cuentaCaracteres);

document.addEventListener("click",cuentaClicks);

function Publicaciones(comentario,autor){
  this.comentario=comentario;
  this.autor=autor;
}


function crearComentario(){
  var seccionComentarios=document.getElementById("visualizarComentario");

  var comentario = document.getElementById("comentario").value;
  //console.log(comentario);
  var autor=document.getElementById("autor").value;

  var articulo=document.createElement("article");
  var nombreAutor=document.createElement("span");

  seccionComentarios.appendChild(articulo);
  seccionComentarios.appendChild(nombreAutor);

  articulo.innerText="Twita: "+comentario;
  nombreAutor.innerText="Por: "+autor;

  var publicacion =new Publicaciones(comentario,autor);
  comentarios.push(publicacion);

  console.log(publicacion);

  console.log(comentarios);
}

function cuentaCaracteres(){
  var contador=document.getElementById("contador")
  var comentario = document.getElementById("comentario");
  contador.innerText=comentario.value.length+"/140";
  console.log(contador);
}

function cuentaClicks(){
  contadorCliks++
  var muestraClicks=document.getElementById("muestraClicks");
  muestraClicks.innerText=contadorCliks;
}
