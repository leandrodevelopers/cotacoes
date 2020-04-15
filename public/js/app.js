console.log('javascript no frontend')



const cotacoesForm = document.querySelector('form')
const sendMensage = document.querySelector('h3')
const returnInputErro = document.querySelector('#returnInputErro')
const price = document.querySelector('#price')
const price_open = document.querySelector('#price_open')
const day_high = document.querySelector('#day_high')
const day_low = document.querySelector('#day_low')

cotacoesForm.addEventListener('submit', () => {
	
	sendMensage.innerText = 'Buscando...'
	returnInputErro.innerText =''
	price.innerText = ''
	price_open.innerText = ''
	day_high.innerText = ''
	day_low.innerText = ''

	event.preventDefault()

	const ativo = document.querySelector('input').value

	if (!ativo) {
		sendMensage.innerText = 'O ativo deve ser informado'
		console.log('O ativo deve ser informado')
		return
	}
	fetch(`/cotacoes?ativo=${ativo}`).then((response) => {
		//('http://localhost:3000/cotacoes?ativo='+ativo)
	    response.json().then((data) => {
	        if(data.error){
	        	sendMensage.innerText = `Alguma coisa deu errado:  ${data.error.mensage} código ${data.error.code}`
	        	returnInputErro.innerText = ativo
	            console.log(`Alguma coisa deu errado:  ${data.error.mensage} código ${data.error.code}`)
	            console.log(ativo)
	        }else{
	            //console.log(data)//BBAS3.SA
	            sendMensage.innerText = data.symbol
	        	price.innerText = `Price: ${data.price}`
	        	price_open.innerText = `Price Open: ${data.price_open}`
	        	day_high.innerText = `Day Hight: ${data.day_high}`
	        	day_low.innerText = `Day Low: ${data.day_low}`
	           	            
	        }
	    })
	})
})