import { injectable, inject, delay } from 'tsyringe';
import FocusAreaRepository from './../infra/typeorm/repositories/FocusAreaRepository';
import IFocusAreaRepository from './../repositories/IFocusAreaRepository';

@injectable()
export default class DeleteFocusAreaService {
    constructor(
        @inject(delay(() => FocusAreaRepository))
        private focusAreaRepository: IFocusAreaRepository) { }

    public async execute(id: string) {
        this.focusAreaRepository.delete(id);
    }
}