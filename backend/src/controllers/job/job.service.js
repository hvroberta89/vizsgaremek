const Job = require('../../models/job');
const user = require('../../models/user');
const User = require('../../models/user');

exports.create= jobData => {
  const job = new Job(jobData);
  return job.save()
    .then ( () => User.findById(job.asEmployer))
    .then ( (job) => {
      user.asEmployer.push(job._id);
      return user.save();
    })
    .then( () => job ); 
};