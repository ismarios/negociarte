import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({

    telephone : String,
    cellphone : String,
    hasWhastApp : Boolean,
    street : String,
    number : String,
    zipCode : String,
    // type : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'AddressType'
    // },
    active : Boolean
});