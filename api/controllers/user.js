const User = require('../models/user');
const CommonMethods = require('../utils/common-methods');

const findAll = async (req, res) => {
    try {
        const users = await User.find({})
            .sort({ createdAt: -1 });

        return res.send({ status: 'success', data: users });
    } catch (err) {
        console.log(err);
    }
}

const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const encryptedPassword = await CommonMethods.encryptPassword(password);
        const user = await User.create({
            name,
            email,
            password: encryptedPassword,
        });

        user.password = undefined;

        return res.status(201).send({ status: 'success', data: user });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    findAll,
    create,
};
