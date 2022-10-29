const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
// const dramasData = require('../images/firms.json')

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
	dialect: 'mysql',
	host: 'localhost',
	username: 'netflix',
	password: 'asdzxc04',
	database: 'netflix_db',
	define: {
		freezeTableName: true,
		timestamps: false
	}
	// storage: 'sqlite-example-database/example-db.sqlite',
	// logQueryParameters: true,
	// benchmark: true
});

// const modelDefiners = [
// 	require('./models/user'),
// 	require('./models/drama'),
// 	require('./models/Cast'),
// 	// require('./models/instrument.model'),
// 	// require('./models/orchestra.model'),
// 	// Add more models here...
// 	// require('./models/item'),
// ];

// We define all models according to their files.
// for (const modelDefiner of modelDefiners) {
// 	modelDefiner(sequelize);
// }

// We execute any extra setup after the models are defined, such as adding associations.
// applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;


// const db = require('./models');
// const User = db.User;

// User.create({
// 	firstName: 'Nick',
//   lastName: 'World'
// }).then(()=> {
// 	console.log('done !')
// })



// const db = require('./models');
// const Drama = db.Drama;

// dramasData.forEach((drama) => {

// 	Drama.create({
// 		title: drama.title,
// 		img: drama.img,
// 		episode: drama.episode,
// 		rating: drama.rating
// 	}).then(()=> {
// 		console.log('done !')
// 	})
// })



