'use strict';
module.exports = (sequelize, DataTypes) => {
  const clientemployee = sequelize.define('clientemployee', {
    client_id: DataTypes.INTEGER,
    employee_id: DataTypes.INTEGER
  }, {});
  clientemployee.associate = function(models) {
    // associations can be defined here
    clientemployee.hasMany(models.client,{
      foreignKey:'id',
      sourceKey:'client_id'
    });
    clientemployee.hasMany(models.employee,{
      foreignKey:'id',
      sourceKey:'employee_id'
    });
  };
  return clientemployee;
};