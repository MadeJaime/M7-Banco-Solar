**BANCO SOLAR C.A.**

El Banco Solar acaba de decidir invertir una importante suma de dinero para contratar un
equipo de desarrolladores Full Stack que desarrollen un nuevo sistema de transferencias, y
han anunciado que todo aquel que postule al cargo debe realizar un servidor con Node que
utilice PostgreSQL para la gestión y persistencia de datos, y simular un sistema de
transferencias.
El sistema debe permitir registrar nuevos usuarios con un balance inicial y basados en estos,
realizar transferencias de saldos entre ellos.
En esta prueba contarás con una aplicación cliente preparada para consumir las rutas que
deberás crear en el servidor. A continuación se muestra una imagen con la interfaz
mencionada.

### Solicitudes

**GET**: Devuelve la aplicación cliente disponible.
**usuario POST**: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
**usuarios GET**: Devuelve todos los usuarios registrados con sus balances.
**usuario PUT**: Recibe los datos modificados de un usuario registrado y los actualiza.
**usuario DELETE**: Recibe el id de un usuario registrado y lo elimina .
**transferencia POST**: Recibe los datos para realizar una nueva transferencia. Se
debe ocupar una transacción SQL en la consulta a la base de datos.
**transferencias GET**: Devuelve todas las transferencias almacenadas en la base de
datos en formato de arreglo.


### Uso

1. **Dependencias**:  
En tu terminal `npm install`.
`npm init`, instalará package.json
`npm i express`, instala node_modules.
`npm i pg`, conexión a PostgresSQL.

**Ejecutar Servidor**: Lista las instalaciones, ejecuta `node server.js` en la terminal. Indicará que está disponible en `http://localhost:3000`. (Procura que ese puerto:3000 no esté en otro uso previamente).

**Evaluación**.
1. Utilizar el paquete pg para conectarse a PostgreSQL y realizar consultas DML para la
gestión y persistencia de datos.
1. Usar transacciones SQL para realizar el registro de las transferencias.
2. Servir una API RESTful en el servidor con los datos de los usuarios almacenados en
PostgreSQL.
1. Capturar los posibles errores que puedan ocurrir a través de bloques catch o
parámetros de funciones callbacks para condicionar las funciones del servidor.
1. Devolver correctamente los códigos de estado según las diferentes situaciones.
