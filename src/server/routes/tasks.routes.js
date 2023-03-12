/* eslint-disable no-console */
const express = require('express');
const router = express.Router();

const Task = (require('../models/task'));

router.get('/', async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

router.get('/:id', async (req, res) => {
  const tasks = await Task.findById(req.params.id);
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { title, description} = req.body;
  const task = new Task({ title, description });
  await task.save();
  res.json('task Saved');
});

router.put('/:id', async (req, res) => {
  const { title, description} = req.body;
  const task = { title, description };
  await Task.findByIdAndUpdate(req.params.id, task);
  res.json('task Updated');
})

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json('task Deleted');
});

module.exports = router;

