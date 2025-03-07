// Put tests testing meal routes here (just testing if the route returns success code)
const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('All Meals Route', () => {         
    it('should return status 200', async () => {
      const res = await request(app).get('/meals');
      expect(res.status).to.equal(200);
    });
  });

describe('Single Meal Route', () => {    
  it('should return status 200', async () => {
    const res = await request(app).get('/meals/1');
    expect(res.status).to.equal(200);
  });
});