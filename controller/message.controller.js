const Message = require('../model/message.shema.js');

const getAll = (req, res, next) => {
    let result = Message.findAll();
    res.status(200).json(result);
}


const getById = async (req, res, next) => {
    let result = await Message.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(result);
}

const create = async (req, res, next) => {
    try {
        let result = await Message.create({
            name: req.body.name
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(400).json({ error: "Cannot create message" });
    }
}

const update = (req, res, next) => {
    const updateData = {};

    let messageToUpdate =  Message.findOne({where:{id: req.params.id}});

    if(messageToUpdate.userId !== req.payload.id){
        res.status(403).json({error: "You cannot change this message"});
    }

    if (req.body.title) {
        updateData.title = req.body.title;
    }
    if (req.body.content) {
        updateData.content = req.body.content;
    }
    let result = Message.updateOne(updateData, { id: req.params.id });
    res.status(201).json(result);
}

const remove = (req, res, next) => {
    let messageToUpdate =  Message.findOne({where:{id: req.params.id}});

    if(messageToUpdate.userId !== req.payload.id){
        res.status(403).json({error: "You cannot delete this message"});
    }

    let result = Message.remove(req.params.id);
    res.status(200).json(result);
}

module.exports = { getAll, create, getById, update, remove };