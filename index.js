const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes/recursos');
app.use(routes);

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App escuchando en el pueto: http://localhost:${port}`);
})
