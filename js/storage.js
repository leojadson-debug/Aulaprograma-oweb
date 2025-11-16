const Storage = {
    salvarUsuario(usuario) {
        const lista = JSON.parse(localStorage.getItem("usuarios") || "[]");
        lista.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(lista));
    },

    listarUsuarios() {
        return JSON.parse(localStorage.getItem("usuarios") || "[]");
    }
};
