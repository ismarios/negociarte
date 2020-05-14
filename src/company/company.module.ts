import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompanySchema } from 'src/common/schemas';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { AddressSchema } from '../common/schemas/address.schema';
import { AddressService } from './address.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema }, 
      { name: 'Address', schema: AddressSchema }
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService, AddressService],
  exports: [CompanyService]
})
export class CompanyModule {}
