import {
    Injectable, CanaActivate, ExecutionContext
} from '@nestjs/common';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanaActivate {
    canActivate(
        context: ExecutionContext, 
    ) : boolean | Promise<boolean> | Observable<boolean>{
        const request = context.switchToHttp().getRequest();
        return validateRequest(request);
    }
}