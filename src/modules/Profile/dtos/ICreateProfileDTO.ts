import { Occupation } from './../../Occupation/infra/typeorm/entities/Occupation';
import { Accomplishment } from './../../Accomplishments/infra/typeorm/entities/Accomplishment';
import { FocusArea } from './../../FocusArea/infra/typeorm/entities/FocusArea';
export default interface ICreateProfileDTO {
    work_resume?: string;
    image?: string;
    description?: string;
    accomplishment?: Accomplishment[];
    focusArea?: FocusArea[];
    occupation?: Occupation[];
}