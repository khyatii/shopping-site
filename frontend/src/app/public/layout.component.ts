import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Cart } from './models/cart';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public cart: Cart) { }

  ngOnInit() {
  }
  signout() {
    this.authService.SignOut();
    this.router.navigate(['/login']);
  }
}
