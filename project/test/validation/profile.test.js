const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('Profile Page Rendering', () => {
    it('should render the profile page with user details', async () => {
        const mockSession = {
            userEmail: 'alice@example.com'
        };

        // Mock userModel behavior
        const userModel = require('../../models/userModel');
        userModel.getUserByEmail = (email) => ({
            username: 'testuser',
            email: email,
            zipcode: '97333',
        });

        const response = await request(app)
            .get('/profile')
            .set('Cookie', [`session=${JSON.stringify(mockSession)}`]);

        expect(response.status).to.equal(200);
        expect(response.text).to.include('Profile Page');
        expect(response.text).to.include('Username: alice123');
        expect(response.text).to.include('Email: alice@example.com');
        expect(response.text).to.include('Zipcode: 97333');
    });

    it('should redirect to login if user is not logged in', async () => {
        const response = await request(app).get('/profile');

        expect(response.status).to.equal(302);
        expect(response.header.location).to.equal('/login');
    });
});

describe('Profile Page Actions', () => {
    it('should update the store ID and zipcode when changing the zip code', async () => {
        const mockSession = { userEmail: 'alic@example.com' };

        // Mock userModel behavior
        const userModel = require('../../models/userModel');
        userModel.updateZipcode = (email, zip) => zip;

        // Mock the Kroger API request

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message', 'Login successful');
    });
});
