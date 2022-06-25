const express = require('express');
const router = express.Router();
const Worker = require('../../models/worker');
const workerController = require('./worker.controller');
const baseController = require('../base/base.controller')(Worker,['editor_user']);


// GET
router.get('/', (req, res, next) => {
    return baseController.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
    return baseController.findOne(req, res, next);
});

// PATCH - update worker
router.patch('/:id', (req, res, next) => {
    return baseController.updateOne(req, res, next);
});

// POST - add new worker 
router.post('/', async (req, res, next) => {
  return baseController.create(req, res, next);
});

// DELETE - delete worker by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
 });

module.exports = router;