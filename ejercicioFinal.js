//crear funciones para el convertidor

function convertirCelsius() {
    var datosF = parseInt(document.getElementById('farenheitG').value);
    var  resultado=document.getElementById('celsiusG');
    var celsius = (datosF - 32) * (5/9);
    resultado.value= celsius;

}

function convertirFarenheit() {
    var datoC = parseInt(document.getElementById('celsius').value);
    var resultadoC=document.getElementById('farenheit');
    var farenheit= (datoC * (9/5)) + 32;
    resultadoC.value=farenheit;
  }
