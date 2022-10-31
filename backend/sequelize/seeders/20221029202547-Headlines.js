'use strict';

var jsonData = require('../../../crawler/jsons/headlines.json')

var data = jsonData.map(it => {

	const imgArr = it.image.split('/')
	const img = imgArr[imgArr.length - 1]
	return {
		img: img,
		summary: it.summary,
		topic: it.topic,
		displayName: it.display_name,
		dominantColor: it.dominant_color,
		deeplink: it.deeplink,
		titleId: it.title_id,
		summary: it.summary,
		createdAt: new Date(),
		updatedAt: new Date(),
	}
})

console.log('use crawler/jsons/headlines.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
		await queryInterface.bulkInsert('Headlines', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete('Headlines', null, {});
  }
};
