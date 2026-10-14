import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { FacilityDashboardComponent } from './facility-dashboard/facility-dashboard.component';
import { EquipmentNavigationComponent } from './equipment-navigation/equipment-navigation.component';
import { AlertIconComponent } from './alert-icon/alert-icon.component';
import { Column1ABF00004Component } from './column1-abf00004/column1-abf00004.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'support', component: SupportComponent},
  { path: 'facility-dashboard', component: FacilityDashboardComponent },
  { path: 'equipment-navigation', component: EquipmentNavigationComponent },
  { path: 'alert-icon', component: AlertIconComponent },
  { path: 'column1-abf00004', component: Column1ABF00004Component },
  { path: 'logout', component: LogoutComponent },
];
