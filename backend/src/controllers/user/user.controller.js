const createError = require('http-errors');
const User = require('../../models/user');
const baseService = require('../base/base.service')(User);

exports.create = ( req, res, next) => {
  const { 
    user_name, 
    first_name,
    last_name,
    gender,
    birth_date,
    address,
    email,
    mobil_number,
    photo,
    password
  } = req.body;
  if (!user_name ||
    !first_name ||
    !last_name ||
    !gender ||
    !birth_date ||
    !address ||
    !email ||
    !mobil_number) {
      return next(new createError.BadRequest('Missing properties.'));
    }
  const newUser = {
    user_name, 
    first_name,
    last_name,
    gender,
    birth_date,
    address,
    email,
    mobil_number,
    photo,
    password
  };
  return baseService.create(newUser)
    .then((createdUser) => {
      res.status(201);
      res.json(createdUser);
    })
    .catch((err) => {
      next(new createError.BadRequest(err.message));
    });
};