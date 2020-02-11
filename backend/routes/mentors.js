const router = require('express').Router();
const MentorModel = require('../modals/MentorsModel');

router.get('/', async (req, res) => {
    // const data = new model({name: 'Ninaad', topic: 'Topic 1'});
    const data = await MentorModel.find({}).exec();
    res.status(200).json(data);
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const data = await MentorModel.findById(id);
    res.status(200).json(data);
});

router.post('/', async (req, res) => {
    const {name, topic} = req.query;
    MentorModel.create({name, topic});
    res.sendStatus(200);
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {name, topic} = req.query;
    MentorModel.updateOne({_id:id}, {$set:{name, topic}});
    res.sendStatus(200);
});


router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    MentorModel.deleteOne({_id:id});
    res.sendStatus(200);
});

module.exports = router;