'use strict';
module.exports = (sequelize, DataTypes) => {
  const branch = sequelize.define('branch', {
    branch_name: DataTypes.STRING,
    branch_employee: DataTypes.STRING
  }, {});
  branch.associate = function(models) {
    // associations can be defined here
    branch.hasMany(models.client,{
      foreignKey: 'id',
      targetKey: 'client_id'
    });
    branch.hasMany(models.employee,{as:'user',
      foreignKey: 'id',
      targetKey: 'employee_id'
    });
    branch.belongsTo(models.supply,{
      foreignKey:'id',
      targetKey: 'branchsupplier_id'
    });
  };
  return branch;
};