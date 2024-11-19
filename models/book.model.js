const { DataTypes, sequelize } = require('../lib/index');

let book = sequelize.define('book', {
  title: DataTypes.TEXT,
  author: DataTypes.TEXT,
  description: DataTypes.TEXT,
  genre: DataTypes.TEXT,
});

module.exports = { book };
