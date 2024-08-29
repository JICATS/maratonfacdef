document.getElementById('registro-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var sexo = document.getElementById('sexo').value;
    var documento = document.getElementById('documento').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var categoria = document.getElementById('categoria').value;
    var tallaCamiseta = document.getElementById('tallaCamiseta').value;
    var tiempoEstimado = document.getElementById('tiempoEstimado').value;
    var contactoEmergencia = document.getElementById('contactoEmergencia').value;
    var telefonoEmergencia = document.getElementById('telefonoEmergencia').value;
    var grupoSanguineo = document.getElementById('grupoSanguineo').value;
    var condicionesMedicas = document.getElementById('condicionesMedicas').value;
    var medicamentos = document.getElementById('medicamentos').value;

    var data = {
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        sexo: sexo,
        documento: documento,
        email: email,
        telefono: telefono,
        categoria: categoria,
        tallaCamiseta: tallaCamiseta,
        tiempoEstimado: tiempoEstimado,
        contactoEmergencia: contactoEmergencia,
        telefonoEmergencia: telefonoEmergencia,
        grupoSanguineo: grupoSanguineo,
        condicionesMedicas: condicionesMedicas,
        medicamentos: medicamentos
    };

    fetch('https://script.google.com/macros/s/AKfycbz61j9BHIifFifUN4ppmPTl2Utf05ivXNHh14W0_nvjT4j3zLqyWlGvcBQf0pLScXDumA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text()) // Maneja la respuesta del servidor
    .then(result => {
        console.log(result);
        alert('Registro exitoso');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar. Por favor, inténtelo de nuevo.');
    });
});
