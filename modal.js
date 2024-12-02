// Abrir o modal
const openButtons = document.querySelectorAll('.open-modal');
openButtons.forEach((button) => { //pega qual dos botões foram selecionados da class .open-modal

  button.addEventListener("click", () => { //arrow function pegar algo - no caso clique do botão
    const modalId = button.getAttribute("data-modal"); //especificar qual ATRIBUTO - data-modal foi pego 
    const modal = document.getElementById(modalId); //especificar qual elemento por ID foi pego 
    modal.showModal(); //show ou showModal

  });
});

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach((button)=>{

    button.addEventListener('click', () =>{
        const modalId = button.getAttribute("data-modal"); 
        const modal = document.getElementById(modalId); 
        modal.close(); //fechar modal
    })

})



const email = document.querySelector('#email').value;
const nome = document.querySelector('#nome').value;

const res = await fetch('http://192.168.1.27:3000/usuario/novo',{
    method: "POST",
    headers: {
        "Content-Type": "application/json" // Adiciona o cabeçalho correto
    },
    body: JSON.stringify({
        email: email,
        senha: senha,
        nome_usuario: nome
    })
});


if(res.status == 200){
  alert('Cadastrado com sucesso')
}
else if(res.status == 500){
  alert('Ops...houve um erro ao cadastrar')
}
else  if(res.status == 400){
  alert('Senha deve ter 8 caracteres!')
}
else  if(res.status == 409){
  alert('Email ja cadastrado')
}
