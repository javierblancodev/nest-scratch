import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller() // This decorator is telling nest we want to create the following class as a controller in our application
class AppController {
    //This class will handle and route incoming requests through different methods
    @Get()
    getRootRoute() {
        return 'Hi there';
    }
}

// Every application must have one module inside of it
//the Module decorator expected a config option to be passed to ir 
@Module({
    controllers: [AppController]
})
class AppModule {

}

// The flow is as follows: When the appilcation starts up, Nest is going to look at the AppModule, find the list of controllers listed in the controllers property and create an instance of all the different controller classes. It is then to take a look at the decorators inside of it, and set up route handlers for each decorator that we use

// Define a function to be run when we started up our application. It is conventionally called bootstrap
async function bootstrap() {
    const app = await NestFactory.create(AppModule); // Create an instance of our nest application along our AppModule
    await app.listen(3000); // This is how we put our app to listen in nestjs
} 
bootstrap();