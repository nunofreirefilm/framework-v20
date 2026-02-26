document.addEventListener('DOMContentLoaded', () => {

    AOS.init({ disableMutationObserver: true, once: true });

    /* =======================================
       1. FLUXO DE APRENDIZADO (NADA A FAZER AKI SO AOS)
    ======================================= */

    /* =======================================
       2. DIFFERENTIAL STICKY HIGHLIGHTS
    ======================================= */
    const diffBlocks = document.querySelectorAll('.diff-block');

    const diffObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // If you want them to dim when scrolling out, uncomment below:
                entry.target.classList.remove('active');
            }
        });
    }, { rootMargin: '-40% 0px -40% 0px' });

    diffBlocks.forEach(block => {
        diffObserver.observe(block);
    });

});
