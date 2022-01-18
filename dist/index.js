const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs')
const { getPalindromeBetweenNumbers } = require('./ex1/palindromo');
const { pegarExtrato } = require('./ex2/caixa');
const { Carro, Moto } = require('./ex3/index');
const storage = require('../repository/veiculosCadastrados.json')
const { getCep } = require('./ex4/cep');
const { listenerCount } = require('process');

const app = express()

const port = 3003;

const basePath = path.join(path.resolve(__dirname, '..'), 'views');

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, '..') + '/public'));



app.post("/ex4", (req, res) => {
    let ceps = [req.body.cep1, req.body.cep2, req.body.cep3, req.body.cep4, req.body.cep5];
    let responses = []
    ceps.forEach((element, index) => {
        let currentResponse = getCep(element, index + 1)
            .catch((err) => { return `erro na solicitacao: ${err}`; });
        console.log(currentResponse)
        responses.push(currentResponse)
    })
    Promise.all([responses[0], responses[1], responses[2], responses[3], responses[4]]).then(
        (values) => {
            console.log("chegou aqui");
            console.log(values);
            res.render(basePath + '/ex4', { resultCep: values });
        }
    )

});

app.get("/ex4", (req, res) => {
    res.render(basePath + '/ex4', { resultCep: null });
})

app.get("/ex3", (req, res) => {
    res.render(basePath + '/ex3', { cadastrado: false });
})


app.post("/ex3", (req, res) => {

    let marca = req.body.marca
    let modelo = req.body.modelo
    let ano = +req.body.ano
    let quantidadeDePortas = +req.body.portas
    console.log(req.body.veiculo)
    switch (req.body.veiculo) {

        case 'carro':
            console.log("chegou carro")
            let carro = new Carro(modelo, ano, quantidadeDePortas, marca)
            storage.veiculosCadastrados.push(carro.addToJson())
            break;
        case 'moto':
            console.log("chegou moto")
            let passageiros = req.params.passageiros | 1;
            let moto = new Moto(modelo, ano, quantidadeDePortas, marca, passageiros)
            storage.veiculosCadastrados.push(moto.addToJson())
            break;
        default:
            break;
    }

    console.log(storage)
    console.log(storage.veiculosCadastrados)
    console.log(path.resolve(__dirname, '..') + '/repository/veiculosCadastrados.json');
    fs.writeFileSync(path.resolve(__dirname, '..') + '/repository/veiculosCadastrados.json', JSON.stringify(storage), { encoding: 'utf8', flag: 'w' })
    res.render(basePath + '/ex3', { cadastrado: true })


})

app.get("/ex2", (req, res) => {
    res.render(basePath + '/ex2', { extrato: null });
})

app.post("/ex2", (req, res) => {
    let valorCompra = +req.body.compra
    let valorDinheiro = +req.body.dinheiro
    let extrato = JSON.parse(pegarExtrato(valorCompra, valorDinheiro))
    res.render(basePath + '/ex2', { extrato: extrato });
})

app.get("/ex1", (req, res) => {
    res.render(basePath + '/ex1', { resultados: null });
})

app.post("/ex1", (req, res) => {
    let nMin = +req.body.min
    let nMax = +req.body.max
    let resultados = getPalindromeBetweenNumbers(nMin, nMax)
    res.render(basePath + '/ex1', { resultados: resultados });
})

app.get("/", (req, res) => {
    res.render(basePath + '/index');
})

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
})