import { ICommonService } from '../common/interfaces/i.common.service';
import { CompanyDTO } from '../common/dto/company.dto';
import { ICompany } from '../common/interfaces/i.company';

export interface ICompanyService extends ICommonService<ICompany, CompanyDTO>{
}