class DateConverter {

    paraTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }
     paraData(texto) {
        // o spread operator (...), que permite tratar cada elemento do array como um elemento individualmente
        // o map() atuará em cada elemento do array, retornando um novo array no final
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}
