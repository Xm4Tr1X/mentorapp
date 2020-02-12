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
    const {name, topic} = req.body;
    console.log('query', req.query)
    
    MentorModel.create({name, topic}).catch(e=> console.error(e.message));
    res.sendStatus(200);
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {name, topic} = req.body;
    MentorModel.updateOne({_id:id}, {$set:{name, topic}}).exec().then();
    res.sendStatus(200);
});


router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    MentorModel.deleteOne({_id:id}).exec().then();
    res.sendStatus(200);
});

module.exports = router;