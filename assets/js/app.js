// Obtiene una lista de todos los elementos del menú
let menuItems = document.querySelectorAll('.menu-item');

// Agrega un controlador de eventos de clic a cada elemento del menú
menuItems.forEach((item)=> {
  item.addEventListener('click', function() {

    /**
     * Recorro todos los links, y elimino la clase "active" que este en
     * cualquier otro elemento del menú
    */
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Agrega la clase "active" al elemento seleccionado
    item.classList.add('active');
  });
});
