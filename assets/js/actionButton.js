document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que a página vá para a seção correta, dependendo do hash na URL
    if (window.location.hash && window.location.hash !== '#inicio') {
        // Se o hash não for '#inicio', a página deve rolar até o elemento correspondente
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para uma posição adequada, caso necessário
                behavior: 'smooth'
            });
        }
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        window.location.href = 'https://wa.me/553191555222';
    });
});
