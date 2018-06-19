// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/cheeses' || 'postgres://kin@localhost:5432/cheeses',
  },

  production: {
    client: 'pg',
    connection: process.env.DATBASE_URL
    }
};