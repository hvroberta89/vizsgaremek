module.exports = (model, populateList = []) => {
  return {
    findAll: () => model.find({}).populate(...populateList),
    findOne: (id) => model.findById(id).populate(...populateList),
    create: async (body) => {
      const newEntity = new model(body);
      const error = await newEntity.validateSync();
      console.log(error);
      if (!error) {
          const saved = await newEntity.save();
          return model.findById(saved._id);
      }
      throw new Error(error);
    }, 
    updateOne: async (id, body) => { 
      const newEntity = new model(body);
      const error = await newEntity.validateSync();
      if (!error) {
        return model.findByIdAndUpdate(id, body, {new: true});
      }
      throw new Error(error);
    },
    deleteOne: (id) => model.findByIdAndRemove(id)
  };
};