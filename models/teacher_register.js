module.exports = (sequelize, DataType) => {
    const teacher_register = sequelize.define("teacher_register", {
      t_id: {
        type: DataType.STRING,
      },
      t_name: {
        type: DataType.STRING,
      },
      phno: {
        type: DataType.STRING,
      },
    });
    return teacher_register;
  };
  