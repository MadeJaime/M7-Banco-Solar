//conexión con bbdd.
const { Pool } = require("pg");

const pool = new Pool ({
user: "postgres",
host: "localhost",
database: "bancosolar",
password: "110580",
port: 5432,
});

//Verificar la conexion a bbdd
const conectarDB = async () => {
    try {
        const res = await pool.query(`SELECT NOW()`);
        console.log("Conexion exitosa a la base de datos, fecha y hora actuales:", res.rows[0]);
    } catch (error) {
        console.error("Error al conectar a la Base de datos", error);
    }
};

conectarDB();

//Exportar módulo.
module.exports = pool;