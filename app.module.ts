import {modules} from '@nestjs/common';
import {customersModule} from './customers/customers.module';
import {usersModule} from './users/users.module';
import { AppController } from './Cotroller';

@module({
    Import:[
        customersModule, 
        usersModule,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ypeOrmModule.for Root({
        type: 'mysql',
        host: 'localhost',
        port: '3000',
        Username: 'Eden',
        password: '200300mark',
        database:`onlineunimaStudentsapplicationappforcampus`,
        entities:[],
        synchronizer: true,
    })
    ]
controller:[AppController],
providers :[AppService],
})
export class AppModule{}


























































    })]
})