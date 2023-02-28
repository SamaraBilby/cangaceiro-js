class DateConverter {

    // construtor para avisar ao programador que não precisa instanciar a classe

    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }
  /*
  Quando temos métodos que não fazem sentido serem
  chamados de uma instância, como no caso do método
  paraTexto() que criamos, podemos chamá-los diretamente da
  classe na qual foram declarados, adicionando o modificador
  static ( vira algo como "uma variável global da classe") antes do nome do método: 
  */

    static paraTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }
    static paraData(texto) {
        // o spread operator (...), que permite tratar cada elemento do array como um elemento individualmente
        // o map() atuará em cada elemento do array, retornando um novo array no final
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}
