const knex = require('../db/knex');


const index = () => {
  return knex('cheeses') 
    .then(rows => rows)
    .catch(error => { console.error(error); }); 
}

const show = cheese_id => {
  return knex('cheeses') 
    .where('id', cheese_id)
    .then(rows => rows[0])
    .catch(error => { console.error(error); })
}

module.exports = {
  index,
  show
}