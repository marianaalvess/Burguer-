// 1. Menu Hambúrguer Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 2. Navbar Sticky Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. Intersection Observer para Animações
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, revealOptions);

document.querySelectorAll('.animate-up, .animate-left, .animate-right').forEach(el => observer.observe(el));

// 4. Scroll Suave
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 5. Internationalization (i18n)
const translations = {
    pt: {
        nav_home: "HOME",
        nav_menu: "MENU",
        nav_about: "SOBRE",
        nav_contact: "CONTATO",
        btn_order: "PEDIR AGORA",
        hero_est: "EST. 2024",
        hero_title_1: "O VERDADEIRO",
        hero_title_2: "SABOR",
        hero_desc: "Feito na brasa, com ingredientes frescos e aquele molho secreto que você só encontra aqui.",
        btn_menu: "VER MENU",
        btn_visit: "VISITE-NOS",
        section_menu_1: "NOSSO",
        section_menu_2: "MENU",
        menu_subtitle: "Hambúrgueres artesanais feitos com paixão e os melhores ingredientes selecionados diariamente.",
        badge_best: "MAIS VENDIDO",
        badge_new: "NOVIDADE",
        badge_veggie: "VEGGIE",
        desc_classic: "Duas carnes smash, queijo cheddar duplo, cebola roxa e picles artesanal.",
        desc_chicken: "Peito de frango empanado crocante, coleslaw cítrico e maionese picante.",
        desc_truffle: "Blend 180g, cogumelos salteados no azeite de trufas e queijo suíço.",
        desc_texas: "Smoked bacon, anéis de cebola crocantes, queijo cheddar e molho BBQ da casa.",
        desc_veggie: "Hambúrguer de plantas, abacate fresco, rúcula, tomate confit e maionese de ervas.",
        desc_tower: "Triplo smash burger, triplo cheddar, ovo frito e cebola caramelizada.",
        btn_add: "ADICIONAR",
        section_history_1: "NOSSA",
        section_history_2: "HISTÓRIA",
        history_text: "Nossa história nasceu do desejo de oferecer hambúrgueres artesanais com foco em qualidade e sabor de verdade. Começamos pequenos, testando receitas e selecionando ingredientes com rigor em cada etapa. Hoje, seguimos comprometidos em entregar uma experiência consistente, com hambúrgueres preparados na hora e atendimento cuidadoso em cada visita.",
        stat_clients: "CLIENTES",
        stat_handmade: "ARTESANAL",
        footer_tagline: "Sabor autêntico, ingredientes frescos e paixão em cada detalhe.",
        footer_links: "LINKS RÁPIDOS",
        footer_contact: "CONTATO",
        footer_hours: "HORÁRIO",
        days_week: "Seg - Sex:",
        days_weekend: "Sáb - Dom:",
        footer_copy: "© 2025 BURGUER. TODOS OS DIREITOS RESERVADOS."
    },
    en: {
        nav_home: "HOME",
        nav_menu: "MENU",
        nav_about: "ABOUT",
        nav_contact: "CONTACT",
        btn_order: "ORDER NOW",
        hero_est: "EST. 2024",
        hero_title_1: "THE REAL",
        hero_title_2: "TASTE",
        hero_desc: "Grilled to perfection, with fresh ingredients and that secret sauce you only find here.",
        btn_menu: "VIEW MENU",
        btn_visit: "VISIT US",
        section_menu_1: "OUR",
        section_menu_2: "MENU",
        menu_subtitle: "Handmade burgers made with passion and the best ingredients selected daily.",
        badge_best: "BEST SELLER",
        badge_new: "NEW",
        badge_veggie: "VEGGIE",
        desc_classic: "Two smash patties, double cheddar cheese, red onion, and artisan pickles.",
        desc_chicken: "Crispy breaded chicken breast, citrus coleslaw, and spicy mayo.",
        desc_truffle: "180g blend, mushrooms sautéed in truffle oil, and Swiss cheese.",
        desc_texas: "Smoked bacon, crispy onion rings, cheddar cheese, and house BBQ sauce.",
        desc_veggie: "Plant-based patty, fresh avocado, arugula, tomato confit, and herb mayo.",
        desc_tower: "Triple smash patty, triple cheddar, fried egg, and caramelized onions.",
        btn_add: "ADD TO CART",
        section_history_1: "OUR",
        section_history_2: "HISTORY",
        history_text: "Our story was born from the desire to offer handmade burgers focusing on quality and real flavor. We started small, testing recipes and rigorously selecting ingredients at every stage. Today, we remain committed to delivering a consistent experience, with burgers prepared on the spot and careful service on every visit.",
        stat_clients: "CUSTOMERS",
        stat_handmade: "HANDMADE",
        footer_tagline: "Authentic flavor, fresh ingredients, and passion in every detail.",
        footer_links: "QUICK LINKS",
        footer_contact: "CONTACT",
        footer_hours: "HOURS",
        days_week: "Mon - Fri:",
        days_weekend: "Sat - Sun:",
        footer_copy: "© 2025 BURGUER. ALL RIGHTS RESERVED."
    }
};

let currentLang = 'pt';
const langBtns = document.querySelectorAll('.btn-lang');

function updateLanguage(lang) {
    currentLang = lang;
    const items = document.querySelectorAll('[data-i18n]');

    items.forEach(item => {
        const key = item.getAttribute('data-i18n');
        if (translations[lang][key]) {
            item.textContent = translations[lang][key];
        }
    });

    langBtns.forEach(btn => {
        const span = btn.querySelector('.lang-text');
        if (span) {
            span.textContent = lang === 'pt' ? 'PT' : 'EN';
        }
    });
}

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const newLang = currentLang === 'pt' ? 'en' : 'pt';
        updateLanguage(newLang);
    });
});