import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component'

import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArticleComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    AdminUsersComponent,
    AdminArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
