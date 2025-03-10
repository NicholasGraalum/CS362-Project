const request = require('supertest');
const express = require('express');
const session = require('express-session');
const userRoutes = require('../../routes/userRoutes'); // Assuming user routes handle profile creation

// Create an app instance for authenticated requests
const appWithAuth = express();
appWithAuth.use(express.json());
appWithAuth.use(express.urlencoded({ extended: false }));
appWithAuth.use(session({
  secret: 'testsecret',
  resave: false,
  saveUninitialized: true,
}));
// Middleware to simulate a logged-in user
appWithAuth.use((req, res, next) => {
  req.session.userEmail = "test@example.com";
  next();
});
appWithAuth.use('/users', userRoutes);

// Create an app instance for unauthenticated requests
const appWithoutAuth = express();
appWithoutAuth.use(express.json());
appWithoutAuth.use(express.urlencoded({ extended: false }));
appWithoutAuth.use(session({
  secret: 'testsecret',
  resave: false,
  saveUninitialized: true,
}));
appWithoutAuth.use('/users', userRoutes);

describe('POST /users/create', function() {
  
  it('should create a new user when all required fields are provided', function(done) {
    request(appWithoutAuth)
      .post('/users/create')
      .send({
        email: "newuser@example.com",
        password: "securepassword",
        username: "newuser",
        zipcode: "12345"
      })
      .expect(302) // Expect a redirect to login
      .expect('Location', '/login')
      .end(done);
  });

  it('should return 400 if required fields are missing', function(done) {
    request(appWithoutAuth)
      .post('/users/create')
      .send({
        // Missing 'email' field
        password: "password",
        username: "userwithoutemail",
        zipcode: "67890"
      })
      .expect(400)
      .end(done);
  });

  it('should return 400 if user already exists', function(done) {
    request(appWithoutAuth)
      .post('/users/create')
      .send({
        email: "existinguser@example.com", // Assuming this email is already in the database
        password: "password",
        username: "existinguser",
        zipcode: "54321"
      })
      .expect(400)
      .expect(res => {
        if (!res.text.includes('User already exists')) throw new Error("User already exists message not shown");
      })
      .end(done);
  });

});
