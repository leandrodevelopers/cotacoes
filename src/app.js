const path = require('path')
const express = require('express')
const hbs = require('hbs')
const algoCotacao = require('./util/algoCotacao')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Cotações',
        author: 'Leandro de Paula'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'Sobre',
        author: 'Leandro de Paula'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Ajuda',
        author: 'Leandro de Paula'
    })
})

app.get('/cotacoes', (req, res) => {
    if(!req.query.ativo){
        return res.status(400).json({
            error : {
                mensage: 'O ativo deve ser informado como query parameter',
                code : 400
            }
        })
    }

    const symbol = req.query.ativo.toUpperCase()
    
    algoCotacao.cotacao(symbol, (err, body) => {
        if(err){
                    
            return res.status(err.code).json({
                error : {
                    mensage: err.message,
                    code : err.code
                }
            })
        }
        return res.status(200).json(body)
        
   })
})


app.get('/help/*', (req, res) => {
    
    res.render('404', {
        title : '404',
        errorMessage : 'Não existe página depois de /help',
        author: 'Leandro de Paula'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title : '404',
        errorMessage : 'Página não encontrada',
        author: 'Leandro de Paula'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})