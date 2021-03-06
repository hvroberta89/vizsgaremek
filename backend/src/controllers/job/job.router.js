const express = require('express');
const router = express.Router();
const Job = require('../../models/job');
const baseController = require('../base/base.controller')(Job, ['editor_user worker_user category']);


//get 
router.get('/', (req, res, next) => {
  return baseController.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  return baseController.findOne(req, res, next);
});

// PATCH - update Job 
router.patch('/:id', (req, res, next) => {
  return baseController.updateOne(req, res, next);
});

// POST - add new job
router.post('/', (req, res, next) => {
  return baseController.create(req, res, next);
});

// DELETE - delete job by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
});

module.exports = router;