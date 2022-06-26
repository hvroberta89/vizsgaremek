const { join } = require('path');
const config = require('config');
const photoPath = config.get('photoPath');

module.exports = (req, res) => {
  let uploadFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
  }
  
  uploadFile = req.files.uploadFile;
  uploadFile.name = `${new Date().getTime()}_${uploadFile.name}`;
  uploadPath = join(photoPath.dir, uploadFile.name);

  uploadFile.mv(uploadPath, (err) => {
      if (err)
          return res.status(500).send(err);

      res.json({
          success: true, 
          name: uploadFile.name,
          path: uploadPath.replace(/\\/g, '/').replace('public/', ''),
      });
  });
}