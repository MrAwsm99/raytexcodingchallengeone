import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeavesComponent } from './leaves/leaves.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'employee',component:EmployeeComponent},
{path:'leaves', component:LeavesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
