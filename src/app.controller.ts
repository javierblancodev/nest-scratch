import { Controller, Get } from "@nestjs/common";

@Controller() // This decorator is telling nest we want to create the following class as a controller in our application
export class AppController {
    //This class will handle and route incoming requests through different methods
    @Get()
    getRootRoute() {
        return 'Hi there';
    }
}

