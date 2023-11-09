"use strict"

require('express-async-errors');

const { Todo } = require("../models/todo");

module.exports.Todo = {
    list: async (req, res) => {

        const data = await Todo.find()
        res.status(200).send(
            {
                error: false,
                result: data
            }
        )
    },

    create: async (req, res) => {
        const data = await Todo.create(req.body)
        res.status(201).send(
            {
                error: false,
                body: req.body,
                message: 'Created',
                result: data
            }
        )

    },

    read: async (req, res) => {

        const data = await Todo.findById(req.params.id);
        res.status(200).send({
            error: false,
            result: data
        });


    },

    update: async (req, res) => {

        const data = await Todo.updateOne({ _id: req.params.id }, req.body)
        res.status(202).send({
            error: false,
            body: req.body,
            message: 'Updated',
            result: data,
            newData: await Todo.findById(req.params.id)
        });

    },

    delete: async (req, res) => {
        const data = await Todo.deleteOne({ _id: req.params.id });
        res.sendStatus((data.deletedCount >= 1) ? 204 : 404)

    }
}