class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

    }
    adiciona(event){
        event.preventDefault();

        let helper = new DateHelper();
        
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor
        );
        this._listaNegociacoes.adiciona(negociacao);
    }
}