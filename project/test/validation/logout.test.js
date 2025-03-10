const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('User Logout Test', () => {
  it('should destroy the session and redirect to /login on logout', async () => {
    // Create an agent to persist cookies across requests.
    const agent = request.agent(app);

    // Simulate a login so that we have a valid session.
    // Adjust the login data to match your login route requirements.
    const loginData = { email: 'alice@example.com', password: 'hashedpassword1' };
    // Here we assume that your /login route sets the session cookie and returns a redirect.
    await agent
      .post('/login')
      .send(loginData)

    // Now call the logout route.
    const res = await agent
      .post('/users/logout')

    // Check that the response is a redirect to the login page.
    expect(res.status).to.equal(302);
    expect(res.headers.location).to.equal('/login');
  });
});
