const sequelize = require('./sequelize')

async function authenticate() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

module.exports.initialize = authenticate;
