module.exports = (sequelize, DataType) => {
    const exam_register = sequelize.define("exam_register", {
      exam_id: {
        type: DataType.STRING,
      },
      exam_name: {
        type: DataType.STRING,
      },
      exam_date: {
        type: DataType.STRING,
      },
    //   t_name: {
    //     type: DataType.STRING,
    //   },
    });
    return exam_register;
  };
  