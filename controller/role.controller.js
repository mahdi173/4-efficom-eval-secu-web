const Role = require('../model/role.schema.js');

const getAll = (req, res, next) => {
    let result = Role.findAll();
    res.status(200).json(result);
}


const getById = async (req, res, next) => {
    let result = await Role.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(result);
}

const create = async (req, res, next) => {
    try {
        let result = await Role.create({
            name: req.body.name
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(400).json({ error: "Cannot create role" });
    }
}

const update = (req, res, next) => {
    const updateData = {};

    if (req.body.name) {
        updateData.name = req.body.name;
    }

    let result = Role.updateOne(updateData, { id: req.params.id });
    res.status(201).json(result);
}

const remove = (req, res, next) => {
    let result = Role.remove(req.params.id);
    res.status(200).json(result);
}

module.exports = { getAll, create, getById, update, remove};