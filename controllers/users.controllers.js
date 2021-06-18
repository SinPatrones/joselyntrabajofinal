const UserModel = require('../models/users.model');

class UsersControllers {

    static async getAllUsers(req, res){
        const usersList = await UserModel.getAllUsers();

        res.render('users/listusers', {users: usersList});
    }

    static async signinUser(req, res){
        const username = req.body.username;
        const password = req.body.password;

        const newUser = await UserModel.registerNewUser(username, password);

        if (newUser){
            res.redirect('/users')
        } else {
            res.send("No se pudo registrar");
        }
    }
}

module.exports = UsersControllers;
