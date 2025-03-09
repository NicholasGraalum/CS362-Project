const request = require('supertest');
const express = require('express');
const session = require('express-session');
const mealsRoutes = require('../../routes/mealsRoutes');

// Create an app instance for authenticated requests
const appWithAuth = express();
appWithAuth.use(express.json());
appWithAuth.use(express.urlencoded({ extended: false }));
appWithAuth.use(session({
  secret: 'testsecret',
  resave: false,
  saveUninitialized: true,
}));
// Middleware to simulate a logged in user with email "alice@example.com"
appWithAuth.use((req, res, next) => {
  req.session.userEmail = "alice@example.com";
  next();
});
appWithAuth.use('/meals', mealsRoutes);

// Create an app instance for unauthenticated requests
const appWithoutAuth = express();
appWithoutAuth.use(express.json());
appWithoutAuth.use(express.urlencoded({ extended: false }));
appWithoutAuth.use(session({
  secret: 'testsecret',
  resave: false,
  saveUninitialized: true,
}));
// Do not add the middleware that sets req.session.userEmail here (not logged in)
appWithoutAuth.use('/meals', mealsRoutes);

describe('POST /meals/create', function() {
  it('should create a new meal when all required fields are provided and user is logged in', function(done) {
    request(appWithAuth)
      .post('/meals/create')
      .send({
        name: "Test Meal",
        description: "Delicious test meal",
        image_link: "http://example.com/image.jpg",
        mealTypes: ["lunch", "dinner"],
        visibility: "public",
        servings: 2,
        categoryTags: ["healthy"]
      })
      .expect(200)
      .expect(res => {
        if (!res.body.id) throw new Error("Missing meal id in response");
      })
      .end(done);
  });

  it('should return 400 if required fields are missing', function(done) {
    request(appWithAuth)
      .post('/meals/create')
      .send({
        // No 'name' field to trigger error
        description: "Missing name field",
        image_link: "http://example.com/image.jpg",
        mealTypes: ["lunch"],
        visibility: "public",
        servings: 2,
        categoryTags: ["healthy"]
      })
      .expect(400)
      .end(done);
  });

  it('should redirect to /login if user is not logged in', function(done) {
    request(appWithoutAuth)
      .post('/meals/create')
      .send({
        name: "Test Meal",
        description: "Delicious test meal",
        image_link: "http://example.com/image.jpg",
        mealTypes: ["lunch", "dinner"],
        visibility: "public",
        servings: 2,
        categoryTags: ["healthy"]
      })
      .expect(302) // 302 means not logged in
      .expect('Location', '/login')
      .end(done);
  });
});
