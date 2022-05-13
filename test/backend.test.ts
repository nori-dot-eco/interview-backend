import { server, resetDb } from '../server';
import request from 'supertest';

describe('backend', () => {
  afterEach(async () => {
    resetDb();
    await server.close();
  });
  describe('GET /hello', () => {
    it('responds with world', async () => {
      await request(server).get('/hello').expect(200);
    });
  });
  describe('POST /order', () => {
    it.todo('creates an order');
  });

  describe('GET /orders', () => {
    it.todo('retrieves all orders');
  });
});
