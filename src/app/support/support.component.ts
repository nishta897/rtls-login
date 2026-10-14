import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  supportEmail = 'support@gmail.com';
  supportPhone = '+919999900000';

  constructor(private router: Router) {} 

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
