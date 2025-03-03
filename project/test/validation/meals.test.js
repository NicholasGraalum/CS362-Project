// put tests validating requirements for meals page here 
const request = require('supertest');
const { expect } = require('chai');
const cheerio = require('cheerio');
const app = require('../../app');

describe('All Meals Route', () => {         // example test - should be expanded to test for all required data 
    it('should return an HTML page with multiple meals', async () => {
      const res = await request(app).get('/meals');
      expect(res.status).to.equal(200);
      expect(res.text).to.include('Meals');
    });
  });

describe('Single Meal Route', () => {     // example test - should be expanded to test for all required data 
  it('should return a HTML page with one meal', async () => {
    const res = await request(app).get('/meals/1');
    expect(res.status).to.equal(200);
    expect(res.text).to.include('Ingredients');
  });
});

describe('Search Meals by name', () => {
  it('should return a HTML page containing Chicken', async () => {
    // search params
    const searchTerm = 'Ch';  
    const mealTypes = '';      
    const categoryTags = '';   

    // build the URL
    const params = new URLSearchParams({
      mealName: searchTerm,
      mealTypes,     
      categoryTags    
    }).toString();

    // Send the GET request with query parameters
    const res = await request(app).get(`/meals/search?${params}`);
    
    expect(res.status).to.equal(200);
    expect(res.text).to.include('Chicken Curry');
  });

  // validate no other non matching meals exist
  it('should return a HTML page with no meals that do not contain the string', async () => {
    // search params
    const searchTerm = 'Ch';  
    const mealTypes = '';      
    const categoryTags = '';   

    // build the URL
    const params = new URLSearchParams({
      mealName: searchTerm,
      mealTypes,     
      categoryTags    
    }).toString();

    // Send the GET request with query parameters
    const res = await request(app).get(`/meals/search?${params}`);
    expect(res.status).to.equal(200); 
    
    const $ = cheerio.load(res.text); 

    // Find all divs with class 'meal' and check their data-name attribute
    $('.meal').each((index, element) => {
      const mealName = $(element).attr('data-name');  // Get the data-name attribute of each meal div
      expect(mealName.toLowerCase()).to.include(searchTerm.toLowerCase());  // Ensure the data-name contains the searchTerm string
    });
  });
});