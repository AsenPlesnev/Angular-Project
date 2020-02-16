import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerCode = '9c834817-343a-4061-9ca3-fcc1384b4b5f';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  registerHandler(data) {
    if (data.password === data.confirmPassword) {
      if (data.registerCode === this.registerCode) {
        this.authService.register(data.email, data.password);
      } else {
        this.authService.showNotification('error', 'Wrong Register Code!');
      }
    } else {
      this.authService.showNotification('error', 'Password and ConfirmPassword must be the same.');
    }

  }
}
