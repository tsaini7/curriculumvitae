//CREAR CONSTANTE DEL ELEMENTO A DESAPARECER

const misDatos = document.getElementById('mis-datos');
const educacion = document.getElementById('educacion');

// FUNCION PARA APARECER Y DESAPARECER
const cargarSeccion = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        } else {
            //entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarSeccion, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,

});


//INVOCANDO EL SCROLL PARA QUE APÁREZCA EL EVENTO

observador.observe(misDatos); //ENTRE PARENTESIS LA CONSTANTE DEL ID DEL CONTENEDOR
observador.observe(educacion); //ENTRE PARENTESIS LA CONSTANTE DEL ID DEL CONTENEDOR