//@desc Get Goals
//@route GET /api/goals
//@access Priavte
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals from controller'})
}

//@desc Set Goals
//@route POST /api/goals
//@access Priavte
const setGoal = (req, res) => {
    console.log(req.body)
    if (!req.body.text){
        // res.status(400).json({message: 'Please include the text field'})
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(201).json({message: 'Set Goals'})
}

//@desc Update Goals
//@route PUT /api/goals:/id
//@access Priavte
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal: ${req.params.id}`})
}

//@desc Update Goals
//@route DELETE /api/goals/:id
//@access Priavte
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal: ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
