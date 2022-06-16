const fsp = require('fs').promises;
const { join } = require('path');

const modelList = [
  //'user',
  //'job',
  //'review',
  //worker'
];

(async () => {
  modelList.forEach(async (model) => {
    const jsonData = await fsp.readFile(
      join(__dirname, `${model}.json`), 
      'utf8'
    );
    const entity = JSON.parse(jsonData);

    return await require(`../models/${model}`).insertMany(entity)
  });
})();