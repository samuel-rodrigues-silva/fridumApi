import { injectable, inject, delay } from 'tsyringe';
import LanguageRepository from './../infra/typeorm/repositories/LanguageRepository';
import ILanguageRepository from './../repositories/ILanguageRepository';

@injectable()
export default class DeleteLanguageService {
    constructor(
        @inject(delay(() => LanguageRepository))
        private LanguageRepository: ILanguageRepository) { }

    public async execute(id: string) {
        this.LanguageRepository.delete(id);
    }
}