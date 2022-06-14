const createError = require('http-errors');
const Review = require('../../models/review');
const baseService = require('../base/base.service')(Review);

exports.create = ( req, res, next) => {
  const { 
    editor_user, 
    rated_user,
    score,
    positive,
    negative,
    review_date
  } = req.body;
  if (!editor_user ||
    !rated_user ||
    !score ||
    !positive ||
    !negative ||
    !review_date) {
      return next(new createError.BadRequest('Missing properties.'));
    }
  const newReview = {
    editor_user, 
    rated_user,
    score,
    positive,
    negative,
    review_date
  };
  return baseService.create(newReview)
    .then((createdReview) => {
      res.status(201);
      res.json(createdReview);
    })
    .catch((err) => {
      next(new createError.BadRequest(err.message));
    });
};