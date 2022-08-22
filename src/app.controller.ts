import { Controller, Get } from "@nestjs/common";

// This decorator is telling nest we want to create the following class as a controller in our application
@Controller('/app') 
export class AppController {
    //This class will handle and route incoming requests through different methods
    @Get('/') // /app
    getRootRoute() {
        return 'Welcome';
    }
    @Get('/hi') // /app/hi
    getHiRoute() {
        return 'Hi there';
    }
    @Get('/bye') // /app/bye
    getByeRoute() {
        return 'Bye there';
    }
}

