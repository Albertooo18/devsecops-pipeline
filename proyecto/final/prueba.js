const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const userInput = req.query.userinput || "";

    // Vulnerabilidad XSS:
    // Se muestra el input sin sanitizar
    const vulnerableOutput = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Página Vulnerable Básica</title>
    </head>
    <body>
        <h1>Ejemplo de página web vulnerable</h1>

        <form method="GET" action="/">
            <label for="input">Escribe algo (inseguro): </label>
            <input type="text" id="input" name="userinput" />
            <input type="submit" value="Enviar" />
        </form>

        <div>
            <h2>Resultado (sin validación ni filtrado)</h2>
            Usted escribió: ${userInput}
        </div>
    </body>
    </html>
    `;

    res.send(vulnerableOutput);
});

app.listen(3000,"0.0.0.0", () => {
    console.log("Servidor vulnerable corriendo en http://0.0.0.0:3000");
});
