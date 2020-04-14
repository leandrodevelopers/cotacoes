/**
* Name: app.js (index da aplicacao)
* command: node app.js
*
 */

/**Import COR NodeJS*/
const path = require('path') 
/**Imports */
const express = require("express")
const hbs = require('hbs')

/**Configuracao basica do Express */
const app = express()

/**Configuracao path.join para a pasta public
 * Pasta public contem conteudo estatico
 * Definindo para o node o caminho a ser usado para o conteudo estatico 
 * com app.use(express.static(...))
 */
const publicDirectoryPath = path.join(__dirname, '../public')
//Definindo o caminho da template para o VIEW do HBS
const viewsPath = path.join(__dirname, '../templates/views')

const hbsPath = path.join(__dirname, '../templates/partials')

//Setando a config do HBS
app.set('view engine', 'hbs')
//Setando a config views para template
app.set('views', viewsPath)
hbs.registerPartials(hbsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
	res.render('index', {
		title: 'Bem vindo ao sistema de cotação',
		author: 'Leandro de Paula'
	}) 
})

/**Demonstração 
//Arrow Function tipo GET
app.get('',(req, res) => {
	res.send('Hello minhaapp')
})


app.get('/help',(req, res) => {
	res.send('Help page')
})


app.get('/about',(req, res) => {
	
	res.send('My page history and about')
})
*/

app.get('/cotacao',(req, res) => {
	const cotacao = {
		symbol: 'PETR4.SA',
		price_open: 10,
		price: 12,
		day_high: 13,
		day_low: 9
	}
	const cotacoes = new Array()
	cotacoes.push(cotacao)
	cotacoes.push(cotacao)
	res.send(cotacoes)
})

//Teste
app.get('/test',(req, res) => {
	res.send('<h1> Teste de Testes</h1>')
})

app.listen(3000,() => {
	console.log('Server is up on port 3000')
})