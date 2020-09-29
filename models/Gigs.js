// const Sequelize = require('sequelize')

// const db = require('../config/database')


// const Gig = db.define('kapil', {
//   title: {
//     type: Sequelize.STRING
//   },
//   technologies: {
//     type: Sequelize.STRING
//   },
//   description: {
//     type: Sequelize.STRING
//   },
//   budget: {
//     type: Sequelize.STRING
//   },
//   contact_email: {
//     type: Sequelize.STRING
//   },
//   createdAt: {
//     type: Sequelize.DATE
//   },
//   updatedAt: {
//     type: Sequelize.DATE
//   }

// })

// module.exports = Gig
const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const db = require('../config/database')

const Gig = db.define('users', {
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

module.exports = Gig