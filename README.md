# Argentina programa
### Entrega PFI Introducción Primeros pasos en Front-end de Ticmas Academy (HTML, CSS, JS)

## URL navegable

https://fbtejada.github.io/webcv_pfi/

![QR](images/webcv_pfi_QR.png)

## WEBCV

Es un sitio pensado para servir de _curriculum vitae_ moderno.
Notar que el contenido actual es ficticio y satírico.

## Tipo de sitio

Es una MPA: Multi Page Application (dos páginas).
 
Contacto es una página aparte. Quizás debí ponerlo todo en una página.

## Características

### Generales

-Validación del formulario de contacto en JS en un archivo .js aparte.

-Iconos de FontAwesome en el footer.

-Fuentes de Google.

### Responsive

-El sitio es responsive y debiera verse pasablemente tanto es Desktop como en tablet o celulares.
Fue probado en Firefox y Chrome tanto en Desktop como en Android. Se probó en Safari con un Iphone 6 viejo donado para tal fin.

### Animaciones y transiciones

El logo rota cuando se hace hover. 

La foto de la persona emite destellos.

Los iconos del footer transicionan al rojo. Los links del header también transicionan, tanto en el menú normal como en el hamburguesa.

Las secciones se hacen visibles y trasladan hasta su posicion correcta al entrar en el _viewport_ un 20%. Lo inverso ocurre cuando hay menos de un 20% de intersección con el _viewport_.

Los botones del formulario hacen sonido 'click' cuando se los presiona.

### Eventos, etc

Se usó el evento 'click' para mostrar el menú hamburguesa. Ver **header-footer.js**.

Se usó un **IntersectionObserver** para las transiciones de las secciones. Ver **index.js**.

### Tecnologías utilizadas para maquetar:

Tanto **index.html** como así **formulario.html** fueron maquetadas con Flexbox.

## Comentarios adicionales 

No se envía realmente una copia del mensaje a la dirección indicada en el formulario.

La foto de la persona fue sacada de https://randomuser.me/

La foto del paisaje fue sacada por mi en la reserva de Rivera Norte en Acassuso, Provicia de Buenos Aires.

El logo es una integral triple y fue generado por mi usando TeX.



