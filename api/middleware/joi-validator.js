const httpStatus = require('http-status');

const validator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        const valid = error == null;

        if (!valid) {
            const { details } = error;
            const message = details.map(i => i.message).join(',');

            res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ status: 'failed', error: message });
        }
        next();
    }
}

module.exports = validator;
