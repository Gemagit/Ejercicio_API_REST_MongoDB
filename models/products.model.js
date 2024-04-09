const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB
const ObjectId = require('mongodb').ObjectId;

const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    title: { 
        type: String, 
        required: true,
        unique: true ,
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    }
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
                if(url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Porfa, sólo imágenes JPG o PNG"
        }
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

/*let newProduct3= {
    "_id":new ObjectId("62b062cff3fa93bf9d66fa41"),
    "id":12,
    "title": "Sopa fria",
    "price": 7.80,
    "description":"La sopa fría más fría",
    "image":"https://www.sopafria.com/imagen.jpg",
    "provider":new ObjectId("62b062cff3fa93bf9d66fa09")
} 


let newProduct1= {
    "_id":new ObjectId("62b062cff3fa93bf9d66fa38"),
    "id":10,
    "title": "bocata panceta",
    "price": 6.50,
    "description":"El bocata más auténtico de Despeñaperros",
    "image":"https://www.bocata.com/imagen.png",
    "provider": new ObjectId("62b062cff3fa93bf9d66fa07")
} 
  
let newProduct2= {
    "_id": new ObjectId("62b062cff3fa93bf9d66fa36"),
    "id":11,
    "title": "zapatos claquét",
    "price": 29.95,
    "description":"Los zapatos más resistentes para bailar bachata",
    "image":"https://www.zapatosclaque.com/imagen.png",
    "provider": new ObjectId("62b062cff3fa93bf9d66fa08")
}  */


 

// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

/* Product.create(newProduct3)
    .then(data => console.log(data))  */

module.exports = Product;