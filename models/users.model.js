const connection = require('../config/conectiondb');

class UserModel{

    static getAllUsers(){
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM user ORDER BY iduser DESC", function(err, rows, fields) {
                if (err){
                    console.log("ERROR", err);
                    return reject(err);
                } else {
                    return resolve(rows);
                }
            });
        });
    }

    static registerNewUser(username, password){
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO user(username,password) VALUES(?, ?)", [username, password], function(err, rows, fields) {
                if (err){
                    console.log("ERROR", err);
                    return reject(err);
                } else {
                    return resolve(rows);
                }
            });
        });
    }

}

module.exports = UserModel;
