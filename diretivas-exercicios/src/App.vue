<template>
	<div id="app">
		<h2>Diretivas</h2>

		<h3 v-destaque:fundo.atrasar="'lightGreen'">Exemplo1</h3>
		<h3 v-destaque="cor">Exemplo2</h3>


		<h3 v-destaque-local:fundo.atrasar.alternar="{cor1: 'orange', cor2: 'yellow', atraso: 1000, intervalo: 50}">Exemplo3</h3>
		<h3 v-destaque-local.atrasar.alternar="{cor1: 'orange', cor2: 'purple', atraso: 2000, intervalo: 200}">Exemplo4</h3>

		<hr/>

		<h2>Desafio</h2>
		<button v-aoClicar="{cor1: 'green', cor2: 'lightgreen'}">Clique</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cor: 'lightblue',
		}
	},
	directives: {
		'destaque-local': {
			bind(el, binding) {

				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					}
					else {
						el.style.color = cor
					}
				}
						let atraso = 0
						if(binding.modifiers['atrasar']) atraso = binding.value.atraso
						
						let cor1 = binding.value.cor1
						let cor2 = binding.value.cor2
						let corAtual = cor1

						setTimeout(() => {
							
							if(binding.modifiers['alternar']) {
								setInterval(() => {
									corAtual = corAtual == cor1 ? cor2 : cor1
									aplicarCor(corAtual)
								}, binding.value.intervalo);
							}
							else {
								aplicarCor(binding.value.cor1)
							}
						}, atraso);

			}
		},
		'aoClicar': {
			bind(el, binding) {
				let cor1 = binding.value.cor1
				let cor2 = binding.value.cor2
				let corAtual = cor1

				el.onclick = function() {

					corAtual = corAtual == cor1 ? cor2 : cor1

					if(corAtual === cor1) {
						el.style.backgroundColor = cor1
						el.style.borderColor = 'black'
					}
					else if(corAtual === cor2) {
						el.style.backgroundColor = cor2
						el.style.borderColor = 'grey'
					}
				}
			}
		}
	},
	methods: {

	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	width: 150px;
	height: 50px;
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
	border: 3px solid rgb(112, 112, 112)
	
}
</style>
