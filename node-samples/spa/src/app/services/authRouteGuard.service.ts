import {CanActivate} from '@angular/router'

export class AuthGuardService implements CanActivate{
  canActivate(): boolean{
    //Conditions
  return true;
  }

}
