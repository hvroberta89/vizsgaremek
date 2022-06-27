const createError = require('http-errors');
const express = require('express');
const baseService = require('../base/base.service');


module.exports = (model, populateList = []) => {
  const service= baseService(model, populateList);
  return {
    findAll(req, res, next) {
      return service.findAll()
        .then( list => res.json(list) )
        .catch(error => next(new createError.NotFound('Items are not found')));
    },
    findOne(req, res, next) {
      return service.findOne(req.params.id)
        .then(entity => res.json(entity))
        .catch(error => next(new createError.NotFound('This item is not found')));
    },
    create(req, res, next) {
      return service.create(req.body)
        .then(entity => {
          res.status(201);
          res.json(entity);
        })
        .catch(err => {
          res.statusCode = 501;
          next(new createError.InternalServerError(err.message))
      });
    },
    updateOne(req, res, next) {
      return service.updateOne(req.params.id, req.body)
        .then(entity => {
          res.status(202);
          res.json(entity);
        })
        .catch(err => {
          res.status(501);
          next(new createError.InternalServerError(err.message));
        });
    },
    deleteOne(req, res, next) {
      return service.deleteOne(req.params.id)
        .then( response =>{
          res.status(202);
          res.json(response);
          res.json('Delete successful.');
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
    },
    search(req, res, next) {
      return service.findAll(req.query)
        .then( list => res.json(list) );
    }
  }
};