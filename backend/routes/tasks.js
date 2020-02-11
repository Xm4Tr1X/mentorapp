const router = require('express').Router();

const MentorModel = require('../modals/MentorsModel');



router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const data = await MentorModel.findById(id);
    res.status(200).json(data ? data.tasks : null);
});

router.post('/:id', async (req, res) => {
    const {id} = req.params;
    const {tasks} = req.query;
    MentorModel.updateOne({_id:id}, {$set: {tasks}})
    res.sendStatus(200);
});


module.exports = router;