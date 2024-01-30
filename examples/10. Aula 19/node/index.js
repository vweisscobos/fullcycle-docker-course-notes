const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
};
const mysql = require("mysql");

app.use(bodyParser.json());

const connection = mysql.createConnection(config);

app.post("/people", (req, res) => {
    const sql = `INSERT into people(name) values ('${req.body.name}')`;
    connection.query(sql, (err, result) => {
        if (err) res.json(err);
        return res.json({ id: result.insertId });
    });
});

app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");
});

app.listen(port, () => {
    console.log("Rodando na porta " + port);
});

process.on('SIGINT', () => {
    connection.end();
});

process.on('SIGTERM', () => {
    connection.end();
});