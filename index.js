import dotenv from 'dotenv';
import express from 'express'
import routes from './src/routes/api'
import bodyParser from 'body-parser'

dotenv.config();

const app = express()
const PORT = `${process.env.SERVER_PORT}`
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)
 
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})