const Joi = require('joi');

const schemas = {
    create: Joi.object().keys({
        name: Joi.string().required().min(2),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5)
    })
}

module.exports = schemas;
