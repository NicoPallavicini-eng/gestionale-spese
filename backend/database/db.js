const mysql = require('mysql2');

const connecting_db = () => {
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'nico',
    password: 'Nikolo997',
    database: 'myexpenses'
});

connection.conn((err) => {
    if(err){
        console.error('Errore nella connesione al database:', err);
        return;
    }
    console.log('Connesso al database');
});
}

module.exports = connecting_db;