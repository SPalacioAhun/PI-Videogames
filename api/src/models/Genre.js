// const { DataTypes } = require('sequelize');


// module.exports = (sequelize) => {
//     sequelize.define('genre', {
//       id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         unique: true,
//       },
//       nombre: {
//         type: DataTypes.STRING
//       }
//     })
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Genre", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
  });
};