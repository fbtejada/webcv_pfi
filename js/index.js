//Observador para transicion de secciones cuando entran en viewport
let options = {
    root: null,
    // root: document.querySelector('#scrollArea'),
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.2
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const table = entry.target.querySelectorAll('.seccion table');
        // console.log("Largo:" + table.length)

        if (entry.isIntersecting) {
            for (let i = 0; i < table.length; i++) {
                table[i].classList.add('enter-transition');
            }
            return;
        }

        // Si no se interseca sacamos la clase
        for (let i = 0; i < table.length; i++) {
            table[i].classList.remove('enter-transition');
        };

    })
}, options);

document.querySelectorAll('.seccion').forEach(oneTarget => {
    observer.observe(oneTarget);
}) 
