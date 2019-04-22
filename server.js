

const environment = 'development';
const knexConfig = require('./knexfile.js')
const db = require('knex')(knexConfig[environment]);

const express = require('express');

const server = express();

server.use(express.json())

server.get('/', async (req,res) => {
  res.status(200).json({ message: "Hello!", data: [] })
})

server.post('/', async (req,res) => {
  res.status(200).json({ message: "Hello!", data: [] })
})

module.exports = server;