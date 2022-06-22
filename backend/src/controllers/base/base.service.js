module.exports = (model) => {
  return {
    findAll: () => model.find({}),
    findOne: (id) => model.findById(id),
    create: async (body) => {
      const newEntity = new model(body);
      const error = newEntity.validateSync();
      if (!error) {
        const savedEntity = await newEntity.save();
        return model.findById(savedEntity._id);
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