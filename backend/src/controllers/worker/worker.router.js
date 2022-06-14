const express = require('express');
const router = express.Router();
const Worker = require('../../models/worker');
const workerController = require('./worker.controller');
const baseController = require('../base/base.controller')(Worker);


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

/* Update one worker in terminal
fetch("http://localhost:3000/workers/6296014011ad7fe9d378b562", {
   method: "PATCH",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
    name: "csmidmoorf",
    date_from: "2022-02-07",
    date_to: "2022-04-27",
    nature: "vízvezeték szerelés",
    settlement: "Bükkszenterzsébet"
   }),
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

// POST - add new worker 
router.post('/', async (req, res, next) => {
  return workerController.create(req, res, next);
});

/* Add new worker in terminal
fetch("http://localhost:3000/workers", {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
    name: "csmidmoorf",
    date_from: "2022-02-07",
    date_to: "2022-04-27",
    nature: "vízvezeték szerelés",
    settlement: "Bükkszenterzsébet"
   }),
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

// DELETE - delete worker by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
 });

/* Delete worker by id
fetch("http://localhost:3000/workers/6296021f11ad7fe9d378b578", {
   method: "DELETE",
   headers: {
      "Content-Type": "application/json",
   },
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

module.exports = router;