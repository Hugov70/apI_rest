import dotenv from 'dotenv';
import { resolve } from 'path';
// eslint-disable-next-line
dotenv.config(); 
// eslint-disable-next-line import/first
import './database';
// eslint-disable-next-line import/no-extraneous-dependencies, import/first
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// eslint-disable-next-line import/first
import homeRoutes from './routes/homeRoutes';
// eslint-disable-next-line import/first, no-unused-vars
import userRoutes from './routes/userRoutes';
// eslint-disable-next-line import/first, no-unused-vars
import tokenRoutes from './routes/tokenRoutes';
// eslint-disable-next-line import/first, no-unused-vars
import alunoRoutes from './routes/alunoRoutes';
// eslint-disable-next-line import/first, no-unused-vars
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http:192.168.0.90:82',
  'http://localhost:3000',
]

const corsOptions = {
  origin: function (origin, callback) {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
