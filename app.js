import express from 'express';
import indexRoute from './Routes/index.js';
import usersRoute from './Routes/users.js';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
import { config } from 'dotenv';
import bodyParser from 'body-parser';

config();

mongoose.connect(
  'db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', () => {
  console.log('Erro na conexão com o banco de dados');
});

mongoose.connection.on('disconnected', () => {
  console.log('Aplicação desconectada do banco de dados');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3030, () => {
  console.log('API is running on PORT 3030');
});
