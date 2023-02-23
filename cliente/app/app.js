// app.js é o ponto de entrada da nossa aplicação, isto é, aquele que faz inicialização de todos os objetos necessários para nossa aplicação. 
// aqui criaremos uma instância de NegociacaoController, para em seguida buscarmos o formulário da página

let controller =  new NegociacaoController();

document
        .querySelector('.form')
        .addEventListener('submit', controller.adiciona.bind(controller));