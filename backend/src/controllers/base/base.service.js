module.exports = (model) => {
  return {
    findAll: () => model.find({}),
    findOne: (id) => model.findById(id),
    create: (body) => {
      const newEntity = new model(body);
      const error = newEntity.validateSync();
      if (!error) {
        return newEntity.save();
      }
      throw new Error(error);
    },
    updateOne: async (id, body) => {
      const newEntity = new model(body);
      const error = newEntity.validateSync();
      if (!error) {
        model.findByIdAndUpdate(id, body, {new: true});
      }
      throw new Error(error);
    },
    deleteOne: (id) => model.findByIdAndRemove(id)
  };
};