// Put tests testing profile routes here (just testing if the route returns success code)
const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('Visiting profile not logged in', () => {         
    it('should return status redirect status 302', async () => {
        const res = await request(app).get('/profile');
        expect(res.status).to.equal(302);
    });
});

describe('Visiting profile logged in', () => {  
    let agent;

    beforeEach(() => {
        agent = request.agent(app); // Create an agent to persist session cookies
    });

    it('should set session and access profile', async () => {
        // login
        await agent.post('/login').send({ email: 'alice@example.com', password: 'hashedpassword1' });
        const res = await agent.get('/profile');
        expect(res.status).to.equal(200);
    });
});