const UserModel = require('../models/users.model');

class UsersControllers {

    static async getAllUsers(req, res){
        const usersList = await UserModel.getAllUsers();

        res.render('users/listusers', {users: usersList});
    }

}

module.exports = UsersControllers;
