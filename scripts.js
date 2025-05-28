
  function scrollLeft(id) {
    const contenedor = document.getElementById(id);
    if (contenedor) contenedor.scrollBy({ left: -300, behavior: 'smooth' });
  }

  function scrollRight(id) {
    const contenedor = document.getElementById(id);
    if (contenedor) contenedor.scrollBy({ left: 300, behavior: 'smooth' });
  }

 function mostrarModal(id) {
      // Cierra todos los modales primero
      const modales = document.querySelectorAll('.modal');
      modales.forEach(modal => modal.classList.remove('activo'));

      // Muestra el modal específico
      document.getElementById(id).classList.add('activo');
    }

    function cerrarModal() {
      const modales = document.querySelectorAll('.modal');
      modales.forEach(modal => modal.classList.remove('activo'));
    }

    const items = document.querySelectorAll('.galeria-item');
    const modal = document.getElementById('modalProducto');
    const modalImg = document.getElementById('modalImg');
    const modalNombre = document.getElementById('modalNombre');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrecio = document.getElementById('modalPrecio');

    items.forEach(item => {
      item.addEventListener('click', () => {
        modalImg.src = item.getAttribute('data-img');
        modalNombre.textContent = item.getAttribute('data-nombre');
        modalDesc.textContent = item.getAttribute('data-desc');
        modalPrecio.textContent = item.getAttribute('data-precio');
        modal.style.display = 'flex';
      });
    });

    function cerrarModal() {
      modal.style.display = 'none';
    }

    window.addEventListener('click', function(e) {
      if (e.target === modal) cerrarModal();
    });

      function scrollLeft(id) {
    const contenedor = document.getElementById(id);
    contenedor.scrollBy({ left: -300, behavior: 'smooth' });
  }

  function scrollRight(id) {
    const contenedor = document.getElementById(id);
    contenedor.scrollBy({ left: 300, behavior: 'smooth' });
  }