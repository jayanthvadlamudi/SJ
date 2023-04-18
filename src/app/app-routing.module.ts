import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LOGINComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';

const routes: Routes = [

  {path:'', component:Login1Component}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
