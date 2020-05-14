import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CommonService } from '../common/services/common.service';
import { AddressDTO } from '../common/dto/address.dto';
import { IAddressService } from './i.address.service';
import { IAddress } from 'src/common/interfaces/i.address';


@Injectable()
export class AddressService extends CommonService<IAddress, AddressDTO> implements IAddressService {
    
    constructor(@InjectModel('Address') private readonly activityModel: Model<IAddress>) {
        super(activityModel);
     }

     
    // async findById(ID: number): Promise<IAddress> {
    //     console.log("id en service: ", ID);
    //     return await this.activityModel.findById(ID).populate('type').populate('questions.type').exec();
    // }

}