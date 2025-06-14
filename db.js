const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "restaurant.db";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS menu (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      price REAL
    )`);

    // Insert some initial data if table is empty
    db.get('SELECT COUNT(*) as count FROM menu', (err, row) => {
      if (row.count === 0) {
        const insert = 'INSERT INTO menu (name, description, price) VALUES (?,?,?)';
        db.run(insert, ["Margherita Pizza", "Classic cheese and tomato pizza", 8.99]);
        db.run(insert, ["Caesar Salad", "Fresh salad with Caesar dressing", 6.49]);
        db.run(insert, ["Chocolate Cake", "Rich chocolate layered cake", 5.25]);
      }
    });
  }
});

module.exports = db;
