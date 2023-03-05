/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const Task = (require('../models/task'));

router.get('/', async (req, res) => {
  try {
    await Task.find((err, task) => console.log(task));
  } catch (err) {
    console.log(err);
  }
  res.send({ status: 'App working properly' });
});

module.exports = router;

