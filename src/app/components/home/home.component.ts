import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  public successfulAuthorized() {
    this.authService.dispatchSuccessfulLogin();
    this.router.navigate(['about']);
  }

  public successfulUnauthorized() {
    this.authService.dispatchUnsuccessfulLogin();
    alert('Login incorrect!');
  }

}


