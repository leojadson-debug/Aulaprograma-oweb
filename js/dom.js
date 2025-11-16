const DOM = {
    mudarTitulo(texto) {
        document.title = texto;
    },

    criarCard(titulo, descricao) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${titulo}</h2>
            <p>${descricao}</p>
        `;
        return card;
    }
};
