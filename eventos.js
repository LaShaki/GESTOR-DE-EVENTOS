
// VARIABLES GLOBALES
// ════════════════════════════════════════════════════════

let listaEventos  = [];       // Array donde guardamos todos los eventos
let contadorId    = 1;        // ID único para cada evento
let filtroActivo  = "todos";  // Filtro seleccionado
let textoBusqueda = "";       // Texto escrito en el buscador



//ESTRUCTURA DEL HTML DIVISORES y ENCABEZADO

const app = document.getElementById("app");

// -- Creamos el ENCABEZADO y lo metemos en app --
const encabezado = document.createElement("header");
encabezado.id = "encabezado";

const h1 = document.createElement("h1");
h1.textContent = "🧠💭​​ Gestor de Eventos"; //He cogido el emoji de una pagina web: https://emojikeyboard.top/es/
encabezado.appendChild(h1);

const contadores = document.createElement("div");
contadores.className = "contadores";

let badgeTotal = document.createElement("span");
badgeTotal.className = "contador-badge";
badgeTotal.id = "contador-total";
badgeTotal.textContent = "0 eventos";
contadores.appendChild(badgeTotal);

let badgeFavs = document.createElement("span");
badgeFavs.className = "contador-badge";
badgeFavs.id = "contador-favs";
badgeFavs.textContent = "0 favoritos";
contadores.appendChild(badgeFavs);

encabezado.appendChild(contadores);
app.appendChild(encabezado);

// -- CONTENIDO PRINCIPAL --
const contenidoPrincipal = document.createElement("div");
contenidoPrincipal.id = "contenido-principal";
app.appendChild(contenidoPrincipal);

// -- Columna izquierda --
const columnaIzquierda = document.createElement("div");
columnaIzquierda.id = "columna-izquierda";
contenidoPrincipal.appendChild(columnaIzquierda);

// -- Columna derecha --
const columnaDerecha = document.createElement("div");
columnaDerecha.id = "columna-derecha";
contenidoPrincipal.appendChild(columnaDerecha);




// FORMULARIO dentro de la columna izquierda
// ════════════════════════════════════════════════════════

// Caja del formulario
const cajaFormulario = document.createElement("div");
cajaFormulario.className = "caja";
columnaIzquierda.appendChild(cajaFormulario);

const tituloFormulario = document.createElement("div");
tituloFormulario.className = "caja-titulo";
tituloFormulario.textContent = "✦ Nuevo Evento";
cajaFormulario.appendChild(tituloFormulario);

const cuerpoFormulario = document.createElement("div");
cuerpoFormulario.className = "caja-cuerpo";
cajaFormulario.appendChild(cuerpoFormulario);

// -- Campo: Título --
const grupoTitulo = document.createElement("div");
grupoTitulo.className = "grupo-campo";
cuerpoFormulario.appendChild(grupoTitulo);

const labelTitulo = document.createElement("label");
labelTitulo.textContent = "Título";
labelTitulo.setAttribute("for", "campo-titulo");
grupoTitulo.appendChild(labelTitulo);

const campoTitulo = document.createElement("input");
campoTitulo.type = "text";
campoTitulo.id = "campo-titulo";
campoTitulo.placeholder = "Nombre del evento...";
grupoTitulo.appendChild(campoTitulo);

const errorTitulo = document.createElement("span");
errorTitulo.className = "mensaje-error";
errorTitulo.id = "error-titulo";
errorTitulo.textContent = "Escribe al menos 3 caracteres.";
grupoTitulo.appendChild(errorTitulo);

// -- Campo: Descripción --
const grupoDescripcion = document.createElement("div");
grupoDescripcion.className = "grupo-campo";
cuerpoFormulario.appendChild(grupoDescripcion);

const labelDescripcion = document.createElement("label");
labelDescripcion.textContent = "Descripción";
labelDescripcion.setAttribute("for", "campo-descripcion");
grupoDescripcion.appendChild(labelDescripcion);

const campoDescripcion = document.createElement("textarea");
campoDescripcion.id = "campo-descripcion";
campoDescripcion.placeholder = "¿De qué trata el evento?";
grupoDescripcion.appendChild(campoDescripcion);

