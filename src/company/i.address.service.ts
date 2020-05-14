import { ICommonService } from '../common/interfaces/i.common.service';
import { CompanyDTO } from '../common/dto/company.dto';
import { IAddress } from 'src/common/interfaces/i.address';
import { AddressDTO } from 'src/common/dto/address.dto';

export interface IAddressService extends ICommonService<IAddress, AddressDTO>{
}