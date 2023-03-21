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
    const { title, description } = req.body;
    const program = new Program({ title, description });
    await program.save();
    res.json('program Saved');
});

router.put('/:id', async(req, res) => {
    const { title, description } = req.body;
    const program = { title, description };
    await Program.findByIdAndUpdate(req.params.id, task);
    res.json('program Updated');
})

router.delete('/:id', async(req, res) => {
    await Program.findByIdAndRemove(req.params.id);
    res.json('program Deleted');
});

module.exports = router;