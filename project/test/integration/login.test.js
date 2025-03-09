// Put tests testing login routes here (just testing if the route returns success code)
const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('Login page route', () => {         
    it('should return status 200', async () => {
      const res = await request(app).get('/login');
      expect(res.status).to.equal(200);
    });
  });
