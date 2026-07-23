import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent },
   { path: 'students', component: StudentsComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
