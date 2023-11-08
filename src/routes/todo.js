"use strict"

const router = require("express").Router();
const { Todo } = require("../controllers/todo");

router.route('/')
    .get( Todo.list ) // LIST
    .post( Todo.create ) // CREATE

router.route('/:id')
    .get( Todo.read ) // READ
    .put( Todo.update ) // UPDATE
    .delete( Todo.delete ) // DELETE

module.exports = router;