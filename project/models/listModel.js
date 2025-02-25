const db = require('../database/db'); 

/* 
Returns array of all ingredients in list of given user
Returns empty array if no ingredients in list
*/
function getUserList(email) {
    const stmt = db.prepare(`
        SELECT i_name, amount FROM On_list
        WHERE email = ?
    `);
    return stmt.all(email);
}

/*
Add ingredient amount with given i_name to user shopping list with given email
*/
function addToList(email, i_name, amount) {
    try {
        const stmt = db.prepare(`
            INSERT INTO On_list (email, i_name, amount)
            VALUES (?, ?, ?)
            ON CONFLICT(email, i_name) DO UPDATE SET amount = excluded.amount;
        `);
        return stmt.run(email, i_name, amount);
       
    } catch (err) {
        console.error('Error adding ingredient to list:', err.message);
        throw err;
    }
}

/*
Delete ingredient with name i_name from the user shopping list with given email
*/
function removeFromList(email, i_name) {
    try {
        const stmt = db.prepare(`
            DELETE FROM On_list
            WHERE email = ? AND i_name = ?
        `);
        return stmt.run(email, i_name);
      
    } catch (err) {
        console.error('Error removing ingredient from list:', err.message);
        throw err;
    }
}

module.exports = { getUserList, addToList, removeFromList };