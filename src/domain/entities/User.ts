// src/domain/entities/User.ts
import {Table, Column, Model, IsUUID, PrimaryKey} from 'sequelize-typescript';
import {DataTypes} from "sequelize";

@Table
export class User extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column({ type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 })
    private _userId!: string;

    @Column
    private _name!: string;

    @Column
    private _email!: string;

    public get userId(): string {
        return this._userId;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }
}
