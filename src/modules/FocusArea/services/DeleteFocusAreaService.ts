import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import FocusAreaRepository from './../infra/typeorm/repositories/FocusAreaRepository';
import IFocusAreaRepository from './../repositories/IFocusAreaRepository';

@injectable()
export default class DeleteFocusAreaService {
    constructor(
        @inject(delay(() => FocusAreaRepository))
        private focusAreaRepository: IFocusAreaRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.focusAreaRepository.delete(id);
    }
}