const errorDescripcion = document.createElement("span");
errorDescripcion.className = "mensaje-error";
errorDescripcion.id = "error-descripcion";
errorDescripcion.textContent = "La descripción no puede estar vacía.";
grupoDescripcion.appendChild(errorDescripcion);

// -- Campo: Fecha --
const grupoFecha = document.createElement("div");
grupoFecha.className = "grupo-campo";
cuerpoFormulario.appendChild(grupoFecha);

let labelFecha = document.createElement("label");
labelFecha.textContent = "Fecha";
labelFecha.setAttribute("for", "campo-fecha");
grupoFecha.appendChild(labelFecha);

let campoFecha = document.createElement("input");
campoFecha.type = "date";
campoFecha.id = "campo-fecha";
grupoFecha.appendChild(campoFecha);

const errorFecha = document.createElement("span");
errorFecha.className = "mensaje-error";
errorFecha.id = "error-fecha";
errorFecha.textContent = "Selecciona una fecha.";
grupoFecha.appendChild(errorFecha);

// -- Campo: Categoría --
const grupoCategoria = document.createElement("div");
grupoCategoria.className = "grupo-campo";
cuerpoFormulario.appendChild(grupoCategoria);

const labelCategoria = document.createElement("label");
labelCategoria.textContent = "Categoría";
labelCategoria.setAttribute("for", "campo-categoria");
grupoCategoria.appendChild(labelCategoria);

let campoCategoria = document.createElement("select");
campoCategoria.id = "campo-categoria";
grupoCategoria.appendChild(campoCategoria);

// Creamos las opciones del select en un bucle
let opcionesCategoria = [
  { valor: "",         texto: "-- Selecciona --" },
  { valor: "trabajo",  texto: "Trabajo"  },
  { valor: "personal", texto: "Personal" },
  { valor: "salud",    texto: "Salud"    },
  { valor: "social",   texto: "Social"   },
  { valor: "otro",     texto: "Otro"     }
];

for (let i = 0; i < opcionesCategoria.length; i++) {
  const opcion = document.createElement("option");
  opcion.value = opcionesCategoria[i].valor;
  opcion.textContent = opcionesCategoria[i].texto;
  campoCategoria.appendChild(opcion);
}

const errorCategoria = document.createElement("span");
errorCategoria.className = "mensaje-error";
errorCategoria.id = "error-categoria";
errorCategoria.textContent = "Elige una categoría.";
grupoCategoria.appendChild(errorCategoria);

// -- Botón de crear --
const btnCrear = document.createElement("button");
btnCrear.id = "btn-crear";
btnCrear.textContent = "+ Añadir Evento";
cuerpoFormulario.appendChild(btnCrear);




// BUSCADOR dentro de la columna izquierda
// ════════════════════════════════════════════════════════

const cajaBuscador = document.createElement("div");
cajaBuscador.className = "caja";
columnaIzquierda.appendChild(cajaBuscador);

const tituloBuscador = document.createElement("div");
tituloBuscador.className = "caja-titulo";
tituloBuscador.textContent = "⌕ Buscar y filtrar";
cajaBuscador.appendChild(tituloBuscador);

const cuerpoBuscador = document.createElement("div");
cuerpoBuscador.className = "caja-cuerpo";
cajaBuscador.appendChild(cuerpoBuscador);

let inputBuscar = document.createElement("input");
inputBuscar.type = "text";
inputBuscar.id = "input-buscar";
inputBuscar.placeholder = "Buscar eventos...";
cuerpoBuscador.appendChild(inputBuscar);

// Contenedor de chips de filtro
const divFiltros = document.createElement("div");
divFiltros.id = "filtros";
cuerpoBuscador.appendChild(divFiltros);

// Creamos los chips en un bucle
let opcionesFiltro = [
  { valor: "todos",     texto: "Todos"        },
  { valor: "favoritos", texto: "⭐ Favoritos" },
  { valor: "trabajo",   texto: "Trabajo"      },
  { valor: "personal",  texto: "Personal"     },
  { valor: "salud",     texto: "Salud"        },
  { valor: "social",    texto: "Social"       },
  { valor: "otro",      texto: "Otro"         }
];

