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


document.querySelector('#cadastrar').addEventListener('click', async function(event){
  event.preventDefault(); // Impede o envio do formulário

const dominio = document.querySelector('#dominio').value;
const reino = document.querySelector('#reino').value;
const filo = document.querySelector('#filo').value;
const classe = document.querySelector('#classe').value;
const origem = document.querySelector('#origem').value;
const familia = document.querySelector('#familia').value;
const genero = document.querySelector('#genero').value;
const especie = document.querySelector('#especie').value;
const nome = document.querySelector('#nome').value;


const res = await fetch('http://192.168.1.17:3000/informacoes/plantas',{
    method: "POST",
    headers: {
        "Content-Type": "application/json" // Adiciona o cabeçalho correto
    },
    body: JSON.stringify({
        dominio: dominio,
        reino: reino,
        filo: filo,
        classe: classe,
        origem: origem,
        familia: familia,
        genero: genero,
        especie: especie,
        nome: nome
    })
});

if(res.status == 200){
  alert('Arvore adicionada com sucesso')
}
else if(res.status == 500){
  alert('Ops...houve um erro ao adicionar')
}

})
