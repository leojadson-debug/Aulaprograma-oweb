// ==============================
//  VALIDAÇÃO DE FORMULÁRIO
// ==============================

const Validator = {
    form: null,

    init(formSelector) {
        this.form = document.querySelector(formSelector);
        if (!this.form) return;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (this.validateForm()) {
                alert("Cadastro enviado com sucesso!");
                this.form.reset();
            }
        });
    },

    validateForm() {
        let isValid = true;

        const campos = this.form.querySelectorAll("[data-required]");

        campos.forEach(campo => {
            const errorSpan = campo.nextElementSibling;
            errorSpan.textContent = ""; 
            campo.style.borderColor = "#ccc";

            // Verifica vazio
            if (campo.value.trim() === "") {
                errorSpan.textContent = "Este campo é obrigatório.";
                campo.style.borderColor = "red";
                isValid = false;
                return;
            }

            // Verifica tipo email
            if (campo.dataset.type === "email") {
                if (!this.validateEmail(campo.value)) {
                    errorSpan.textContent = "Digite um email válido.";
                    campo.style.borderColor = "red";
                    isValid = false;
                    return;
                }
            }

            // Verifica CPF
            if (campo.id === "cpf") {
                if (!this.validateCPF(campo.value)) {
                    errorSpan.textContent = "CPF inválido. Formato: 000.000.000-00";
                    campo.style.borderColor = "red";
                    isValid = false;
                    return;
                }
            }

            // Verifica CEP
            if (campo.id === "cep") {
                if (!/^\d{5}-\d{3}$/.test(campo.value)) {
                    errorSpan.textContent = "CEP inválido. Formato: 00000-000";
                    campo.style.borderColor = "red";
                    isValid = false;
                    return;
                }
            }
        });

        return isValid;
    },

    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    validateCPF(cpf) {
        return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
    }
};


// ==============================
//  INICIALIZAÇÃO
// ==============================

document.addEventListener("DOMContentLoaded", () => {
    Validator.init("#formCadastro");
});