for (let i = 0; i < opcionesFiltro.length; i++) {
  const chip = document.createElement("button");
  chip.className = "chip-filtro";
  chip.textContent = opcionesFiltro[i].texto;
  chip.setAttribute("data-filtro", opcionesFiltro[i].valor);

  // El primero empieza activo
  if (opcionesFiltro[i].valor === "todos") {
    chip.classList.add("activo");
  }

  divFiltros.appendChild(chip);
}



// SECCIÓN DE EVENTOS en la columna derecha
// ════════════════════════════════════════════════════════

const tituloLista = document.createElement("h2");
tituloLista.id = "titulo-lista";
tituloLista.textContent = "Todos los eventos";
columnaDerecha.appendChild(tituloLista);

const listaEventosDiv = document.createElement("div");
listaEventosDiv.id = "lista-eventos";
columnaDerecha.appendChild(listaEventosDiv);




// Validación del formulario
// ════════════════════════════════════════════════════════

function validarFormulario() {
  let hayErrores = false;

  limpiarErrores();

  if (campoTitulo.value.trim().length < 3) { //Ponemos un mínimo de 3 caracteres 
    mostrarError("error-titulo", campoTitulo);
    hayErrores = true;
  }

  if (campoDescripcion.value.trim() === "") { 
    mostrarError("error-descripcion", campoDescripcion); //No se admite espacio en blanco 
    hayErrores = true;
  }

  if (campoFecha.value === "") {
    mostrarError("error-fecha", campoFecha); //La fecha no puede estar sin valor
    hayErrores = true;
  }

  if (campoCategoria.value === "") {
    mostrarError("error-categoria", campoCategoria); //Debe tener categoria
    hayErrores = true;
  }

  return !hayErrores;
}

//Decimos lo que hace la funcion mostrarError y limpiarErrores que llamamos arriba

function mostrarError(idMensaje, campo) {
  document.getElementById(idMensaje).classList.add("visible");  
  campo.classList.add("campo-error");
}

function limpiarErrores() {
  const mensajes = document.querySelectorAll(".mensaje-error");
  for (let i = 0; i < mensajes.length; i++) {
    mensajes[i].classList.remove("visible");
  }
  const camposConError = document.querySelectorAll(".campo-error");
  for (let i = 0; i < camposConError.length; i++) {
    camposConError[i].classList.remove("campo-error");
  }
}


// Funcion para crear un NUEVO EVENTO
// ════════════════════════════════════════════════════════

function crearEvento() {
  if (!validarFormulario()) return;

  let nuevoEvento = {
    id:          contadorId,
    titulo:      campoTitulo.value.trim(),
    descripcion: campoDescripcion.value.trim(),
    fecha:       campoFecha.value,
    categoria:   campoCategoria.value,
    favorito:    false
  };

  listaEventos.unshift(nuevoEvento); //Usamos unshift en vez de push para que el nuevo evento aparezca al principio del array
  contadorId = contadorId + 1;

  // Limpiamos el formulario
  campoTitulo.value      = "";
  campoDescripcion.value = "";
  campoFecha.value       = "";
  campoCategoria.value   = "";

  mostrarEventos();
}


// Mostrar los eventos filtrados
// ════════════════════════════════════════════════════════

