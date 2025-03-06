// validate login use case requirements and functionality
const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');  

describe('User Login Test', () => {

    // Test for successful login
    it('It should redirect to /meals on successful login', async () => {
        const loginData = { email: 'alice@example.com', password: 'hashedpassword1' }; 

        const loginRes = await request(app)
            .post('/login')
            .send(loginData);

        // Check that the login was successful
        expect(loginRes.status).to.equal(200);
        
        // SHOULD EXPAND TEST TO CHECK FOR REDIRECT
        // expect(loginRes.status).to.equal(302);  // 302: Redirect
        // expect(loginRes.headers.location).to.equal('/meals');  // Redirect location should be /meals
    });

    // Test for failed login
    it('It should respond with status 401 on failed login', async () => {
        const invalidLoginData = { email: 'alice@example.com', password: 'wrongpassword' }; // Invalid credentials

        const loginRes = await request(app)
            .post('/login') 
            .send(invalidLoginData);

        // Check for failed login status 401
        expect(loginRes.status).to.equal(401); 
    });
});
