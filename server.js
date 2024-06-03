//Servidor Express. 
const express = require('express');
const app = express();
//Importar constantes.
const { insertar, consultar, editar, eliminar, transferir, consultarTransfer } = require("./consultas");

app.listen(3000 , console.log("Servidor arriba"))

//Json.
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//post
app.post("/usuario", async (req, res) => {
    try {
        const {nombre, balance} = req.body;
        console.log(req.body)
        const respuesta = await insertar(nombre, balance);
        res.status(201).json(respuesta);
    } catch (error) {
        res.status(500).json({ error: "Ops! error"});
    }
});

//consultas.
app.get("/usuarios", async (req, res) => {
    try {
        const registros = await consultar();
        res.json(registros);
    } catch (error) {
        res.status(500).send("Ops! error")
    }
});

//editar.
app.put("/usuario", async (req, res) => {
    try {
      const { id, nombre, balance } = req.body;
      const usuarioEditado = await editar(id, nombre, balance);
      res.status(200).json(usuarioEditado);
    } catch (error) {
      console.error("Error al editar usuario:", error);
      res.status(500).json({ error: "Error al editar usuario" });
    }
});

//eliminar.
app.delete("/usuario", async (req, res) =>{
    try {
        const { id } = req.query
        const respuesta = await eliminar(id)
        res.json(respuesta)
    } catch (error) {
        res.status(500).send("Ops! error")
    }
});

//transferencia
app.post("/transferencia", async (req, res) => {
    try {
      const { emisor, receptor, monto } = req.body;
      await transferir(emisor, receptor, monto);
      res.status(200).json({ message: "Transferencia exitosa" });
    } catch (error) {
      console.error("Error al realizar la transferencia:", error);
      res.status(500).json({ error: "Error al realizar la transferencia" });
    }
});

//obtener todas las transferencias.
app.get("/transferencias", async (req, res) => {
    try {
        const registros = await consultarTransfer();
        res.json(registros);
    } catch (error) {
        res.status(500).send("Ops! error")
    }
});