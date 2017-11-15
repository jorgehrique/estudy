window.onload = function(){
	var botao = document.getElementById("btnPesquisar");
	botao.onclick = pesquisar;
};

function pesquisar(){
	var textbox = document.getElementById("pesquisa");
	var select = document.getElementById("tipo");
	
	var texto = textbox.value;
	var tipo = select.value;
	
	ajaxPesquisa(texto, tipo);
}

function exibirResultados(data){
	var nome = document.getElementById("nome");
	var autor = document.getElementById("autor");
	var link = document.getElementById("link");
	nome.innerHTML = data.nome;
	autor.innerHTML = data.autor;
	link.innerHTML = data.link;
}

function ajaxPesquisa(texto, tipo){
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if(request.status == 200){
			exibirResultados(JSON.parse(request.responseText));
		}
	}; 
	request.send();	
}
