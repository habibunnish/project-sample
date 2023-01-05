import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component1/home-page/home-page.component';
import { LoginFormComponent } from './component1/login-form/login-form.component';
import { RegisterFormComponent } from './component1/register-form/register-form.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'login-form',component:LoginFormComponent},
  {path:'register-form',component:RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
