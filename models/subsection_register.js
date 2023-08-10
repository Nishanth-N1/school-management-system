module.exports = (sequelize, DataType) => {
  const subsection_register = sequelize.define("subsection_register", {
    subsection_id: {
      type: DataType.STRING,
    },
    subsection_name: {
      type: DataType.STRING,
    },
    password: {
      type: DataType.STRING,
    },
    t_name: {
      type: DataType.STRING,
    },
  });
  return subsection_register;
};
