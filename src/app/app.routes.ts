import { Routes } from '@angular/router';
import { RegisterLoginComponent } from './register-login/register-login.component';

export const routes: Routes = [
    {path: 'login', component: RegisterLoginComponent},
    {path: '', redirectTo: '/login', pathMatch:'full'}
];
