// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://kin:psql@localhost/cheeses',
  },

  production: {
    client: 'pg',
    connection: process.env.DATBASE_URL
    }
};