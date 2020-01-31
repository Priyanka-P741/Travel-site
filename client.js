'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    branch_id: DataTypes.INTEGER,
    client_name: DataTypes.STRING
  }, {});
  client.associate = function(models) {
    // associations can be defined here
    client.belongsTo(models.branch,{
      foreignKey:'id',
      sourceKey: 'client_id'
    });
    client.belongsTo(models.clientemployee,{
      foreignKey:'id',
      targetKey: 'client_id'
    });
  };
  return client;
};