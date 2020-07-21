/**
* API RDSM
* Retorna preços do RDStation Marketing 
*
 */


//Import
const request = require('request')

//Arrow Function  
const cotacao = (service, callback) =>{//service = RDSM

	const url = `https://servidor.com.br/dados${service}`
	

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
		if (response.body === undefined || response.body.service === undefined) {
			return callback({
				message: `No data found`,
				code: 404
			},undefined)
			console.log(response)
		}


				
		
		const stringifyJSON = JSON.stringify(response.body.service) 

			
			return callback(undefined, stringifyJSON)
			return callback(console.log(undefined, stringifyJSON))
	})

}//END -> Arrow Function: cotacao




module.exports = {
	//Export function
	cotacao
}
