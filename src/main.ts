import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// Define a function to be run when we started up our application. It is conventionally called bootstrap
async function bootstrap() {
    const app = await NestFactory.create(AppModule); // Create an instance of our nest application along our AppModule
    await app.listen(3000); // This is how we put our app to listen in nestjs
} 
bootstrap();

// The flow is as follows: When the appilcation starts up, Nest is going to look at the AppModule, find the list of controllers listed in the controllers property and create an instance of all the different controller classes. It is then to take a look at the decorators inside of it, and set up route handlers for each decorator that we use