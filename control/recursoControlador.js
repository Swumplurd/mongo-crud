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
        if(error) {
            return res.status(500).json({
                message: 'Error al crear recurso'
            });
        }
        res.redirect('/');
    });
}

module.exports.editar = (req, res) => {
    const id = req.body.id_editar;
    const nombre = req.body.nombre_edit;
    const url = req.body.url_edit;
    const categoria = req.body.categoria_edit;
    const descripcion = req.body.descripcion_edit;
    Recurso.findByIdAndUpdate(id, {nombre, url, categoria, descripcion}, (error, recurso) => {
        if(error) {
            return res.status(500).json({
                message: 'Error al actualizar el recurso'
            });
        }
        res.redirect('/');
    });
}

module.exports.borrar = (req, res) => {
    const id = req.params._id;
    Recurso.findByIdAndRemove(id, (error, recurso) => {
        if(error) {
            return res.status(500).json({
                message: 'Error al eliminar recurso'
            });
        }
        res.redirect('/');
    });
}