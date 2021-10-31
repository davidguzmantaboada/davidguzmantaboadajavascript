//EVENTOS DOM

let boton = document.getElementById("miBoton");

function validarEdad(entrada) {
    let edadInput = entrada.value;
    if (edadInput < 18) {
        alert("Eres menor de edad!");  
    }
}
