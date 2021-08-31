import { DeleteResult } from 'typeorm';
import ICreateLanguageDTO from '../dtos/ICreateLanguageDTO';
import { Language } from './../infra/typeorm/entities/Language';

export default interface ILanguageRepository {
    create(data: ICreateLanguageDTO): Promise<Language>;
    update(data: ICreateLanguageDTO, languageId: string): Promise<void>;
    delete(languageId: string): Promise<DeleteResult>;
}