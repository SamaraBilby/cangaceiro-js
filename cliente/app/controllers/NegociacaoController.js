class NegociacaoController{
    adiciona(event){
         
        // cancelando a submissão do formulário
        event.preventDefault();

        // realizando o bind, $ mantém document com seu contexto this.
        let $ = document.querySelector.bind(document);
        
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(typeof (inputData.value))
        console.log(parseInt(inputQuantidade.value))
        console.log(parseFloat(inputValor.value))
    }
}