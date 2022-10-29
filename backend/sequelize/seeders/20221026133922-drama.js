'use strict';

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
		await queryInterface.bulkInsert('Dramas', [{
			img: "81c43351a6fda797a4b69d36461c16a4417d7711.sm.jpg",
			title: "SPY X FAMILY 間諜家家酒",
			summary: "這是個世界各國都在檯面下進行激烈情報戰的時代，東國與西國，兩國之間已持續冷戰了十多年。隸屬於西國情報局間諜–黃昏，被指派一項機密任務，奉命接近威脅東西和平的危險人物，要刺探出東國國家統一黨黨魁─唐納文‧戴斯蒙德的戰爭計畫。任務內容是在一週內組好家庭並潛入戴斯蒙德兒子所就讀的名校。於是黃昏扮起精神科醫生─洛伊德‧佛傑開始組織家庭。然而他找到的女兒安妮亞是會讀心的超能力者，妻子約兒則是位暗殺者，由於利害一致，三人便互相隱瞞真實身分，並展開共同生活…",
			episode: "更新至第16集",
			rating: "5.0",
			release_info: "10/1起每週六23:00更新",
			content_agents: "木棉花",
			release_year: 2022,
			// castId: 1,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			img: "81c43351a6fda797a4b69d36461c16a4417d7711.sm.jpg",
			title: "SPY X FAMILY 間諜家家酒",
			summary: "這是個世界各國都在檯面下進行激烈情報戰的時代，東國與西國，兩國之間已持續冷戰了十多年。隸屬於西國情報局間諜–黃昏，被指派一項機密任務，奉命接近威脅東西和平的危險人物，要刺探出東國國家統一黨黨魁─唐納文‧戴斯蒙德的戰爭計畫。任務內容是在一週內組好家庭並潛入戴斯蒙德兒子所就讀的名校。於是黃昏扮起精神科醫生─洛伊德‧佛傑開始組織家庭。然而他找到的女兒安妮亞是會讀心的超能力者，妻子約兒則是位暗殺者，由於利害一致，三人便互相隱瞞真實身分，並展開共同生活…",
			episode: "更新至第16集",
			rating: "5.0",
			release_info: "10/1起每週六23:00更新",
			content_agents: "木棉花",
			release_year: 2022,
			// castId: 2,
			createdAt: new Date(),
			updatedAt: new Date(),
		}], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete('Dramas', null, {});
  }
};
