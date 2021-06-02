const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes/recursos');
app.use(routes);

app.listen(port, () => {
    console.log(`App escuchando en el pueto: ${port}`);
})
