// Exemplo de manipulação do DOM nas páginas que já existem
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada:", document.title);

    // Exemplo: destacar link ativo no menu
    document.querySelectorAll("nav a").forEach(link => {
        if (link.href.includes(location.pathname)) {
            link.classList.add("ativo");
        }
    });
});
