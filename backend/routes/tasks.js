const router = require('express').Router();

const MentorModel = require('../modals/MentorsModel');



router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const data = await MentorModel.findById(id).exec();
    console.log(data);
    res.status(200).json(data ? data.tasks : null);
});

router.post('/:id', async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    console.log('body=>', body);
    await MentorModel.updateOne({_id:id}, {$set: {tasks:body}}).exec()
    res.sendStatus(200);
});


module.exports = router;