import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleComponent } from './components/article/article.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component';


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'admin-users', component: AdminUsersComponent},
  {path: 'admin-articles', component: AdminArticlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
