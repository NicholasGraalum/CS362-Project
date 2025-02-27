const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('All Meals Route', () => {         // example test - should probably be expanded
    it('should return an HTML page with multiple meals', async () => {
      const res = await request(app).get('/meals');
      expect(res.status).to.equal(200);
      expect(res.text).to.include('Meals');
    });
  });

describe('Single Meal Route', () => {     // example test - should probably be expanded
  it('should return a HTML page with one meal', async () => {
    const res = await request(app).get('/meals/1');
    expect(res.status).to.equal(200);
    expect(res.text).to.include('Ingredients');
  });
});