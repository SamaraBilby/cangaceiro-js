/* nome do script segue o padrão PascalCase,
caracterizado por arquivos que começam com letra maiúscula, assim como cada palavra que compõe o nome do arquivo. Essa convenção torna evidente para quem estuda a estrutura do projeto
que este arquivo possui a declaração de uma classe, pois toda classe por convenção segue o mesmo padrão de escrita. */


/* Uma classe no mundo da Orientação a Objetos define a estrutura que todo objeto criado a partir dela deve seguir. */
class Negociacao {

    /* É a através da função constructor () que definimos as propriedades de uma classe */

    constructor(data, quantidade, valor) {
        
        /* Através de this.nomeDaPropriedade, especificamos que a negociação terá: data, quantidade e valor, cada propriedade com seu valor padrão   */

        this._data = data
        this._quantidade = quantidade;
        this._valor = valor; 
    }

    /* Funções que definem um comportamento de uma classe são chamadas de métodos para alinhar o vocabulário com o paradigma da Orientação a Objetos. */
    
    obtemVolume() {

        /* as propriedades que contenham _ (underline) só poderão ser acessadas pelos próprios métodos da classe. Isto significa que, mesmo podendo imprimir a propriedade _quantidade com outro valor, não deveríamos mais poder acessá-la. O _ funciona como um aviso dizendo: "programador, você não pode alterar esta propriedade!". */

        return this._quantidade * this._valor;
    }

    getData(){
        return this._data;
    }

    getQuantidade(){
        return this._quantidade;
    }

    getValor(){
        return this._valor;
    }
}
