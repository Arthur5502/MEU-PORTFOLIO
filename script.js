document.addEventListener('DOMContentLoaded', () => {

    /*
    =================================================
    FUNCIONALIDADE 1: ANIMAÇÃO DE SCROLL (REVELAR AO ROLAR) - JÁ EXISTENTE
    =================================================
    */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    /*
    =================================================
    FUNCIONALIDADE 2: EFEITO MÁQUINA DE ESCREVER - JÁ EXISTENTE
    =================================================
    */
    new TypeIt("#subtitle-typewriter", {
        speed: 75,
        startDelay: 900,
        loop: true,
    })
    .type('Desenvolvedor de Software', { delay: 1000 })
    .delete(19)
    .type('Data & DevOps', { delay: 1000 })
    .go();


    /*
    =================================================
    NOVA FUNCIONALIDADE 1: HEADER ATIVADO POR SCROLL
    =================================================
    */
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        // Se o usuário rolar a página mais de 50 pixels para baixo...
        if (window.scrollY > 50) {
            // ...adiciona a classe que muda o estilo do header.
            header.classList.add('header-scrolled');
        } else {
            // Senão, remove a classe para voltar ao normal.
            header.classList.remove('header-scrolled');
        }
    });


    /*
    =================================================
    NOVA FUNCIONALIDADE 2: CURSOR PERSONALIZADO
    =================================================
    */
    const cursorDot = document.querySelector('.cursor-dot');
    const clickableElements = document.querySelectorAll('a, .card-projeto');

    window.addEventListener('mousemove', (e) => {
        // Move o cursor personalizado para a posição do mouse
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });
    
    // Adiciona o efeito de "hover" no cursor
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorDot.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorDot.classList.remove('hover'));
    });


    /*
    =================================================
    NOVA FUNCIONALIDADE 3: EFEITO 3D NOS CARDS DE PROJETO
    =================================================
    */
    const projectCards = document.querySelectorAll('.card-projeto');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Define a intensidade da rotação
            const rotateY = (x / rect.width) * 20; // Rotação no eixo Y
            const rotateX = (-y / rect.height) * 20; // Rotação no eixo X

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reseta o card quando o mouse sai
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0)';
        });
    });

});