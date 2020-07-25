import express from 'express';
import routes from './src/routes/api';
import bodyParser from 'body-parser';
import { SERVER_PORT, APP_ENV } from './src/environments/server';

const app = express();
const PORT = SERVER_PORT;
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
routes(app);
 
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT} - ${APP_ENV.toUpperCase()} environment`);
});