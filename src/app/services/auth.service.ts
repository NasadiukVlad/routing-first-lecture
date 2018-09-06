import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  public isUserAuthorized: boolean;
  public authStatusEventEmitter = new EventEmitter<boolean>();

  public dispatchSuccessfulLogin() {
    this.isUserAuthorized = true;
    this.authStatusEventEmitter.emit(this.isUserAuthorized);
  }

  public dispatchUnsuccessfulLogin() {
    this.isUserAuthorized = false;
    this.authStatusEventEmitter.emit(this.isUserAuthorized);
  }

  public getUserAuthorizedStatus() {
    return this.isUserAuthorized;
  }
}
