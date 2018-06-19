
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cheeses').del()
    .then(function () {
      // Inserts seed entries
      return knex('cheeses').insert([
        {id: 1, name: 'Gouda', description: 'Great sense of humor, tips well, hates pets, kids and your mother.'},
        {id: 2, name: 'Swiss', description: 'Listens to NPR, gives charitably, Vegan and proud.'},
        {id: 3, name: 'Cheddar', description: 'Good, solid character. Lives with his mother, sold drugs in college.'}
      ]);
    });
};
