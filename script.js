document.getElementById("registrarBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    if (nombre && email && telefono) {
        const tablaBody = document.querySelector("#tablaAlumnos tbody");
        const nuevaFila = document.createElement("tr");

        nuevaFila.innerHTML = `
            <td>${nombre}</td>
            <td>${email}</td>
            <td>${telefono}</td>
        `;

        tablaBody.appendChild(nuevaFila);

        // Limpiar formulario
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
