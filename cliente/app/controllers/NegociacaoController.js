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
        
        let converter = new DateConverter();
        let data = converter.paraData(this._inputData.value)

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        let diaMesAno = converter.paraTexto(negociacao.data);
        console.log(diaMesAno);
    }
}
