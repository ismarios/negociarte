import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompanySchema } from 'src/common/schemas';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema }, 
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService]
})
export class CompanyModule {}
