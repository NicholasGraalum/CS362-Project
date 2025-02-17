const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, '../database/database_data.db');

// Initialize database
function initializeDatabase() {
  if (fs.existsSync(dbPath)) {
    return new Database(dbPath, { verbose: console.log });
  } else {
    const db = new Database(dbPath, { verbose: console.log });
    createSchema(db);
    insertFillerData(db);
    return db;
  }
}

// Schema and data initialization functions
function createSchema(db) {
  const schemaPath = path.resolve(__dirname, '../database/schema.sql');
  const schemaSQL = fs.readFileSync(schemaPath, 'utf-8');
  db.exec(schemaSQL);
}

function insertFillerData(db) {
  const fillerDataPath = path.resolve(__dirname, '../database/initial_filler.sql');
  const fillerSQL = fs.readFileSync(fillerDataPath, 'utf-8');
  db.exec(fillerSQL);
}

// Exporting the initialized database object
const db = initializeDatabase();
module.exports = db;
