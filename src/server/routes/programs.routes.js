/* eslint-disable no-console */
const express = require('express');
const router = express.Router();

const Program = (require('../models/program'));

router.get('/', async(req, res) => {
    const programs = await Program.find({});
    res.json(programs);
});

router.get('/:id', async(req, res) => {
    const programs = await Program.findById(req.params.id);
    res.json(programs);
});

router.post('/', async(req, res) => {
    const { code, initials, name, lerningResults } = req.body;
    const program = new Program({ code, initials, name, lerningResults });
    await program.save();
    res.json('program Saved');
});

router.put('/:id', async(req, res) => {
    const { code, initials, name, lerningResults } = req.body;
    const program = { code, initials, name, lerningResults };
    await Program.findByIdAndUpdate(req.params.id, program);
    res.json('program Updated');
})

router.delete('/:id', async(req, res) => {
    await Program.findByIdAndRemove(req.params.id);
    res.json('program Deleted');
});

module.exports = router;