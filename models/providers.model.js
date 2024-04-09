const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB
const ObjectId = require('mongodb').ObjectId;

const objectSchema = {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        required: true,
        unique: true,
        products: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    },
    CIF: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    url_web: {
        type: String,
        required: true
    }
}

const providerSchema = mongoose.Schema(objectSchema);


/* let newProvider = {
    "_id": new ObjectId("62b062cff3fa93bf9d66fa06"),
    "id": 1,
    "companyName": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web": "https://www.tortillasmarquina.com"

}

let newProvider1 = {
    "_id": new ObjectId("62b062cff3fa93bf9d66fa07"),
    "id": 2,
    "companyName": "Casa Paco",
    "CIF": "B49050582",
    "address": "Calle de ls Eras 34",
    "url_web": "https://www.casapaco.com"
}

let newProvider2 = {
    "_id": new ObjectId("62b062cff3fa93bf9d66fa08"),
    "id": 3,
    "companyName": "Sala de baile",
    "CIF": "B49050582",
    "address": "avd de la Salud 23",
    "url_web": "https://www.saladebaile.com"
} */




// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);


/* 
Provider.create(newProvider1,newProvider2)
    .then(data => console.log(data))  */

/* const result = Provider.find(newProvider)
.then(data => console.log(data)) */


module.exports = Provider;

