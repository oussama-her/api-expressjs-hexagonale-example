import { Model, ModelCtor } from 'sequelize-typescript';

export default abstract class BaseRepository<ModelType extends Model<ModelType>> {
    protected model: ModelCtor<ModelType>;

    constructor(model: ModelCtor<ModelType>) {
        this.model = model;
    }

    public async all(): Promise<ModelType[]> {
        return this.model.findAll();
    }

    // other common methods
}
