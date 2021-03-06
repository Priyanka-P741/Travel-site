'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientemployees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id'
        }
      },
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employees',
          key: 'id'
        }
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
    return queryInterface.dropTable('clientemployees');
  }
};