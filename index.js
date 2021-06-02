const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express');
});

app.listen(port, () => {
    console.log(`App escuchando en el pueto: ${port}`);
})
