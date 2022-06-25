const createError = require('http-errors');
const express = require('express');
const baseService = require('../base/base.service');
const { populate } = require('../../models/user');

module.exports = (model, populateList = []) => {
  const service= baseService(model, populateList = []);
  return {
    findAll(req, res, next) {
      return service.findAll()
        .then( list => res.json(list) );
    },
    findOne(req, res, next) {
      return service.findOne(req.params.id)
        .then(entity => res.json(entity));
    },
    create(req, res, next) {
      return service.create(req.body)
        .then(entity => res.json(entity))
        .catch(err => {
          res.statusCode = 501;
          res.json(err);
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
          res.json(err);
        });
    },
    deleteOne(req, res, next) {
      return service.deleteOne(req.params.id)
        .then( () =>{
          res.status(202);
          res.json('Delete successful.');
        });
    },
    search(req, res, next) {
      return service.findAll(req.query)
        .then( list => res.json(list) );
    }
  }
};