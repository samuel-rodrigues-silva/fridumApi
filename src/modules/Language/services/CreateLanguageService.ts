import { injectable, inject, delay } from 'tsyringe';
import ILanguageRepository from './../repositories/ILanguageRepository';
import { Language } from './../infra/typeorm/entities/Language';
import ICreateLanguageDTO from './../dtos/ICreateLanguageDTO';
import LanguageRepository from '../infra/typeorm/repositories/LanguageRepository';

@injectable()
class CreateLanguageService {
    constructor(
        @inject(delay(() => LanguageRepository))
        private LanguageRepository: ILanguageRepository,
    ) { }

    public async execute(data: ICreateLanguageDTO): Promise<Language> {
        return await this.LanguageRepository.create(data);
    }
}

export default CreateLanguageService