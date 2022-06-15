const createError = require('http-errors');
const express = require('express');
const baseService = require('../base/base.service');

const checkModel = (model, body, next) => {
  const validationError = new model(body).validateSync();
  if (validationError) {
      next(
          new createError.BadRequest(
              JSON.stringify({
                  message: 'Schema validation error!',
                  error: validationError
              })
          )
      );
      return false;
  }
  return true;
}

module.exports = (model) => {
  const service= baseService(model);
  return {
    findAll(req, res, next) {
      return service.findAll()
        .then( list => res.json(list) );
    },
    findOne(req, res, next) {
      return service.findOne(req.params.id)
        .then(entity => res.json(entity));
    },
    create( req, res, next) {
      if (!checkModel(model, req.body, next)) {
        return;
      };

      return service.create(req.body)
        .then(entity => {
            res.status(201);
            res.json(entity);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
    },
    updateOne(req, res, next) {
      return service.updateOne(req.params.id, req.body)
        .then(entity => {
          res.status(202);
          res.json(entity);
        })
        .catch(err => {
          res.status(501);
          res.json(err);
        });
    },
    deleteOne(req, res, next) {
      return service.deleteOne(req.params.id)
        .then( () =>{
          res.status(202);
          res.json('Delete successful.');
        });
    }
  }
};