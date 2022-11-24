var api = require('../api'),
  path = require('path');

module.exports = function (app) {
  // habilitando HTML5MODE
  app.all('/*', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
    
  });


};
