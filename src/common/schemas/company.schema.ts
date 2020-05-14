import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({

    name : String,
    // type : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'BusinessType'
    // },
    image: String,
    description : String,
    addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }],
    active : Boolean
});