const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const baseController = require('../base/base.controller')(User);


// GET
router.get('/', (req, res, next) => {
    return baseController.findAll(req, res, next);
});

router.get('/search', (req, res, next) => {
    return baseController.search(req, res, next);
});

router.get('/:id', (req, res, next) => {
    return baseController.findOne(req, res, next);
});

// PATCH - update user
router.patch('/:id', (req, res, next) => {
    return baseController.updateOne(req, res, next);
});

// POST - add new person 
router.post('/', async (req, res, next) => {
  return baseController.create(req, res, next);
});

// DELETE - delete user by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
 });

module.exports = router;