const Instancia = require('../clase');
const path = require('path');
const instancia = new Instancia("./products.json");

const getAllProducts = async (req, res) => {
    const {data, error} = await instancia.getAll()
    data.length > 0 ? res.send(data) : res.status(500).send(error);
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    const {data, error} = await instancia.getById(id)
    !data ? res.status(500).send({error}) : res.send(data);
}

const newProduct = async (req, res) => {
    const addProducto = await instancia.save(req.body);
    const { data, error } = await addProducto;
    data ? res.send(data) : res.send({error}) ;
}

const updateProductById = async (req, res) => {
    const { id } = req.params; 
    const { data, error } = await instancia.updateById(id, req.body);
    data ? res.send(data) : res.send({error});
    
}

const deleteProduct = async (req, res) => {
    const { id } = req.params; 
    const { data, error } = await instancia.deleteById(id);
    data.length != 0 ? res.send(data) : res.send({error});
}

const newProductForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/form.html'));
}

module.exports = {
    getAllProducts,
    getProductById,
    newProductForm,
    newProduct,
    updateProductById,
    deleteProduct
}