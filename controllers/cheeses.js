const cheeseModel = require('../models/cheese');

const index = () => {
  logModel.index()
  .then( result => { res.json(result);})
  .catch(error => { console.error(error); });
}

const show = (req, res) => {
  cheeseModel.show(req.params.cheese_id)
  .then(result => { res.json(result);})
  .catch(error => { console.error(error); })
}

module.exports = {
  index,
  show
}