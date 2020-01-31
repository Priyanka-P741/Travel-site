'use strict';
module.exports = (sequelize, DataTypes) => {
  const branchsupplier = sequelize.define('branchsupplier', {
    supplier_name: DataTypes.STRING,
    supply_type: DataTypes.STRING
  }, {});
  branchsupplier.associate = function(models) {
    // associations can be defined here
    branchsupplier.belongsTo(models.supply,{
      foreignKey:'id',
      targetKey: 'branch_id'
    });
  };
  return branchsupplier;
};