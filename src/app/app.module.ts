import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestBdTableComponent } from './test-bd-table/test-bd-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NavbarCustomComponent } from './navbar-custom/navbar-custom.component';
import { TabsTablesComponent } from './tabs-tables/tabs-tables.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthModule} from './auth/auth.module';
import { RegistrationComponent } from './registration/registration.component';
import { UserinfoPanelComponent } from './userinfo-panel/userinfo-panel.component';
import { HomePageComponent } from './home-page/home-page.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-info', component: UserinfoPanelComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'tables',
    component: TabsTablesComponent
  },
  { path: '',
    redirectTo: '/tables',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestBdTableComponent,
    NavbarCustomComponent,
    TabsTablesComponent,
    LoginComponent,
    RegistrationComponent,
    UserinfoPanelComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AuthModule,
    HttpModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
