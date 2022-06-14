const express = require('express');
const router = express.Router();
const Review = require('../../models/review');
const reviewController = require('./review.controller');
const baseController = require('../base/base.controller')(Review);


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

/* Update one review in terminal
fetch("http://localhost:3000/reviews/6296014011ad7fe9d378b562", {
   method: "PATCH",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
    editor_user: "62a874b05c5921b642dc9a25", 
    rated_user: "62a879437fe4959c7aa19953",
    score: 4,
    positive: "pontos és ügyes",
    negative: "picit drága",
    review_date: "2022-03-14"
   }),
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

// POST - add new review 
router.post('/', async (req, res, next) => {
  return reviewController.create(req, res, next);
});

/* Add new review in terminal
fetch("http://localhost:3000/reviews", {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
    editor_user: "62a874b05c5921b642dc9a25", 
    rated_user: "62a879437fe4959c7aa19953",
    score: 4,
    positive: "pontos és ügyes",
    negative: "picit drága",
    review_date: "2022-03-14"
   }),
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

// DELETE - delete review by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
 });

/* Delete review by id
fetch("http://localhost:3000/review/6296021f11ad7fe9d378b578", {
   method: "DELETE",
   headers: {
      "Content-Type": "application/json",
   },
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

module.exports = router;