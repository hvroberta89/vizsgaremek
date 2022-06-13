const baseService = require('../base/base.service');
const Job = require('../../models/job');

const service = baseService(Job);

exports.findAll = (req, res, next) => {
  return service.findAll()
      .then( list => res.json(list) );
};