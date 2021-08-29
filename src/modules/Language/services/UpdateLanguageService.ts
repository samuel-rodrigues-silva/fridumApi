import { injectable, inject, delay } from 'tsyringe';
import ILanguageRepository from './../repositories/ILanguageRepository';
import LanguageRepository from '../infra/typeorm/repositories/LanguageRepository';
import ICreateLanguageDTO from './../dtos/ICreateLanguageDTO';

@injectable()
class UpdateLanguageService {
    constructor(
        @inject(delay(() => LanguageRepository))
        private LanguageRepository: ILanguageRepository,
    ) { }

    public async execute(data: ICreateLanguageDTO, id: string): Promise<void> {
        await this.LanguageRepository.update(data, id);
    }
}

export default UpdateLanguageService