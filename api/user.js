let db = require('../database')

let usersearch = (req, res) => {
    if (typeof req.query.id === "undefined") {
        db.conn.query('select * from user', function(err, rows) {
            res.send(err || rows);
        });
    } else {
        db.conn.query({
            sql: 'select * from user where user_uuid=?',
            values: [req.query.id]
        }, function(err, rows) {
            res.send(err || rows);
        });
    }
}
let userinsert = () => {
    
}
let user = {
    usersearch: usersearch,
};

module.exports = user;