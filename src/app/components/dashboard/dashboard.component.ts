import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dropdownOpen = false;
  showProfileModal = false;

  name = 'Stas';
  email = 'stas@gmail.com';

  constructor(private authService: AuthService, private router: Router) {}


  toggleDropdown(event?: Event) {
    event?.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }

  goToProfile() {
    this.showProfileModal = true; 
    this.dropdownOpen = false;     
  }

  closeProfile() {
    this.showProfileModal = false; 
  }

logout() {
  localStorage.removeItem('authToken');
  this.router.navigate(['/logout']);
}

  navigateToFacilityDashboard() {
    this.router.navigate(['/facility-dashboard']);
  }

  navigateToEquipmentNavigation() {
    this.router.navigate(['/equipment-navigation']);
  }

  navigateToAlertIcon() {
    this.router.navigate(['/alert-icon']);
  }

  navigateToColumn1ABF00004() {
    this.router.navigate(['/column1-abf00004']);
  }

  goToSupport() {
    this.router.navigate(['/support']);
  }
}
