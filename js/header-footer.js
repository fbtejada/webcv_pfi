document.getElementById("idheader").innerHTML =
    `<nav class="nav-bar">
    <div class="site-name-logo-weather">
        <div class="site-name-logo">
            <a href="index.html"><img class="logo" src="images/triple_integral3.png"></a>
            <h1>WEBCV</h1>
        </div>
        <!--<div class="weather">
            <img src="#" alt="Weather Icon">
            <span class="numb"></span>
            <span class="deg">°C</span>
            <p></p>                   
        </div>    -->
    </div>

    <div class="menu-button">
        <div class="menu-button-burger"></div>
    </div>

    <ul class="nav-menu">
        <li class="nav-menu-item"><a class="nav-menu-link" href="index.html">Inicio</a></li>
        <li class="nav-menu-item"><a class="nav-menu-link" href="index.html#detalles_personales_ancla">Detalles personales</a></li>
        <li class="nav-menu-item"><a class="nav-menu-link" href="index.html#habilidades_ancla">Habilidades</a></li>
        <li class="nav-menu-item"><a class="nav-menu-link" href="index.html#experiencia_ancla">Experiencia</a></li>
        <li class="nav-menu-item"><a class="nav-menu-link" href="index.html#educacion_ancla">Educacion</a></li>
        <li class="nav-menu-item"><a class="nav-menu-link" href="formulario.html#contacto_ancla">Contacto</a></li>                
    </ul>
</nav>`

document.getElementById("idfooter").innerHTML =
    `<div class="footer-social-media">
<!-- <a class="traslation" href="index.html#">Subir</a><br> -->

<a class="icono-footer" href="https://www.twitter.com" target="_blank"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
<a class="icono-footer" href="https://www.facebook.com/" target="_blank"> <i class="fa fa-facebook" aria-hidden="true"></i></a>
<a class="icono-footer" href="https://www.instagram.com" target="_blank"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
<a class="icono-footer" href="https://www.linkedin.com" target="_blank"> <i class="fa fa-linkedin" aria-hidden="true"></i></a>
</div>
<div class="footer-derechos">
<p>Realizado por Federico Tejada</p>
<p id="derechos">Derechos reservados &copy2023</p>
</div>`

const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu-item');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-visible')
    menuButton.classList.toggle('open')
});

for (let i = 0; i < navMenuItems.length; i++) {
    navMenuItems[i].addEventListener('click', () => {
        navMenu.classList.remove('nav-menu-visible')
        menuButton.classList.remove('open')
    });
};



