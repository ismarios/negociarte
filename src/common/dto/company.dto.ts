import { ApiProperty } from '@nestjs/swagger';

import { CommonDTO as CommonDTO } from './common.dto';
import { AddressDTO } from './address.dto';


export class CompanyDTO extends CommonDTO {
    
    @ApiProperty()
    readonly name : string;
    @ApiProperty()
    readonly image: string;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    addresses: AddressDTO[];

}