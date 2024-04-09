const Product = require('../models/products.model');

// CREATE

/* // Uso de populate()
async function products() {
    const products = await Product
        .find()
        .populate('provider')
        .select('provider');
    console.log(products);
} */

// Crear juego pasando título + id_publisher por parámetro
async function createProduct(title, price, description, provider) {
    const product = new Product({
        title,
        price,
        description,
        provider
    })
    const result = await product.save();
    res.status(201).json({
        message: "producto creado",
        product: product
    })
};


// READ
/* const getAllProducts= async (req, res) => {
    try {
      const products = await Product
      .find() //Tráeme todo de products
      .populate("provider")//,{path: "Products"}); // Utilizar populate() para traer los datos del proveedor de cada producto, populate es un innerjoin. Le esta diciendo tráeme products, tabla provider y me traes el name.
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ 
      message: error.message 
    });
    }
  }; */

//Uso de populate()
async function getAllProducts() {
    const products = await Product
        .find()
        .populate({
            path: 'provider',
            model: 'Provider'
        },
            { strictPopulate: false })
        .select('_id');
    console.log(products);
    res.status(200).json({
        product: provider
    });
}




// UPDATE
const updateProduct = async (req, res) => {
    let product = await Product.updateOne(product);
    res.status(200).json({
        message: "producto actualizado: zapatos claqué",
        product: { product }
    });
}

// DELETE
const deleteProduct = async (req, res) => {
    let product = await Product.deleteOne(product);
    res.status(200).send({
        message: "Se ha borrado el producto: zapatos claqué"
    });
}

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}