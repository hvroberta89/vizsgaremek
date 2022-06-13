const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const userController = require('./user.controller');
const baseController = require('../base/base.controller')(User);


// GET
router.get('/', (req, res, next) => {
    return baseController.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
    return baseController.findOne(req, res, next);
});

// PATCH - update user
router.patch('/:id', (req, res, next) => {
    return baseController.updateOne(req, res, next);
});

/* Update one User in terminal
fetch("http://localhost:3000/users/6296014011ad7fe9d378b562", {
   method: "PUT",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
      user_name: "saireton0",
      first_name: "Sheila",
      last_name: "Aireton",
      gender: "Female",
      birth_date: "1994-08-27",
      address: "3390. Eger, Bánki Donát út 4.",
      email: "wpoyzer5@flavors.me",
      mobil_number: "+36-60/657-2586",
      password: "gfhgbbb123jk46fdsv"
   }),
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

// POST - add new person 
router.post('/', async (req, res, next) => {
  return userController.create(req, res, next);
});

/* Add new person in terminal
fetch("http://localhost:3000/users", {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
   },
   body: JSON.stringify({
      user_name: "saireton0",
      first_name: "Sheila",
      last_name: "Aireton",
      gender: "Female",
      birth_date: "1994-08-27",
      address: "3390. Eger, Bánki Donát út 4.",
      email: "wpoyzer5@flavors.me",
      mobil_number: "+36-60/657-2586",
      password: "gfhgbbb123jk46fdsv"
   }),
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

// DELETE - delete user by id 
router.delete('/:id', async (req, res, next) => {
   return baseController.deleteOne(req, res, next);
 });

/* Delete people by id
fetch("http://localhost:3000/users/6296021f11ad7fe9d378b578", {
   method: "DELETE",
   headers: {
      "Content-Type": "application/json",
   },
})
   .then((r) => r.json())
   .then((d) => console.log(d));
*/

module.exports = router;