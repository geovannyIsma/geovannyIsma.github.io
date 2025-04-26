document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.textContent = 'Cambiar Tema';
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

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});