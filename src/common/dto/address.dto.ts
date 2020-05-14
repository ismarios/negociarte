import { ApiProperty } from '@nestjs/swagger';

import { CommonDTO as CommonDTO } from './common.dto';


export class AddressDTO extends CommonDTO {

    @ApiProperty()
    readonly telephone : string;
    @ApiProperty()
    readonly cellphone : string;
    @ApiProperty()
    readonly hasWhastApp : boolean;
    @ApiProperty()
    readonly street : string;
    @ApiProperty()
    readonly number : string;
    @ApiProperty()
    readonly zipCode : string;
    // @ApiProperty()
    // readonly neighborhood : string;
    // @ApiProperty()
    // readonly municipality : string;
    // @ApiProperty()
    // readonly city : string;
    // @ApiProperty()
    // readonly state: string;

}