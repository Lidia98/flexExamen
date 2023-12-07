
    /*contador*/
  function ContadorDeClicks() {
    let contador = 0;
    const cartButton = document.getElementById("boton-click");
    const countDisplay = document.getElementById("contar-click");

    cartButton.addEventListener("click", function (event) {
        event.preventDefault();
        contador++;
        countDisplay.textContent = contador; 
    });
  }
    ContadorDeClicks();
  ;
  
 /*reloj*/
  function actualizarReloj() {
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var horaActual = horas + ':' + minutos + ':' + segundos;
    document.getElementById('reloj').innerText = horaActual;
    setTimeout(actualizarReloj, 1000);
  }
  window.onload = function () {
    actualizarReloj();
  };
  setInterval(actualizarReloj, 1000);
 
  /*cambiar color*/
  document.addEventListener("DOMContentLoaded", function () {
    var changeColorButton = document.getElementById("boton-cambiar-color");
    var rightSide = document.querySelector(".encabezado-segunda-fila");

    changeColorButton.addEventListener("click", function () {
      var randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      rightSide.style.backgroundColor = randomColor;
    });
  });