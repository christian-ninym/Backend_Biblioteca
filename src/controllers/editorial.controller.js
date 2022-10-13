import { connection } from '../database'

export const getEditorial = async (req,res)=>{
    connection.query('select * from editorial;', function (err, result) {
    try {
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json('Error al listar Editorial' + e);
    }
  });
};

