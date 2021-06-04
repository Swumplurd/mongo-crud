const Recurso = require('../model/recursos');

module.exports.mostrar = (req, res) => {
    return res.render('index');
}

module.exports.crear = (req, res) => {
    
    
    const recurso = new Recurso({
        nombre: req.body.nombre,
        url: req.body.url,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion
    });
    recurso.save((error, recurso) => {
        if(error){
            return res.status(500).json({
                message: 'Error al crear recurso'
            });
        }
        res.redirect('/');
    });
}