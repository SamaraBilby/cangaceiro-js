/* nome do script segue o padrão PascalCase,
caracterizado por arquivos que começam com letra maiúscula, assim como cada palavra que compõe o nome do arquivo. Essa convenção torna evidente para quem estuda a estrutura do projeto
que este arquivo possui a declaração de uma classe, pois toda classe por convenção segue o mesmo padrão de escrita. */


/* Uma classe no mundo da Orientação a Objetos define a estrutura que todo objeto criado a partir dela deve seguir. */
class Negociacao {

    /* É a através da função constructor () que definimos as propriedades de uma classe */

    constructor(_data, _quantidade, _valor) {
        
        /* Através de this.nomeDaPropriedade, especificamos que a negociação terá: data, quantidade e valor, cada propriedade com seu valor padrão   */

        /* 
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        */

        /*
        Podemos simplificar bastante esse processo de atribuição dos parâmetros 
        recebidos pelo constructor nas propriedades da instância da classe com 
        o método Object.assign()
        */

        /* 
        O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Ele retornará o objeto destino
        */

        Object.assign(
            this, 
            {
                _quantidade,
                _valor
            }
        );
        this._data = new Date(_data.getTime());

        // usado para evitar mutabilidade dos valores.


        Object.freeze(this)
    }

    /* Funções que definem um comportamento de uma classe são chamadas de métodos para alinhar o vocabulário com o paradigma da Orientação a Objetos. */
    
    //getVolume
        get volume() {

        /* as propriedades que contenham _ (underline) só poderão ser acessadas pelos próprios métodos da classe. Isto significa que, mesmo podendo imprimir a propriedade _quantidade com outro valor, não deveríamos mais poder acessá-la. O _ funciona como um aviso dizendo: "programador, você não pode alterar esta propriedade!". */

        return this._quantidade * this._valor;
    }
    //Métodos acessadores geralmente começam com o prefixo get em seus nomes.
    
    /*Como são métodos da própria classe, seguindo nossa convenção, 
    eles podem acessar às propriedades prefixadas com (_) . 
    E qualquer outro código que precisar ler as propriedades de um 
    objeto do tipo Negociacao poderá fazê-lo através dos
    métodos acessadores que criamos.*/
    
    /* Para enxugar nossos métodos acessadores através da sintaxe get 
    que a linguagem nos oferece.*/
    
    //getData
        get data(){
        return this._data;
    }

    //getQuantidade
        get quantidade(){
        return this._quantidade;
    }
    // getValor
    get valor(){
        return this._valor;
    }
}
