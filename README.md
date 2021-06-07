# mongo-crud

<img align="right" src="https://img.michollo.com/app/deal/324-1578581838484.png" height="150px">

Este es un pequeño CRUD destinado a recursos educativos web usando NodeJS, Express, MongoDB y Bootstrap5

## Requisitos
- Tener Git instalado
- Contar alguna version actual de NodeJS y npm
- Contar con MongoDB

## Uso

1. Clonar el repositorio con el siguiente comando:
    ```bash
    git clone https://github.com/Swumplurd/mongo-crud
    ```

2. Una vez clonado y dentro de la carpeta del proyecto, ejecutar el comando:

    ```bash
    npm install
    ```

3. Dentro de la carpeta del proyecto ejecutar el comando:

    ```bash
    npm start
    ```
    el cual levantara un servidor en `https://localhost:3000`

## Configuracion

- Para configurar la base de datos o incluso usar MongoDB Atlas debera modificar el archivo `db.js` la constante `uri` y colocar su propio token.

    ```js
    const uri = 'mongodb://localhost/db_recursos';
    ```

- Si el puerto `3000` se encuentra ocupado por otra aplicacion debera configurar la constante `port` en `index.js` y colocar un perto personalizado

    ```js
    const port = 3000;
    ```

* Si se desea modificar el proposito del proyecto se debera cambiar el modelo de la base de datos que se encuentra en la carpeta: `model/recursos.js`. En la cosntante `recursoSchema` debera colocar las propiedades personalizadas que desee. Este cambio conllevara a grandes modificaciones en la vista de nuestro sistema que se encuentra en: `views/index.pug` y en el controlador que se encuentra en: `control/recursoControlador.js`

    ```js
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const recursoSchema = new Schema ({
        nombre: String,
        url: String,
        categoria: String,
        descripcion: String
    }, {versionKey:false});
    module.exports = mongoose.model('recurso', recursoSchema);
    ```

- Para crear nuevas rutas debera agregarla en `routes/recursos.js`, modificar el verbo HTTP desado y crear su controlador en `control/recursoControlador.js`

    ```js
    route.get('/nuevaruta', recursoControlador.mostrar);
    ```

## Documentacion recomendada
- [NodeJS](https://nodejs.org/es/docs/)
- [Express](https://expressjs.com/es/)
- [Mongoose](https://mongoosejs.com/docs/guide.html)
- [PugJS](https://pugjs.org/api/getting-started.html)
- [Morgan](https://www.npmjs.com/package/morgan)
