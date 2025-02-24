const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Users Route', () => {
  it('should return an HTML page with users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).to.equal(200);
    expect(res.text).to.include('All Users');
  });
});
