import * as mongoose from 'mongoose';
import { AddressSchema } from './address.schema';

export const CompanySchema = new mongoose.Schema({

    name : String,
    // type : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'BusinessType'
    // },
    image: String,
    description : String,
    addresses: [{
        type: AddressSchema
    }],
    active : Boolean
});