const verMas1 = document.getElementById('ver-mas1');
const verMas2 = document.getElementById('ver-mas2');
const verMas3 = document.getElementById('ver-mas3');
const contenedorEducacion =  document.querySelector('[data-seccion-educacionder]');
const seccionGlobal = document.getElementById('seccion_educacion');



//FUNCION MOSTRAR MAS EDUCACION UNIVERSITARIA
const mostrarMas1 = () => {
    contenedorEducacion.innerHTML = '';
    contenedorEducacion.innerHTML = '<h2 id="titulos_educacion">RELACIONES PUBLICAS (Abandonado)</h2><p>17 materias aprobadas</p><h2 id="titulos_educacion">TECNICATURA EN CIBERSEGURIDAD</h2><p>A comenzar en marzo 2023</p>';
}

//FUNCION MOSTRAR MAS CURSOS //
const mostrarMas2 = () => {
    contenedorEducacion.innerHTML = '';
    contenedorEducacion.innerHTML = '<h2 id=titulos_educacion>ORACLE NEXT EDUCATION</h2><p class="parrafos_educacion">- Logica de la programacion</p><p class="parrafos_educacion">- Ruta Front End</p><p class="parrafos_educacion">- JAVA</p><h2 id=titulos_educacion>OPEN-BOOTCAMP</h2><p>-HTML</p><p>-CSS</p><p>-JavaScript</p><h2 id=titulos_educacion>TICMAS</h2><p>- HTML</P><p>- CSS</P><p>- JavaScript</P>';
}

//FUNCION MOSTRAR MAS EDUCACION SECUNDARIA

const mostrarMas3 = () => {
    contenedorEducacion.innerHTML = '';
    contenedorEducacion.innerHTML = '<h2 id=titulos_educacion>COLEGIO NACIONAL</h2><p>Bachiller en humanidades y Cs Sociales</p>';
}

// ACA SE REALIZAN LOS EVENTOS DEL CLICK //

verMas1.addEventListener('click', mostrarMas1);
verMas2.addEventListener('click', mostrarMas2);
verMas3.addEventListener('click', mostrarMas3);

// -------------------         VER MAS EXPERIENCIA VARIABLES Y FUNCIONES    ----------------   //

const exp1 = document.getElementById('ver-exp1'); 
const exp2 = document.getElementById('ver-exp2');
const exp3 = document.getElementById('ver-exp3');
const contenedorExperiencia = document.getElementById('experiencia-derecha1');


// funciones botones de experiencia

const verExp1 = () => {
    contenedorExperiencia.innerHTML = '<h2 id=titulos_educacion>ADMINISTRATIVO</h2><h2 id=titulos_educacion>Enero 2020- Diciembre 2020</h2><p>- Responsable del equipo administrativo</p><p>- Coordinación Centro de Producción</p><p>- Manejo de costos</p><p>- Responsable del personal de RRHH </p><p>- Análisis diario de reportes en Excel.</p>';
}
const verExp2 = () => {
    contenedorExperiencia.innerHTML = '<h2 id=titulos_educacion>VENTAS</h2><h2 id=titulos_educacion>Enero 2021- Diciembre 2021</h2><p>- Negociación </p><p>- Responsable del canal de distribucion de Bares, Restaurants y Pubs</p><p>- Coordinación de estrategias del negocio junto a la gerencia comercial para cada canal de ventas</p><p>- Generación de nuevas cuentas y seguimiento de clientes</p><p>- Control de procesos de pre-facturación, facturación, armado, envío y seguimiento </p>';
}
const verExp3 = () => {
    contenedorExperiencia.innerHTML = '<h2 id=titulos_educacion>EJEMPLO EXPERIENCIA 3</h2><h2 id=titulos_educacion>Enero 2022- Presente</h2><p>- Ejemplo descripcion de la experiencia numero 3 </p>';
}

// EVENTO CLICK BOTONES DE EXPERIENCIA //

exp1.addEventListener('click', verExp1);
exp2.addEventListener('click', verExp2);
exp3.addEventListener('click', verExp3);