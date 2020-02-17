import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetBook';

  get isLogged(): boolean {
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthService) { }
}
