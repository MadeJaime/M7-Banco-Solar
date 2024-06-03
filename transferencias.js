 // Transferir monto 
 const transferir = async (emisor, receptor, monto) => {
    try {
      await pool.query("BEGIN");
      await pool.query("UPDATE usuarios SET balance = balance - $1 WHERE nombre = $2", [monto, emisor]);
      await pool.query("UPDATE usuarios SET balance = balance + $1 WHERE nombre = $2", [monto, receptor]);
      await pool.query("INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, NOW())", [emisor, receptor, monto]);
      await pool.query("COMMIT");
    } catch (error) {
      await pool.query("ROLLBACK");
      console.error("Error al transferir:", error);
      throw error;
    }
};
  
 //Consultas.
 const consultarTransfer = async () => {
  const result = await pool.query("SELECT * FROM transferencias");
  return result.rows;
};
