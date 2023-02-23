class NegociacaoController{

    constructor(){

        // realizando o bind, $ mantém document com seu contexto this.
        let $ = document.querySelector.bind(document);
            
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    adiciona(event){

         // cancelando a submissão do formulário
        event.preventDefault();
        
        // o spread operator (...), que permite tratar cada elemento do array como um elemento individualmente
        let data = new Date(...this._inputData.value.split('-').map(function(item){
            return item;})
            );
        
            console.log(data)

        let negociacao = new Negociacao(
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

    }
}
