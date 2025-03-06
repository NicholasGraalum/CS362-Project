const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const newDbPath = path.resolve(__dirname, '../database/database_data.db');

// Initialize database
function initializeDatabase(dbPath) {
  if (fs.existsSync(dbPath)) {  // if database file exists, connect
    return new Database(dbPath, { verbose: console.log });
  } else {
    let db = new Database(dbPath);  // if no database at path, make one
    db.exec("PRAGMA foreign_keys = ON;");
    createSchema(db);
    insertFillerData(db);
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
let db = initializeDatabase(newDbPath);
module.exports = { db, initializeDatabase };
