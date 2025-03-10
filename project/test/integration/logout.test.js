const request = require('supertest');
const express = require('express');
const session = require('express-session');
const userRoutes = require('../../routes/userRoutes'); // Assuming logout is handled in userRoutes

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
  req.session.userEmail = "test@example.com"; // Simulating a logged-in session
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

describe('GET /logout', function() {

  it('should log out a logged-in user and redirect to /login', function(done) {
    request(appWithAuth)
      .get('/users/logout')
      .expect(302) // Expect a redirect
      .expect('Location', '/login') // Redirect to login page
      .end((err, res) => {
        if (err) return done(err);
        // Ensure session is cleared after logout
        expect(res.headers['set-cookie']).to.exist;
        done();
      });
  });

  it('should still redirect to /login even if user is not logged in', function(done) {
    request(appWithoutAuth)
      .get('/users/logout')
      .expect(302) // Expect a redirect
      .expect('Location', '/login') // Redirect to login page
      .end(done);
  });

});
