import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {UsersModule} from "./users/users.module";

@Module({
    controllers: [],
    providers: [],
    imports: [MongooseModule.forRoot(
        'mongodb+srv://Druce:Am4A1313@cluster0.82f0z.mongodb.net/Druce-music?retryWrites=true&w=majority',
    ), UsersModule]
})
export class AppModule {
}