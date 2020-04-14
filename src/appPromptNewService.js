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
    
 
    const api_token = 'pk_9cffa39493414d998dfe9a28f940099e'


	//Arrow Function 
	const cotacao = (symbol, callback) =>{
		const url =`https://cloud.iexapis.com/stable/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=10&token=${api_token}`

		request({url: url, json: true},(err, response) => {
			if (err) {
				console.error(err)
			}
			const parseJSON = response.body

			const data = {
				symbol: parseJSON.quote.symbol,
				name: parseJSON.quote.companyName,
				price: parseJSON.quote.calculationPrice,
				price_open: parseJSON.quote.open,
				day_high: parseJSON.quote.high,
				day_low: parseJSON.quote.low
			}

			
			return callback(console.log(data))
			//return callback(console.log(response))
		})

	}

	
	cotacao(entrada, (data) => {
		console.log(data)
	})

 })

