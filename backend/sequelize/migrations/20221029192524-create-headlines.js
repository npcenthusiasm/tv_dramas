'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Headlines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      displayName: {
        type: Sequelize.STRING
      },
      dominantColor: {
        type: Sequelize.STRING
      },
      deeplink: {
        type: Sequelize.STRING
      },
      titleId: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Headlines');
  }
};