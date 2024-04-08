const connection = require('/database/db.js');
const express = require('express');
const router = express.Router(); 

connecting_db();

router.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    connection.query('SELECT password FROM users WHERE username = ?', [username], (err, result) => {
        if (err) {
            console.error('Query non eseguita:', err);
            return;
        }
        if (res.length === 0){
            console.log('Nessun utente trovato');
            return;
        }
        
        const dbPassword = result[0].password;
        const loginPassword = password;
        
        if(loginPassword === dbPassword){
            console.log('Password Corretta');
            window.location.href = '/frontend/public/home.html';
        }
        else{
            console.log('Password Errata');
        }
    });


    res.status(200).json({message: 'Dati ricevuti'});
});

module.exports = router;