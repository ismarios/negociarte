import { Controller, Get, Response, HttpStatus, Param, Body, Post, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';

import { CompanyDTO } from '../common/dto/company.dto';

import { CompanyService } from './company.service';
import { ICompany } from '../common/interfaces/i.company';
import { AddressDTO } from 'src/common/dto/address.dto';

@ApiTags('company')
@Controller('company')
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService,
        ) {}

    @Get()
    public async getCompanies(@Response() res) {
        const company = await this.companyService.findAll({activityBase: null});
        return res.status(HttpStatus.OK).json(company);
    }
    
    @Get('find')
    // @ApiQuery({description : ''})
    public async findCompany(@Response() res, @Body() body) {
        const queryCondition = body;
        const company = await this.companyService.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(company);
    }
    
    @Get('/:id')
    @ApiParam({name: 'id'})
    public async getCompany(@Response() res, @Param() param){
        console.log("params: ", param);
        const company = await this.companyService.findById(param.id);
        return res.status(HttpStatus.OK).json(company);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async createCompany(@Response() res, @Body() createCompanyDTO: CompanyDTO) {
        console.log("Imprimiendo");
        console.log(createCompanyDTO);
        const company = await this.companyService.create(createCompanyDTO);
        return res.status(HttpStatus.OK).json(company);
    }

    
    @Put('/')
    public async updateCompany(@Param() param, @Response() res, @Body() body) {
        
        const companyType = await this.companyService.update(body._id, body);
        return res.status(HttpStatus.OK).json(companyType);
    }
    
    @Delete('/:id')
    @ApiParam({name: 'id'})
    public async deleteCompany(@Param() param, @Response() res) {
        console.log("algo", param);

        const companyType = await this.companyService.delete(param.id);
        return res.status(HttpStatus.OK).json(companyType);
    }
}