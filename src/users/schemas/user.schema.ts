import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    birthDate: string

    @Prop()
    registerDate: string

    @Prop({required: true})
    email: string

    @Prop({required: true})
    password: string

    @Prop()
    banned: boolean

    @Prop()
    banReason: string
}

export const UserSchema = SchemaFactory.createForClass(User)