class DateHelper{
    textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice)=> item - indice % 2));

    }

    dataParaTexto(data){
        /\d{4}-\d{2}-\d{2}/
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} `;
    }

}