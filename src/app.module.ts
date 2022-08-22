import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
// Every application must have one module inside of it
//the Module decorator expected a config option to be passed to it
@Module({
    controllers: [AppController]
})
export class AppModule {}