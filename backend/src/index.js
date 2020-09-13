const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// Criando o server
const app = express();

// Adicionando cors na aplicação
app.use(cors());

// Habilitando a compreensão de body em JSON
app.use(express.json());

// Reacoplando o Router no server
app.use(routes);

// Indicando qual porta irá rodar a aplicação
app.listen(3333);
