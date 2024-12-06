

// Cadastro de usuário
document.querySelector("#cadastrarContaModal form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nomeUsuario").value;
    const email = document.querySelector("#emailCadastro").value;
    const senha = document.querySelector("#senhaCadastro").value;
    const confirmacao = document.querySelector("#senhaConfirmacao").value;

  

    if (senha !== confirmacao) {
        alert("As senhas não coincidem!", "warning");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/usuario/email/senha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, email, senha }),
        });

        if (response.ok) {
            alert("Cadastro realizado com sucesso!", "success");
            document.querySelector("#cadastrarContaModal form").reset();
        } else {
            const data = await response.json();
            alert(data.error || "Erro ao realizar cadastro.", "danger");
        }
    } catch (error) {
        console.error("Erro ao fazer cadastro:", error);
        alert("Erro ao tentar cadastrar. Tente novamente mais tarde.", "danger");
    }
});

// Login do usuário
document.querySelector("#login").addEventListener("click", async (event) => {
    event.preventDefault();

    const usuario = document.querySelector("#Usuariologin").value;
    const senha = document.querySelector("#senhaLogin").value;
    console.log(usuario, senha)
    if (usuario != '' && senha != '') {
       
        try {
            const response = await fetch(`http://localhost:3000/login/${usuario}/${senha}`);
            if (response.status == 200) {

                window.location.replace("../html/noticias.html"); // Redireciona para a página home
           
            } else {
                alert('Usuário ou senha incorretos!', 'danger');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao tentar fazer login. Tente novamente mais tarde.', 'danger');
        }
    } else {
        alert('Preencha todos os campos!', 'warning');
    }
});