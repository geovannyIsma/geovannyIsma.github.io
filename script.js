document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.className = 'theme-toggle-btn';
    toggleThemeButton.innerHTML = '🌙 Cambiar Tema';
    toggleThemeButton.style.position = 'fixed';
    toggleThemeButton.style.bottom = '20px';
    toggleThemeButton.style.right = '20px';
    toggleThemeButton.style.padding = '10px 20px';
    toggleThemeButton.style.backgroundColor = '#21b9c2';
    toggleThemeButton.style.color = 'white';
    toggleThemeButton.style.border = 'none';
    toggleThemeButton.style.borderRadius = '5px';
    toggleThemeButton.style.cursor = 'pointer';

    document.body.appendChild(toggleThemeButton);

    // Cargar preferencia de tema
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        toggleThemeButton.innerHTML = '☀️ Tema Claro';
    }

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        toggleThemeButton.innerHTML = isDark ? '☀️ Tema Claro' : '🌙 Cambiar Tema';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Botón volver arriba
    // Mostrar/ocultar botón volver arriba
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Animar barras de habilidades al hacer scroll
    function animateSkills() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            document.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = bar.getAttribute('style').replace('width:', '').trim();
            });
            window.removeEventListener('scroll', animateSkills);
        }
    }
    // Inicialmente poner las barras en 0
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.dataset.width = bar.style.width;
        bar.style.width = '0';
    });
    window.addEventListener('scroll', animateSkills);
    animateSkills();
});