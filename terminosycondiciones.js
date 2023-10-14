function mostrarPopup() {
    document.getElementById("popup").style.display = "block";
}

function aceptarTerminos() {
    alert("Has aceptado los términos y condiciones.");
    window.location.href = "creditos.html";
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}