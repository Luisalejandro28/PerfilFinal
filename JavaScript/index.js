let name = document.getElementById("name");
let titulo = document.getElementById("titulo");
let about = document.getElementById("sobre_mi");
let contacto = document.getElementById("Contacto");

name.innerHTML = "Hola! Soy Luis Alejandro Machado";
titulo.innerHTML = "Programador Web en Formación";
about.innerHTML = `Desarrollador web en formacion, con un enfoque en la creación de sitios web interactivos y responsivos. He trabajado en proyectos personales y he realizado cursos en línea para seguir mejorando mis habilidades. Soy una persona responsable y proactiva, con un fuerte enfoque en el trabajo en equipo y la solución de problemas. También disfruto aprendiendo cosas nuevas y siempre estoy buscando maneras de mejorar.`
contacto.innerHTML = "Contacto"

const menuItems = document.querySelectorAll('.nav-item');
menuItems.forEach(function(item){
    item.addEventListener('click', function(e){
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');

    });
});
