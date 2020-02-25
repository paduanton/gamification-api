import express from 'express'
import routes from './src/routes/routes'
import bodyParser from 'body-parser'
 
const app = express()
const PORT = 3000
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)
 
app.listen(PORT, () => {
    console.log(`servidor está rodando na porta: ${PORT}`);
})