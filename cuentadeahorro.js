const btntoggle = document.querySelector('.toggle-btn')

btntoggle.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
});


function abrirModal(modalId){
    var modal = document.getElementById('modal-' + modalId);
    modal.style.display = 'block';
}

function cerrarModal(modalId){
    var modal = document.getElementById('modal-' + modalId);
    modal.style.display = 'none';
}

var enlaces = document.querySelectorAll('.abrir-modal');

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        var modalId = this.getAttribute('data-modal');
        abrirModal(modalId);
    });
});
