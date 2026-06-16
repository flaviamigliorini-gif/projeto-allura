// Seleção de elementos do DOM
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('theme-toggle');

// Menu Responsivo (Abre e fecha no celular)
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Altera o ícone de barras para um 'X' quando aberto
    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Controle do Modo Escuro (Dark Mode)
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme !== 'dark') {
        newTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Altera o ícone do botão de tema
    const themeIcon = themeToggle.querySelector('i');
    if (newTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    // Salva a preferência do usuário no navegador
    localStorage.setItem('theme', newTheme);
});

// Aplica o tema salvo automaticamente ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}
