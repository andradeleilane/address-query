const inputCep = document.getElementById('js-input-cep');
const btnBuscarCep = document.getElementById('js-btn-buscar-cep');

const messageError = document.getElementById('js-error');
const resultadoArea = document.getElementById('js-dados');

const inputLogradouro = document.getElementById('js-result-logradouro');
const inputComplemento = document.getElementById('js-result-complemento');
const inputBairro = document.getElementById('js-result-bairro');
const inputLocalidade = document.getElementById('js-result-localidade');
const inputUf = document.getElementById('js-result-uf');


btnBuscarCep.addEventListener('click',() => {
    if(inputCep.value != "") {
        
        axios({
            method: 'GET',
            url: `https://viacep.com.br/ws/${inputCep.value}/json/`,
        })
        .then(response => {
            let data = response.data;
            inputLogradouro.value = data.logradouro;
            inputComplemento.value = data.complemento;
            inputBairro.value = data.bairro;
            inputLocalidade.value = data.localidade;
            inputUf.value = data.uf;
            
            resultadoArea.style.display = 'block';
            messageError.style.display = 'none';
        });

    } else {
        resultadoArea.style.display = 'none';
        messageError.style.display = 'block';
    }
});