const knex = require('../db/knex');


const index = () => {
  return knex('logs') // call knex on table AKA SELECT * FROM logs
    .then(rows => rows) // knex returns an array of objects, each with their respective column name and their rows. In this case "rows"
    .catch(error => { console.error(error); }); // the error catching
}

const show = log_id => {
  return knex('logs') // call knex on table AKA SELECT * FROM logs
    .where('id', log_id) // SELECT * FROM logs WHERE id = id;
    .then(rows => rows[0]) // Return that one
    .catch(error => { console.error(error); })
}

module.exports = {
  index,
  show
}