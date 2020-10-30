// Aqui realizar las operaciones crud.

let ctr = {};

/**
 * Post Route
 */
ctr.postCrud = () => async (req, res, next) => {
    const {user, password} = req.body;
    return res.status(201).json(`Welcome ${user}!`);
}

/**
 * Delete Route
 */
ctr.deleteCrud = () => async (req, res, next) => {
    const {taskId} = req.body;
    return res.status(201).json({delete: true});
}

/**
 * PUT Route
 */
ctr.putCrud = () => async (req, res, next) => {
    const {taskId} = req.params;
    return res.status(201).json(`Task ${taskId} has been updated!`);
}



// Export.
module.exports = ctr;