function mostrarEventos() {
    //Limpiamos el contenedor antes de volver a mostrar cualquier otra funcion para no estar acumulando los eventos y que salgan duplicados
  listaEventosDiv.innerHTML = ""; 

  // Filtramos por categoría o favoritos
  let eventosFiltrados = [];
  for (let i = 0; i < listaEventos.length; i++) {
    let evento = listaEventos[i];
    if (filtroActivo === "todos") {
      eventosFiltrados.push(evento);
    } else if (filtroActivo === "favoritos" && evento.favorito === true) {
      eventosFiltrados.push(evento);
    } else if (evento.categoria === filtroActivo) {
      eventosFiltrados.push(evento);
    }
  }

  // Filtramos por texto de búsqueda
  //Recorremos el array buscando alguna coincidencia y cuando esta se de, la almacenamos en resultado
  if (textoBusqueda !== "") {
    let resultado = [];
    for (let i = 0; i < eventosFiltrados.length; i++) {
      let evento = eventosFiltrados[i];
      if (
        evento.titulo.toLowerCase().includes(textoBusqueda.toLowerCase()) || //Lo pasamos todo a minúsculas para que no hayan errores
        evento.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase())
      ) {
        resultado.push(evento);
      }
    }
    eventosFiltrados = resultado;
  }

  // Si no hay eventos, mostramos mensaje vacío
  if (eventosFiltrados.length === 0) {
    const divVacio = document.createElement("div");
    divVacio.id = "estado-vacio";

    const icono = document.createElement("div");
    icono.className = "icono-vacio";
    icono.textContent = "🗓️";
    divVacio.appendChild(icono);

    const texto = document.createElement("p");
    texto.textContent = listaEventos.length === 0
      ? "Todavía no hay eventos. ¡Crea el primero!"
      : "No hay eventos que coincidan con tu búsqueda.";
    divVacio.appendChild(texto);

    listaEventosDiv.appendChild(divVacio);

  } else {
    // Pintamos cada evento
    for (let i = 0; i < eventosFiltrados.length; i++) {
      let tarjeta = crearTarjeta(eventosFiltrados[i]); 
      listaEventosDiv.appendChild(tarjeta);
    }
  }

  actualizarContadores();
}



//Crear la tarjeta de un evento
// ════════════════════════════════════════════════════════

function crearTarjeta(evento) {
  // Contenedor principal de la tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta-evento";

  // guardamos datos en atributos data
  tarjeta.setAttribute("data-id", evento.id);
  tarjeta.setAttribute("data-categoria", evento.categoria);
  tarjeta.setAttribute("data-favorito", evento.favorito);

  if (evento.favorito) {
    tarjeta.classList.add("es-favorita");
  }

  // Franja de color según categoría
  const franja = document.createElement("div");
  franja.className = "franja-categoria franja-" + evento.categoria;
  tarjeta.appendChild(franja);

  // Cuerpo de la tarjeta
  const cuerpo = document.createElement("div");
  cuerpo.className = "cuerpo-tarjeta";
  tarjeta.appendChild(cuerpo);

  // Línea de meta (categoría + fecha)
  const meta = document.createElement("div");
  meta.className = "meta-tarjeta";
  cuerpo.appendChild(meta);

  const etiqueta = document.createElement("span");
  etiqueta.className = "etiqueta-categoria etiqueta-" + evento.categoria;
  etiqueta.textContent = evento.categoria;
  meta.appendChild(etiqueta);

  // Formateamos la fecha de AAAA-MM-DD a DD/MM/AAAA
  let partes = evento.fecha.split("-");
  let fechaMostrada = partes[2] + "/" + partes[1] + "/" + partes[0];

  const fecha = document.createElement("span");
  fecha.className = "fecha-tarjeta";
  fecha.textContent = "📅 " + fechaMostrada;
  meta.appendChild(fecha);

  // Título
  const titulo = document.createElement("h3");
  titulo.className = "titulo-tarjeta";
  titulo.textContent = evento.titulo;
  cuerpo.appendChild(titulo);

  // Descripción
  const descripcion = document.createElement("p");
  descripcion.className = "descripcion-tarjeta";
  descripcion.textContent = evento.descripcion;
  cuerpo.appendChild(descripcion);

  // Zona de botones
  const acciones = document.createElement("div");
  acciones.className = "acciones-tarjeta";
  tarjeta.appendChild(acciones);

  const btnFavorito = document.createElement("button");
  btnFavorito.className = "btn-accion btn-favorito" + (evento.favorito ? " activo" : "");
  btnFavorito.textContent = evento.favorito ? "★ Favorito" : "☆ Favorito";
  btnFavorito.setAttribute("data-accion", "favorito");
  acciones.appendChild(btnFavorito);

  const btnEliminar = document.createElement("button");
  btnEliminar.className = "btn-accion btn-eliminar";
  btnEliminar.textContent = "✕ Eliminar";
  btnEliminar.setAttribute("data-accion", "eliminar");
  acciones.appendChild(btnEliminar);

  return tarjeta;
}


