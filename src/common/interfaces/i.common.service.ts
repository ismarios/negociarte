export interface ICommonService<T, DTO> {
    findAll(): Promise<T[]>;
    findById(ID: number): Promise<T | null>;
    findOne(options: object): Promise<T | null>;
    create(todos: DTO): Promise<T>;
    update(ID: number, newValue: T): Promise<T | null>;
    delete(ID: number): Promise<string>;
}