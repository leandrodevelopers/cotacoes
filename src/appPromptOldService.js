/**Import*/
const request = require('request')
const prompt = require('prompt')
/**
const busca = 'https://api.worldtradingdata.com/api/v1/stock?symbol=PETR4.SA&api_token=LUjdH9cdY1GP8JF1AjofLgyNyU32aR8w15VgDIyxsfoEkSAJaulfAy4E9dit'

request({url: busca, json: true},(err, response) => {
	if (err) {
		console.error(err)
	}
	const parseJSON = response.body
	console.log(parseJSON.data[0].symbol)
	console.log(parseJSON.data[0].name)
	console.log(parseJSON.data[0].price)
})

*/

prompt.start()
 
  //
  // Get two properties from the user: username and email
  //
  prompt.get(['symbol'],(err, result) => {
    //
    // Log the results.
    //
    console.log('Command-line input received:')
    const entrada = result.symbol
    
 



	//Arrow Function 
	const cotacao = (symbol, callback) =>{
		const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=LUjdH9cdY1GP8JF1AjofLgyNyU32aR8w15VgDIyxsfoEkSAJaulfAy4E9dit`

		request({url: url, json: true},(err, response) => {
			if (err) {
				console.error(err)
			}
			const parseJSON = response.body

			const data = {
				symbol: parseJSON.data[0].symbol,
				name: parseJSON.data[0].name,
				price: parseJSON.data[0].price
			}
			callback(data)
		})

	}

	
	cotacao(entrada, (data) => {
		console.log(data)
	})

 })

