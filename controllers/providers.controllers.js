const Provider = require('../models/providers.model');

// CREATE, crear proveedor
async function createProvider(company_name,CIF,address,url_web) {
    const provider = new Provider({
    company_name,
    CIF,
    address,
    url_web
    });

    const result = await provider.save();
    res.status(201).json({
        message: "proveedor creado",
        provider: provider
    });
    console.log(result);
}

/* const createProvider = async (req, res) => {
    console.log(req.body);
    //leer los datos que te llegan para pasarselos al modelo
    //llamar a modelo que se ocupa de crear en base de datos

    const provider = await Provider.create(req.body)

    res.status(201).json({
        message: "proveedor creado",
        provider: provider
    });
} */


// READ
const getProvider = async (req, res) => {
    try {
        //const id = req.params.id;
        let provider =  await Provider.find({}, '-_id -__v'); //{}
        res.status(200).json(provider); // Respuesta de la API para 1 proveedor
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// UPDATE
const updateProvider = async (req, res) => {
    const company_name= req.param.company_name;
    let provider = await Provider.updateOne(company_name);
    res.status(200).json({
        message: "proveedor actualizado: Sala de baile",
        provider: provider
    })
}


// DELETE
const deleteProvider = async (req, res) => {
    const title= req.param.title;
    let provider = await Provider.deleteOne(title);
    res.status(200).json({
        message: "Se ha borrado el proveedor: Teatro Marquina",
        provider: provider
    });
}

module.exports = {
    createProvider,
    getProvider,
    updateProvider,
    deleteProvider
}