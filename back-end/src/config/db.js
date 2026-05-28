const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '362512',
    database: 'db_pomodoro'
})

module.exports = pool
