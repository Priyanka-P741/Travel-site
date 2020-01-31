'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('supplies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productImage: {
        type: Sequelize.STRING
      },
      branch_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branches',
          key: 'id'
        }
      },
      branchsupplier_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branchsuppliers',
          key: 'id'
        }
      },
      delta_t: {
        type: Sequelize.INTEGER
      },
      field1: {
        type: Sequelize.FLOAT
      },
      field2: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('supplies');
  }
};