import { injectable, inject, delay } from 'tsyringe';
import IFocusAreaRepository from './../repositories/IFocusAreaRepository';
import { FocusArea } from './../infra/typeorm/entities/FocusArea';
import ICreateFocusAreaDTO from './../dtos/ICreateFocusAreaDTO';
import FocusAreaRepository from '../infra/typeorm/repositories/FocusAreaRepository';

@injectable()
class CreateFocusAreaService {
    constructor(
        @inject(delay(() => FocusAreaRepository))
        private focusAreaRepository: IFocusAreaRepository,
    ) { }

    public async execute(data: ICreateFocusAreaDTO): Promise<FocusArea> {
        return await this.focusAreaRepository.create(data);
    }
}

export default CreateFocusAreaService