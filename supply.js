'use strict';
module.exports = (sequelize, DataTypes) => {
  const supply = sequelize.define('supply', {
    branch_id: DataTypes.INTEGER,
    branchsupplier_id: DataTypes.INTEGER,
    productImage: DataTypes.STRING,
    delta_t : DataTypes.INTEGER,
    field1 :DataTypes.FLOAT,
    field2 :DataTypes.FLOAT
  }, {});
  supply.associate = function(models) {
    // associations can be defined here
    supply.hasMany(models.branch,{as:'group',
      foreignKey:'id',
      sourceKey:'branch_id'
    });
    supply.hasMany(models.branchsupplier,{
      foreignKey:'id',
      sourceKey:'branchsupplier_id'
    });
  };
  return supply;
};