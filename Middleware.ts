import {
    Module,
    NestModule,
    MiddlewareConsumer 
} from '@nestjs/common';
import {
    LoggerMiddleware
} from '.common/middlewares/logger.middleware';
import{ castModule} from './cats/cats.Module';

@Module({
    imports: [castModule],
})
export class ApplicationModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer 
        .apply(LoggerMiddleware)
        .forRoutes('cats');
    }
}