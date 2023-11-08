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
        const data = await  Todo.inserOne(req.body)
        res.status(201).send(
            {
                error: false,
                body: req.body,
                result: data
            }
        )

    },

    read: async (req, res) => {




    },

    update: async (req, res) => {



    },

    delete: async (req, res) => {


    }
}