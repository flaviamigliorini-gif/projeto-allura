document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos ativos
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // 1. Menu Mobile Eficiente
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
            
            // Troca de ícone dinamicamente
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Fecha o menu se clicar em qualquer lugar fora dele
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('open');
                mobileMenuBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Fecha se a tela for redimensionada para desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                mobileMenuBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // 2. Mecanismo de Dark Mode otimizado
    const updateIcon = (theme) => {
        const themeIcon = themeToggleBtn.querySelector('i');
        if (theme === 'dark') {
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
    };

    if (themeToggleBtn) {
        // Verifica o tema inicial guardado ou assume o padrão do sistema do usuário
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

        // Aplica o tema inicial
        document.documentElement.setAttribute('data-theme', initialTheme);
        updateIcon(initialTheme);

        // Evento de clique para alternar
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            updateIcon(targetTheme);
        });
    }
});
