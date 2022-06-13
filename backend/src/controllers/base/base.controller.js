const express = require('express');
const baseService = require('../base/base.service');

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