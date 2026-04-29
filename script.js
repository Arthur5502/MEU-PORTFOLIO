document.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('show'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

  new TypeIt('#subtitle-typewriter', {
    speed: 70,
    startDelay: 800,
    loop: true,
  })
    .type('Desenvolvedor Full Stack', { delay: 1600 })
    .delete(null)
    .type('Entusiasta de DevOps', { delay: 1600 })
    .delete(null)
    .type('Analista de Dados', { delay: 1600 })
    .delete(null)
    .go();

  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });

  const sections = document.querySelectorAll('section[id], header[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) =>
            item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`)
          );
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  const cursorDot = document.querySelector('.cursor-dot');
  if (cursorDot && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('a, .card-projeto, button, .skill-tags span, .stat-card').forEach((el) => {
      el.addEventListener('mouseenter', () => cursorDot.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursorDot.classList.remove('hover'));
    });
  }

  document.querySelectorAll('.card-projeto').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      card.style.transform = `translateY(-6px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
