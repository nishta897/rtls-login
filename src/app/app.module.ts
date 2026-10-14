import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { FacilityDashboardComponent } from './facility-dashboard/facility-dashboard.component';
import { EquipmentNavigationComponent } from './equipment-navigation/equipment-navigation.component';
import { AlertIconComponent } from './alert-icon/alert-icon.component';
import { Column1ABF00004Component } from './column1-abf00004/column1-abf00004.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SupportComponent,
    FacilityDashboardComponent,
    EquipmentNavigationComponent,
    AlertIconComponent,
    Column1ABF00004Component,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
