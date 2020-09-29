

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const User = db.define('users', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middlename: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phonenumber: {
    type: DataTypes.INTEGER
  },

  role: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  }
}, {
});




module.exports = User