import { connection } from '../database'

export const getLibro = async (req,res)=>{
    connection.query('select * from libro;', function (err, result) {
    try {
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json('Error al listar Libro' + e);
    }
  });
};

export const getLibroId = async (req,res)=>{
    const id = parseInt(req.params.id);
    connection.query('select *from libro where idlibro = ?;',[id], function(err, result) {
    try {
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json('Error al listar Libro');
    }
  });
};


export const crearLibro = async (req,res)=>{
    const {titulo,autor,paginas,edicion,editorial_ideditorial} = req.body;
        connection.query('INSERT INTO libro (titulo,autor,paginas,edicion,editorial_ideditorial) VALUES (?,?,?,?,?);',[titulo,autor,paginas,edicion,editorial_ideditorial], function(err,result) {
    try {
        return res.status(200).json({
            message: 'Libro registrada correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar Libro');
    }
  });
};

export const updateLibro = async (req,res)=>{
    const id = parseInt(req.params.id);
    const {titulo,autor,paginas,edicion,editorial_ideditorial} = req.body;
    connection.query('UPDATE categorias SET titulo = ?,autor = ?,paginas = ?,edicion = ?,editorial_ideditorial =? WHERE idproducto = ?',[titulo,autor,paginas,edicion,editorial_ideditorial, id], function(err, result) {
    try {
        return res.status(200).json({
            message: 'Libro modificado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar Libro');
    }
  });
};

export const deleteLibro = async (req,res)=>{
    const id = parseInt(req.params.id);
    connection.query('DELETE FROM libro WHERE idlibro = ?',[id], function(err, result) {
    try {
        return res.status(200).json({
            message: 'Libro eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar Libro');
    }
  });
};