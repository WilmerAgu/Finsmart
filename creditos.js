

document.addEventListener("DOMContentLoaded", function() {
    // Espera a que la página se cargue completamente
    document.getElementById("openModalButton").addEventListener("click", function() {
        document.getElementById("myModal").style.display = "block";
    });
});

document.getElementById("closeModalButton").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});
