'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    branch_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    salary: DataTypes.INTEGER,
    sex: DataTypes.STRING
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
    employee.belongsTo(models.branch,{
      foreignKey:'id',
      sourceKey: 'employee_id'
    });
    employee.belongsTo(models.clientemployee,{
      foreignKey:'id',
      targetKey: 'employee_id'
    });
  };
  return employee;
};