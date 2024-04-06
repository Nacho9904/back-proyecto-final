const { Router } = require('express')
const  { check } = require('express-validator')
const {validateFields} = require('../helpers/validateFields.js')
const router = Router()

const {getCanchas, createCanchas, updateCanchas, deleteCanchas} = require('../controllers/canchas.controllers.js')



router.get('/' ,getCanchas)
router.post('/',
[
    check('name').notEmpty(),
    validateFields
], createCanchas)
router.put('/', updateCanchas)
router.delete('/', deleteCanchas )

module.exports = router;