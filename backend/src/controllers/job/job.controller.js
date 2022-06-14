const createError = require('http-errors');
const Job = require('../../models/job');
const baseService = require('../base/base.service')(Job);

exports.create = ( req, res, next) => {
  const { 
    title, 
    nature,
    description,
    settlement,
    date,
    time,
    tools,
    wage,
    amount,
    active,
    editor_user,
    worker_user
  } = req.body;
  if (!title || 
    !nature ||
    !description ||
    !settlement ||
    !date ||
    !time ||
    !tools ||
    !wage ||
    !amount ||
    !active ||
    !editor_user) {
      return next(new createError.BadRequest('Missing properties.'));
    }
  const newJob = {
    title, 
    nature,
    description,
    settlement,
    date,
    time,
    tools,
    wage,
    amount,
    active,
    editor_user,
    worker_user
  };
  return baseService.create(newJob)
    .then( createdJob => {
      res.status(201);
      res.json(createdJob);
    })
    .catch( err => {
      next(new createError.BadRequest(err.message));
    });
};