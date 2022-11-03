const models = require('../../sequelize/models');
const { addImagePathPrifix } = require('../helpers');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
	console.log(1);
	// const dramas = await models.Drama.findAll();
	console.log(2);

	const dramas = await models.Drama.findAll({
		include: [models.Cast]
		//
	});
	if (dramas) {
		dramas.forEach((drama) => {
			drama.img = addImagePathPrifix(drama.img)
		})
	}
	res.status(200).json(dramas);
};

async function getById(req, res) {
	const id = getIdParam(req);
	const drama = await models.Drama.findByPk(id, {
		include: [models.Cast, models.Series],
		order: [
			[{ model: models.Series, as: 'Div'}, 'id', 'ASC' ]
		]
	});
	if (drama) {
		drama.img = addImagePathPrifix(drama.img)
		drama.Series.forEach((seriesItem) => {
			seriesItem.img = addImagePathPrifix('1/' + seriesItem.img)
		})
		res.status(200).json(drama);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		try {
			await models.Drama.create(req.body);
			res.status(201).end();
		} catch (error) {
			res.status(500).send(`Bad request`);
		}
	}
};

async function update(req, res) {

	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		try {
			await models.Drama.update(req.body, {
				where: {
					id: id
				}
			});
			res.status(200).end();
		} catch (error) {
			res.status(500).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
		}
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.Drama.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};

async function searchSuggestions(req, res) {

	const keyword = req.params.keyword.toLowerCase()
	const Dramas = await models.Drama.findAll();
	const searchResult = Dramas.filter(dramaItem => {

		return dramaItem.title.toLowerCase().indexOf(keyword) > -1
	}).map(dramaItem => {
		return {
			name: dramaItem.title,
			id: dramaItem.id,
		}
	})

	// uniq
	// const uniqResult = [...new Set(searchResult)]

	res.status(200).json(searchResult);
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
	searchSuggestions,
};
