import { ApiProperty } from '@nestjs/swagger';

export abstract class CommonDTO {
    @ApiProperty()
    active : boolean;
}