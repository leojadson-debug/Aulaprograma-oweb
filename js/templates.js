const Templates = {
    cardUsuario(nome, email) {
        return `
            <div class="usuario">
                <h3>${nome}</h3>
                <p>${email}</p>
            </div>
        `;
    }
};
