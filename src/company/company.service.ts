import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CommonService } from '../common/services/common.service';
import { ICompany } from '../common/interfaces/i.company';
import { CompanyDTO } from '../common/dto/company.dto';
import { ICompanyService } from './i.company.service';


@Injectable()
export class CompanyService extends CommonService<ICompany, CompanyDTO> implements ICompanyService {
    
    constructor(@InjectModel('Company') private readonly companyModel: Model<ICompany>) {
        super(companyModel);
     }

     
    // async findById(ID: number): Promise<ICompany> {
    //     console.log("id en service: ", ID);
    //     return await this.activityModel.findById(ID).populate('type').populate('questions.type').exec();
    // }

}