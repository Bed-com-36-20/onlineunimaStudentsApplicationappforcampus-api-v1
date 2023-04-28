import {controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@controller()
export class AppController {
    Constructor(Private readonly appService: AppService) {}

    @Get()
    getll(): string{
        return this.appService.getAll();
    }

    @post ()
    async create (@Body() createCatDto: CreatCatDto){
        throw new HttpException ({
        Status : HttpStatus.FORBIDDEN,
        error : 'This is a custom message',
         
        }, 403)

    }
    



}