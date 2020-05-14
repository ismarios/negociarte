import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/negociarte'),
    CompanyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
