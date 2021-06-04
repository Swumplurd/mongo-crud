const recursos = require('../model/recursos');
const Recurso = require('../model/recursos');

module.exports.mostrar = (req, res) => {
    Recurso.find({}, (error, recurso) => {
        if(error) {
            return res.status(500).json({
                message: 'Error!, no se pudieron mostrar los recursos'
            })
        }
        return res.render('index', {recursos: recurso})
    })
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