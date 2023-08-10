const dbConfig = require("./config");

const Sequeliz = require("sequelize");
const Sequelize = new Sequeliz(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  operationsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.Sequelize = Sequelize;
db.subsection_register = require("./subsection_register")(Sequelize, Sequeliz.DataTypes);
db.teacher_register = require("./teacher_register")(Sequelize, Sequeliz.DataTypes);
db.student_register = require("./student_register")(Sequelize, Sequeliz.DataTypes);
db.exam_register = require("./exam_register")(Sequelize, Sequeliz.DataTypes);

db.Sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("sync false ");
});
module.exports = db;
