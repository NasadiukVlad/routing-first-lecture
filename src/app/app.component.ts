import {Component} from '@angular/core';
import {UserModel} from './models/user.model';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isUserAuthorized: boolean;

  public userListMock: UserModel[] = [];

  constructor(private authService: AuthService) {
    this.initFrontendUsers();
    console.log(this.userListMock);
    this.subscribeOnAuthStatus();
  }

  private initFrontendUsers() {
    this.userListMock.push(new UserModel('Vlad', 'Nasadiuk', 'vnasadiuk', '123456'));
    this.userListMock.push(new UserModel('Vasya', 'Ivanov', 'vivanov', '1234567'));
    this.userListMock.push(new UserModel('Ivan', 'Petrov', 'ipetrov', '1234568'));
  }

  private subscribeOnAuthStatus() {
    this.authService.authStatusEventEmitter.subscribe((authStatusFromEmit: boolean) => {
      this.isUserAuthorized = authStatusFromEmit;
      console.log('Is User Authorized: ', this.isUserAuthorized);
    });
  }
}
