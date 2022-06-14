const express = require('express');
const router = express.Router();
const Job = require('../../models/job');
const jobController = require('./job.controller');
const baseController = require('../base/base.controller')(Job);


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

/* Update one job in terminal
fetch("http://localhost:3000/jobs/6296014011ad7fe9d378b562", {
   method: "PATCH",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
    title: "kerítés festés",
    nature: "kerti",
    description: "Mollit exercitation ad duis id. Lorem in voluptate commodo ipsum sit qui eiusmod ipsum",
    settlement: "Füzesabony",
    date: "2022-03-06",
    time: "5-8 óra",
    tools: true,
    wage: "fix összeg",
    amount: 9174,
    active: true,
    editor_user: "62a7795c0c679f33e9d61174"
   }),
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

// POST - add new job
router.post('/', (req, res, next) => {
  return jobController.create(req, res, next);
});

/* Add new job in terminal
fetch("http://localhost:3000/jobs", {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
    title: "kerítés festés",
    nature: "kerti",
    description: "Mollit exercitation ad duis id. Lorem in voluptate commodo ipsum sit qui eiusmod ipsum",
    settlement: "Füzesabony",
    date: "2022-03-06",
    time: "5-8 óra",
    tools: true,
    wage: "fix összeg",
    amount: 9174,
    active: true,
    editor_user: "62a7795c0c679f33e9d61174"
   }),
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

// DELETE - delete job by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
 });

/* Delete job by id
fetch("http://localhost:3000/jobs/6296021f11ad7fe9d378b578", {
   method: "DELETE",
   headers: {
      "Content-Type": "application/json",
   },
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

module.exports = router;