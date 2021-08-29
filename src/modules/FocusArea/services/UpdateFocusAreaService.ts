import { injectable, inject, delay } from 'tsyringe';
import IFocusAreaRepository from './../repositories/IFocusAreaRepository';
import FocusAreaRepository from '../infra/typeorm/repositories/FocusAreaRepository';
import ICreateFocusAreaDTO from './../dtos/ICreateFocusAreaDTO';

@injectable()
class UpdateFocusAreaService {
    constructor(
        @inject(delay(() => FocusAreaRepository))
        private focusAreaRepository: IFocusAreaRepository,
    ) { }

    public async execute(data: ICreateFocusAreaDTO, id: string): Promise<void> {
        await this.focusAreaRepository.update(data, id);
    }
}

export default UpdateFocusAreaService