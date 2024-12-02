import express from 'express'
import cors from 'cors'
import sql from './bd.js'


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Confirmação de login: Funcional
app.get('/login/:usuario/:senha',async (req, res)=>{
    const { usuario, senha } = req.params
    try{
            const consulta = await sql`select * from login where usuario = ${usuario} and senha = ${senha};`
        if(consulta != null && consulta != ''){
            return res.status(200).json(consulta)
        }
        else{
            return res.status(401).json('Usuario ou senha incorretos')
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json('um erro inesperado ocorreu')
    }
    
    
});

//cadastro de usuario: Funcional
app.post('/usuario/email/senha', async (req, res)=>{
    try{
        const {nome, email, senha} = req.body;
    await sql`insert into login (usuario, email, senha) values (${nome}, ${email}, ${senha});`
    return res.status(200).json('ok')
    }
    catch(error){
        console.log(error)
        return res.status(500).json('erro ao cadastrar usuario')
    }
})







//atualização de senhas: Pendente
app.put('/email/senha', async (req, res)=>{
    try{
        const {email, nsenha} = req.body
        await sql`update login set senha = ${nsenha} where email = ${email};`
  
        return res.status(200).json('Ação efetuada')
    }
    catch(error){
        console.log(error)
        return res.status(500).json('Ocorreu um erro ao mudar a senha')
    }
})



//cadastro de plantas: Funcional
app.post('/informacoes/plantas', async (req, res)=>{
    try{
            const {dominio, reino, filo, classe, origem, familia, genero, especie, nome} = req.body;
            await sql`insert into arvores (dominio, reino, filo, classe, origem, familia, genero, especie, nome_popular) values 
            (${dominio}, ${reino}, ${filo}, ${classe}, ${origem}, ${familia}, ${genero}, ${especie}, ${nome});`
            return res.status(200).json('ok')
    }
    catch(error){
        console.log(error)
        return res.status(500).json('erro ao cadastrar arvore')
    }
})






//pesquisa das plantas: Funcional
app.get('/plantas/:especie',async (req, res)=>{

    try{
            const { especie } = req.params
            const consulta = await sql`SELECT * FROM Arvores WHERE nome_popular = ${especie};`
            if(consulta != null && consulta != ''){
                return res.status(200).json(consulta)
            }
            else{
                return res.status(401).json('Planta não encontrada ou não cadastrada')
            }
    }
    catch(error){
        console.log(error)
        return res.status(500).json('Ocorreu um erro inesperado')
    }
    
});







app.listen(3000,()=>{
    console.log('Running!! in port 3000')
});