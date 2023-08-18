const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')
const { setDriver } = require('mongoose')

/* router.get('/', (req, res) => {
    // res.send('Get Goals')
    res.status(200).json({message: 'Get Goals'})
})

router.post('/', (req, res) => {
    // res.send('Get Goals')
    res.status(200).json({message: 'Set Goals'})
})

router.put('/:id', (req, res) => {
    // res.send('Get Goals')
    res.status(200).json({message: `Update goal: ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    // res.send('Get Goals')
    res.status(200).json({message: `Delete goal: ${req.params.id}`})
})*/

/*router.get('/', getGoals)
router.post('/', setGoal)*/
router.route('/').get(getGoals).post(setGoal)

/*router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)*/
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
