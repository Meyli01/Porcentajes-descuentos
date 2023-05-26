// Definir una variable para almacenar el número del ejercicio actual
var numeroEjercicio = 1;
var resultadosEsperados = [40, 680, 35, 90, 30];
// Función para mostrar el resultado
function mostrarResultado(resultado) {
  var mensaje;
  var resultadoEsperado = resultadosEsperados[numeroEjercicio - 1];

  if (parseFloat(resultado) === resultadoEsperado) {
    mensaje = "¡Correcto!";
  } else {
    mensaje = "Incorrecto";
  }

  document.getElementById("textoSalida").textContent = mensaje;
}


// Obtener referencia al cuadro de texto y al botón de enviar
var inputValor = document.getElementById("valorInput");
var botonEnviar = document.getElementById("botonEnviar");

// Agregar evento de clic al botón de enviar
botonEnviar.addEventListener("click", function () {
  var valor = inputValor.value; // Obtener el valor ingresado en el cuadro de texto
  var resultado;
  switch (numeroEjercicio) {
    case 1:
      resultado = parseFloat(valor) === 40; // Verificar si la respuesta es correcta
      mostrarResultado(resultado);

      break;
    case 2:
      resultado = parseFloat(valor) === 680; // Verificar si la respuesta es correcta
      mostrarResultado(resultado);
      break;
    case 3:
      resultado = parseFloat(valor) === 35; // Verificar si la respuesta es correcta
      mostrarResultado(resultado);
      break;
    case 4:
      resultado = parseFloat(valor) === 90; // Verificar si la respuesta es correcta
      mostrarResultado(resultado);
      break;
    case 5:
      resultado = parseFloat(valor) === 30; // Verificar si la respuesta es correcta
      mostrarResultado(resultado);
      break;
  }
});

// Función para mostrar el texto en el elemento correspondiente
function mostrarTexto(texto) {
  var textoSalida = document.getElementById("textoSalida");
  textoSalida.innerHTML = texto;
  textoSalida.classList.add("letra-cambiada"); // Agrega la clase CSS al elemento
  textoSalida.style.justifyContent = "center";
  textoSalida.style.alignItems = "center";
}

// Función para bloquear los botones
function bloquearBotones() {
  btnEjercicio1.disabled = true;
  btnEjercicio2.disabled = true;
  btnEjercicio3.disabled = true;
  btnEjercicio4.disabled = true;
  btnEjercicio5.disabled = true;
}

// Función para habilitar el siguiente botón
function habilitarSiguienteBoton() {
  var botones = document.getElementsByClassName("btn-ejercicio");
  for (var i = 0; i < botones.length; i++) {
    var ejercicio = botones[i].getAttribute("data-ejercicio");
    if (parseInt(ejercicio) === numeroEjercicio + 1) {
      botones[i].disabled = false;
      break;
    }
  }
}

