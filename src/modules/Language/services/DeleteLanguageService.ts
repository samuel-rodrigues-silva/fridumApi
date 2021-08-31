import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import LanguageRepository from './../infra/typeorm/repositories/LanguageRepository';
import ILanguageRepository from './../repositories/ILanguageRepository';

@injectable()
export default class DeleteLanguageService {
    constructor(
        @inject(delay(() => LanguageRepository))
        private LanguageRepository: ILanguageRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.LanguageRepository.delete(id);
    }
}