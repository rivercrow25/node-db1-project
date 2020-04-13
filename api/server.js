const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    db('accounts')
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

server.get('/:id', (req, res) => {
    db('accounts')
        .where('id', req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

server.post('/', (req, res) => {
    db('accounts')
        .insert(req.body)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

server.delete('/:id', (req, res) => {
    db('accounts')
        .where('id', req.params.id)
        .del()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

server.put('/:id', (req, res) => {
    db('accounts')
        .where('id', req.params.id)
        .update(req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = server;
