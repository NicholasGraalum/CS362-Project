// verify handlebars build correctly
const chai = require('chai');
const handlebars = require('handlebars');
const fs = require('fs-extra');
const path = require('path');

const { expect } = chai;

describe('Handlebars Users Template', () => {
  let userTemplate;

  before(async () => {
    // Read the Handlebars template from the file
    const templatePath = path.join(__dirname, '../../views/users.handlebars');
    userTemplate = await fs.readFile(templatePath, 'utf-8');
  });

  it('should render a list of users correctly', () => {
    // Sample test data
    const testData = {
      users: [
        { username: 'Alice' },
        { username: 'Bob' },
        { username: 'Charlie' }
      ]
    };

    // Compile the template
    const template = handlebars.compile(userTemplate);

    // Render the template with test data
    const renderedHTML = template(testData);

    // Assertions to verify correct rendering
    expect(renderedHTML).to.include('<h1>All Users</h1>');
    expect(renderedHTML).to.include('<li>Alice</li>');
    expect(renderedHTML).to.include('<li>Bob</li>');
    expect(renderedHTML).to.include('<li>Charlie</li>');
  });
});
