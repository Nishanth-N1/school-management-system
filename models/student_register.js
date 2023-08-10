module.exports = (sequelize, DataType) => {
    const student_register = sequelize.define("student_register", {
      student_id: {
        type: DataType.STRING,
      },
      student_name: {
        type: DataType.STRING,
      },
      password: {
        type: DataType.STRING,
      },
      student_rollno: {
        type: DataType.STRING,
      },
      student_father_name: {
        type: DataType.STRING,
      },
      student_bloodgrp: {
        type: DataType.STRING,
      },
      student_dob: {
        type: DataType.STRING,
      },
      student_number: {
        type: DataType.STRING,
      },
      student_enumber: {
        type: DataType.STRING,
      },
    //   student_cenroll: {
    //     type: DataType.STRING,
    //   },
      student_qualification: {
        type: DataType.STRING,
      },
      student_dateofjoin: {
        type: DataType.STRING,
      },
      student_sem: {
        type: DataType.STRING,
      }
    });
    return student_register;
  };
  