import express from 'express'
import routes from './src/routes/downloadRoutes'
import mysql from 'mysql'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
 
const app = express()
const PORT = 3000
 
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)
 
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})