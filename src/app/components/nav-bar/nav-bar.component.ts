import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  appUser: AppUser;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    console.log(">>>>> app user: ", JSON.stringify(this.appUser));
  }


  logout() {
    this.auth.logout();
  }
  
}
