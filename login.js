// Dados de login
const loginInfo = {
    username: "minhanamorada", // Nome de usuário
    password: "surpresa123"   // Senha
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === loginInfo.username && password === loginInfo.password) {
        // Armazena uma flag para indicar que o usuário está autenticado
        localStorage.setItem("loggedIn", "true");
        // Redireciona para a página principal
        window.location.href = "index.html";
    } else {
        // Exibe mensagem de erro
        document.getElementById("error-message").style.display = "block";
    }
}
