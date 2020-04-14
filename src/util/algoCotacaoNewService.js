/**
* Name: algoCotacao.js (Algoritimo que busca uma cotacao)
* command: node app.js
*
 */


//Import
const request = require('request')

//Setando as constantes
//key -- 635382124eb5e985509850f15eb3ec73
//Token Public -- pk_9cffa39493414d998dfe9a28f940099e 
//Token Secret -- sk_9e5762e5225e434999ac4e9136e77d3d
const api_token = 'pk_9cffa39493414d998dfe9a28f940099e'

//Arrow Function: cotacao  
const cotacao = (symbol, callback) =>{
	/*New Servico API para bolsa de valores - Empresas Amaricanas*/
	//https://cloud.iexapis.com/ -- 
	//https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=pk_9cffa39493414d998dfe9a28f940099e

	

	const url = `https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=${api_token}`
	

	request({url: url, json: true}, (err, response) => {
		//Tratamento de erro
		if (err) {
			return callback({
				message: `Something went wrong: ${err}`,
				code: 500
			},undefined)
			console.log(err)
		}
		//Tratamento de erro
		if (response.body === undefined || response.body.data === undefined) {
			return callback({
				message: `No data found`,
				code: 404
			},undefined)
			console.log(response)
		}

		/**Old Service code 
		const parseJSON = response.body.data[0]

		//Destruct
		const {symbol, name, price, price_open, day_high, day_low} = parseJSON
		
		

		//Async return
		callback(undefined, {symbol, name, price, price_open, day_high, day_low})
		*/

		const parseJSON = response.body

			const data = {
				symbol: parseJSON.quote.symbol,
				name: parseJSON.quote.companyName,
				price: parseJSON.quote.calculationPrice,
				price_open: parseJSON.quote.open,
				day_high: parseJSON.quote.high,
				day_low: parseJSON.quote.low
			}
			return callback(undefined, data)
	})

}//END -> Arrow Function: cotacao




module.exports = {
	//Export function
	cotacao
}
