document.addEventListener('DOMContentLoaded', function() {
    const submenus = document.querySelectorAll('.submenu > a');
    
    submenus.forEach(submenu => {
        submenu.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = submenu.parentElement;
            
            // Alterna la visibilidad del submenú
            parent.classList.toggle('active');
            
            // Opcional: cerrar otros submenús si se desea solo uno abierto a la vez
            const others = document.querySelectorAll('.submenu');
            others.forEach(other => {
                if (other !== parent) {
                    other.classList.remove('active');
                }
            });
        });
    });
});
