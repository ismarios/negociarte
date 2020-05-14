import { Injectable } from '@nestjs/common';
import { ICommonService } from '../interfaces/i.common.service';
import { debug } from 'console';

@Injectable()
export abstract class CommonService<T, DTO> implements ICommonService<T, DTO>{
    constructor(
        private readonly model
    ) { }

    async findAll(options?): Promise<T[]> {
        return options? await this.model.find(options).exec(): await this.model.find().exec();
    }

    async findOne(options: object): Promise<T> {
        return await this.model.findOne(options).exec();
    }

    async findById(ID: number): Promise<T> {
        console.log("id en service: ", ID);
        return await this.model.findById(ID).exec();
    }
    async create(dto: DTO): Promise<T> {
        const createdModel = new this.model(dto);
        console.log("model ", createdModel);
        return await createdModel.save();
    }

    async update(ID: number, newValue: T): Promise<T> {
        const todo = await this.model.findById(ID).exec();

        if (!todo._id) {
            debug('todo not found');
        }

        await this.model.findByIdAndUpdate(ID, newValue).exec();
        return await this.model.findById(ID).exec();
    }

    async delete(ID: number): Promise<string> {
        try {
            await this.model.findByIdAndRemove(ID).exec();
            return 'The todo has been deleted';
        }
        catch (err){
            debug(err);
            return 'The todo could not be deleted';
        }
    }
}
