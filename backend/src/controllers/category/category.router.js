const express = require('express');
const router = express.Router();
const Category = require('../../models/category');
const baseController = require('../base/base.controller')(Category);


//get 
router.get('/', (req, res, next) => {
  return baseController.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  return baseController.findOne(req, res, next);
});

// PATCH - update Category
router.patch('/:id', (req, res, next) => {
  return baseController.updateOne(req, res, next);
});

// POST - add new Category
router.post('/', (req, res, next) => {
  return baseController.create(req, res, next);
});

// DELETE - delete Category by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
});

module.exports = router;