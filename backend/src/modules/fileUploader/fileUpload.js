const { join } = require('path');

module.exports = (req, res) => {
  let uploadFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
  }

  uploadFile = req.files.uploadFile;
  uploadPath = join('./public/img', uploadFile.name);

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