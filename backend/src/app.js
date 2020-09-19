const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

// Criando o server
const app = express();

// Adicionando cors na aplicação
app.use(cors());

// Habilitando a compreensão de body em JSON
app.use(express.json());

// Reacoplando o Router no server
app.use(routes);

// Adicionando o erros do celebrate para feedbacks de validações
app.use(errors());

module.exports = app;
