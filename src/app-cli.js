/**
* Name: app.js (index da aplicacao)
* command: node app.js
*
 */

/**Import */
const algoCotacao = require('./util/algoCotacao')//Local Adress 
const chalk = require("chalk")
const yargs = require("yargs")

//alterando a versão CLI
yargs.version("1.0.0")


yargs.command({
    command: "consulta",
    describe:" *Busca um ativo na bolsa de valores",
    builder:{
        ativo:{
            describe: "Recebe symbol",
            demandOption: true,
            type: "string"
        }
    },
    handler:  (argv) => {
    	console.time(chalk.gray('Request processed on'))
		//Metodo cotacao      
        algoCotacao.cotacao(argv.ativo.toUpperCase(), (data) => {
        	//{symbol, name, price, price_open, day_high, day_low}
			console.log(chalk.green.bold.inverse(data.symbol))
			console.log(data.name)
			console.log(data.price)
			console.log(data.price_open)
			console.log(chalk.red.bold(`Menor valor do dia: ${data.day_low} `))
			console.log(chalk.blue.bold(`Maior valor do dia: ${data.day_high} `))
		console.timeEnd(chalk.gray('Request processed on'))
		})//END Metodo cotacao
          
    }//END handler
})//END metodo Yargs

yargs.parse()//Aciona(Ativa) o Yargs


/** 
algoCotacao.cotacao('BBAS3.SA', (data) => {
	console.log(data)
})
*/

















/** VERSÃO ANTERIOR
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


cotacao('PETR4.SA', (data) => {
	console.log(data)
})

*/