// Eliminar un evento
// ════════════════════════════════════════════════════════

function eliminarEvento(id) {
  for (let i = 0; i < listaEventos.length; i++) {
    if (listaEventos[i].id === id) {
      listaEventos.splice(i, 1); // elimina 1 elemento en la posición i
      break;
    }
  }
  mostrarEventos();
}


//  Marcar/desmarcar favorito
// ════════════════════════════════════════════════════════

function toggleFavorito(id) {
  for (let i = 0; i < listaEventos.length; i++) {
    if (listaEventos[i].id === id) {
      listaEventos[i].favorito = !listaEventos[i].favorito;
      break;
    }
  }
  mostrarEventos();
}


// Actualizar contadores del encabezado
// ════════════════════════════════════════════════════════

function actualizarContadores() {
  let totalFavoritos = 0;
  for (let i = 0; i < listaEventos.length; i++) {
    if (listaEventos[i].favorito === true) {
      totalFavoritos = totalFavoritos + 1;
    }
  }
  document.getElementById("contador-total").textContent = listaEventos.length + " eventos";
  document.getElementById("contador-favs").textContent  = totalFavoritos + " favoritos";
}


// Conectamos botones y campos
// ════════════════════════════════════════════════════════

// Clic en "Añadir Evento"
btnCrear.addEventListener("click", function() {
  crearEvento();
});

// Escritura en el buscador → filtrar en tiempo real
inputBuscar.addEventListener("input", function() {
  textoBusqueda = inputBuscar.value;
  mostrarEventos();
});

// Limpiar error al empezar a escribir en cada campo
campoTitulo.addEventListener("input", function() {
  campoTitulo.classList.remove("campo-error");
  document.getElementById("error-titulo").classList.remove("visible");
});

campoDescripcion.addEventListener("input", function() {
  campoDescripcion.classList.remove("campo-error");
  document.getElementById("error-descripcion").classList.remove("visible");
});

campoFecha.addEventListener("input", function() {
  campoFecha.classList.remove("campo-error");
  document.getElementById("error-fecha").classList.remove("visible");
});

campoCategoria.addEventListener("change", function() {
  campoCategoria.classList.remove("campo-error");
  document.getElementById("error-categoria").classList.remove("visible");
});


//!!!! Delegación de eventos en la lista!!!!
//
// Un solo listener en el contenedor padre gestiona los clics
// de TODOS los botones de TODAS las tarjetas.
// ════════════════════════════════════════════════════════

listaEventosDiv.addEventListener("click", function(e) {
  // APARTADO 7: subimos por el DOM hasta encontrar el botón con data-accion
  const boton = e.target.closest("[data-accion]");
  if (!boton) return; // si el clic no fue en un botón, salimos

  // subimos hasta encontrar la tarjeta contenedora
  const tarjeta = boton.closest(".tarjeta-evento");
  const id = parseInt(tarjeta.getAttribute("data-id"));
  const accion = boton.getAttribute("data-accion");

  if (accion === "eliminar") {
    eliminarEvento(id);
  }

  if (accion === "favorito") {
    toggleFavorito(id);
  }
});


// Clic en los chips de filtro
// ════════════════════════════════════════════════════════

let chips = document.querySelectorAll(".chip-filtro");

for (let i = 0; i < chips.length; i++) {
  chips[i].addEventListener("click", function() {
    // Quitamos "activo" de todos
    for (let j = 0; j < chips.length; j++) {
      chips[j].classList.remove("activo");
    }
    // Se lo ponemos al pulsado
    this.classList.add("activo");

// Actualizamos el filtro y el título
    filtroActivo = this.getAttribute("data-filtro");

//cambiamos el texto del título según el filtro
    const titulos = {
      "todos":     "Todos los eventos",
      "favoritos": "⭐ Favoritos",
      "trabajo":   "Trabajo",
      "personal":  "Personal",
      "salud":     "Salud",
      "social":    "Social",
      "otro":      "Otro"
    };
    tituloLista.textContent = titulos[filtroActivo];

    mostrarEventos();
  });
}



// INICIO de la app web : dibujamos la lista (vacía) al cargar la página
// ════════════════════════════════════════════════════════

mostrarEventos();