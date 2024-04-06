const validateResult = require('express-validator')

const validateFields = (req, res, next, validateResult) => {
    const errors = validateResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)

    }
    next()
}


module.exports = {
    validateFields
}
  