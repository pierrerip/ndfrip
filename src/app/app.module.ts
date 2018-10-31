import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NDFSComponent } from './ndfs/ndfs.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewNDFFormComponent } from './new-ndf-form/new-ndf-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { FilterPipe } from './filter.pipe';
import { NDFPageComponent } from './ndf-page/ndf-page.component';
import { NDFSSearchResultsComponent } from './ndfs-search-results/ndfs-search-results.component';
import { UpdateNdfFormComponent } from './update-ndf-form/update-ndf-form.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewNDFFormComponent,
    FilterPipe,
    NDFPageComponent,
    NDFSComponent,
    NDFSSearchResultsComponent,
    UpdateNdfFormComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  providers: [AuthenticationService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
