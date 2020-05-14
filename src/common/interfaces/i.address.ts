import { Document } from 'mongoose';
import { AddressDTO } from '../dto/address.dto';

export interface IAddress extends Document {
    
    readonly telephone : string;
    
    readonly cellphone : string;
    
    readonly hasWhastApp : boolean;
    
    readonly street : string;
    
    readonly number : string;
    
    readonly zipCode : string;
    
}