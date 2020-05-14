import { Document } from 'mongoose';
import { AddressDTO } from '../dto/address.dto';

export interface ICompany extends Document {
    
    
    readonly name : string;
    
    readonly image: string;
    
    readonly description: string;

    readonly active: boolean;
    
    readonly addresses: AddressDTO[];
}