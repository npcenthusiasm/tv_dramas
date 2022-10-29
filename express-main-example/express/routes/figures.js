const models = require('../../sequelize/models');
// const drama = require('../../sequelize/models/drama');
const { getIdParam, addImagePathPrifix } = require('../helpers');

// async function getAll(req, res) {
// 	const darams = await models.Drama.findAll();
// 	res.status(200).json(darams);
// };

async function getById(req, res) {
	const id = getIdParam(req);
	const respData = {
		figure: null,
		items: []
	}

	// const allDramaCasts = await models.DramaCast.findAll({
	// 	where: {
	// 		castId: id
	// 	}
	// })
	const allDramaCasts = await models.Cast.findOne({
		// attributes:['id'],
		where: {
			id: id
		},
		include:{
			model: models.Drama,
			required: true,
			through: {
				attributes: []

			},
		}
	})

	const castTag = await models.Cast.findOne({
		attributes: ['id', 'name'],
		where: {
			id: id
		},
	})

	console.log('allDramaCasts: ', allDramaCasts);
	if (castTag) {
		respData.figure = castTag

	}

	if (allDramaCasts) {
		// dramas.forEach((drama) => {
		// 	drama.img = addImagePathPrifix(drama.img)
		// })
		allDramaCasts.Dramas.forEach(dramaItem => {
			dramaItem.img = addImagePathPrifix(dramaItem.img)
		})
		respData.items = allDramaCasts.Dramas
	}

	// cast
	// try {
	// 	const cast = await models.Cast.findByPk(id)
	// 	console.log('cast: ', cast);
	// 	if (cast) {
	// 		respData.figure = {
	// 			name: cast.name,
	// 			id: cast.id
	// 		}
	// 	}
	// } catch (error) {
	// 	console.log('error', error)
	// }

	// if (castTag || allDramaCasts) {
	// 	res.status(200).json(respData);
	// } else {
	// }
	res.status(200).json(respData);
};

// async function create(req, res) {
// 	if (req.body.id) {
// 		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
// 	} else {
// 		try {
// 			await models.Drama.create(req.body);
// 			res.status(201).end();
// 		} catch (error) {
// 			res.status(500).send(`Bad request`);
// 		}
// 	}
// };

// async function update(req, res) {

// 	const id = getIdParam(req);

// 	// We only accept an UPDATE request if the `:id` param matches the body `id`
// 	if (req.body.id === id) {
// 		try {
// 			await models.Drama.update(req.body, {
// 				where: {
// 					id: id
// 				}
// 			});
// 			res.status(200).end();
// 		} catch (error) {
// 			res.status(500).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
// 		}
// 	} else {
// 		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
// 	}
// };

// async function remove(req, res) {
// 	const id = getIdParam(req);
// 	await models.Drama.destroy({
// 		where: {
// 			id: id
// 		}
// 	});
// 	res.status(200).end();
// };


module.exports = {
	// getAll,
	getById,
	// create,
	// update,
	// remove,
};
