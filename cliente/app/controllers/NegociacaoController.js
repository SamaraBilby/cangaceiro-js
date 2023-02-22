class NegociacaoController{
    adiciona(event){
         
        // cancelando a submissão do formulário
        event.preventDefault();

        alert("chamei ação no controller")
    }
}