const mysql = require('mysql2');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'nico',
    password: 'Nikolo997',
    database: 'myexpenses'
});

