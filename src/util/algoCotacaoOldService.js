/**
* Name: algoCotacao.js (Algoritimo que busca uma cotacao)
* command: node app.js
*
 */


//Import
const request = require('request')

//Setando as constantes
const api_token = 'LUjdH9cdY1GP8JF1AjofLgyNyU32aR8w15VgDIyxsfoEkSAJaulfAy4E9dit'

//Arrow Function: cotacao
const cotacao = (symbol, callback) =>{
	const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token	}`

	request({url: url, json: true}, (err, response) => {
		//Tratamento de erro
		if (err) {
			return callback({
				message: `Something went wrong: ${err}`,
				code: 500
			},undefined)
			
		}
		//Tratamento de erro
		if (response.body === undefined || response.body.data === undefined) {
			return callback({
				message: `No data found`,
				code: 404
			},undefined)
			
		}


		const parseJSON = response.body.data[0]

		//Destruct
		const {symbol, name, price, price_open, day_high, day_low} = parseJSON
		
		

		//Async return
		callback(undefined, {symbol, name, price, price_open, day_high, day_low})
	})

}//END -> Arrow Function: cotacao




module.exports = {
	//Export function
	cotacao
}
