const createError = require('http-errors');
const Worker = require('../../models/worker');
const baseService = require('../base/base.service')(Worker);

exports.create = ( req, res, next) => {
  const { 
    name, 
    date_from,
    date_to,
    nature,
    settlement
  } = req.body;
  if (!name || 
    !date_from ||
    !date_to ||
    !nature ||
    !settlement) {
      return next(new createError.BadRequest('Missing properties.'));
    }
  const newWorker = {
    name, 
    date_from,
    date_to,
    nature,
    settlement
  };
  return baseService.create(newWorker)
    .then((createdWorker) => {
      res.status(201);
      res.json(createdWorker);
    })
    .catch((err) => {
      next(new createError.BadRequest(err.message));
    });
};