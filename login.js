document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form'); // Pega apenas o formulário de login

    // Remove qualquer lógica de cadastro/troca de formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica (opcional)
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) { // Se os campos não estiverem vazios
            window.location.href = 'admPage.html'; // Redireciona para a página administrativa
        } else {
            alert("Preencha e-mail e senha!"); // Mensagem de erro se campos vazios
        }
    });
});