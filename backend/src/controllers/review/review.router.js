const express = require('express');
const router = express.Router();
const Review = require('../../models/review');
const reviewController = require('./review.controller');
const baseController = require('../base/base.controller')(Review, ['editor_user rated_user']);


// GET
router.get('/', (req, res, next) => {
    return baseController.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
    return baseController.findOne(req, res, next);
});

// PATCH - update review
router.patch('/:id', (req, res, next) => {
    return baseController.updateOne(req, res, next);
});

// POST - add new review 
router.post('/', async (req, res, next) => {
  return baseController.create(req, res, next);
});

// DELETE - delete review by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
});

module.exports = router;