import 'dotenv/config';
import express, { Express } from 'express';

type Order = { quantity: number };

const { PORT } = process.env;

export let db: Record<string, Order> = {};

export const resetDb = () => {
  db = {};
};

const app: Express = express();


app.get('/hello', (_req, res) => {
  res.send('world');
});

app.post('/order', (req, res) => {
  // TODO write your code here to update the db with an order
});

app.get('/orders', (req, res) => {
  // TODO write your code here to return all the orders
});

export const server = app.listen(PORT, () => {
  console.info('Express application started on port: ' + PORT);
});
