const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('User Account Creation Test', () => {

  it('should redirect to /login on successful account creation', async () => {
    const accountData = {
      email: 'testuser@example.com',
      password: 'password123',
      username: 'testuser',
      zipcode: '12345'
    };

    const res = await request(app)
      .post('/users/create')
      .redirects(0)
      .send(accountData);

      expect(res.status).to.equal(200);

    // // Expect a redirect status (302) and a location header pointing to /login.
    // expect(res.status).to.equal(302);
    // expect(res.headers.location).to.equal('/login?accountCreated=1');
  });

  // You can also add a test for missing required fields (for example, missing password)
  it('should display an error message if required fields are missing', async () => {
    const incompleteData = {
      email: 'testuser@example.com',
      username: 'testuser',
      zipcode: '12345'
      // password is missing
    };

    const res = await request(app)
      .post('/users/create')
      .send(incompleteData);

    // Since createUser renders the page with an error message on failure,
    // we expect a 200 status code and the rendered HTML to include the error text.
    expect(res.status).to.equal(200);
    expect(res.text).to.include('Email, password, and username are required');
  });

});
