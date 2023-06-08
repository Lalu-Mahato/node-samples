const bcrypt = require('bcryptjs');

class CommonMethods {
    static async encryptPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }
}

module.exports = CommonMethods;
