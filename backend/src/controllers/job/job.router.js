const express = require('express');
const Job = require('../../models/job');
const controller = require('../base/base.controller')(Job);

const router = express.Router();

//get 
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});

// patch
router.patch('/:id', (req, res, next) => {
  return controller.updateOne(req, res, next);
});

module.exports = router;