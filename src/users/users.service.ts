import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./schemas/user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}
    async createUser(dto: CreateUserDto) {
        return await this.userModel.create({
            ...dto,
            banned: false,
            banReason: 'Не забанен!'
        })
    }

    async getUsers() {
        return await this.userModel.find()
    }
}
