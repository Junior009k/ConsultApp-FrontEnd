import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './consulta/components/dashboard/dashboard.component';
import { OfficePageComponent } from './consulta/pages/office-page/office-page.component';
import { PatientPageComponent } from './consulta/pages/patient-page/patient-page.component';
import { CreateAppointmentPageComponent } from './consulta/pages/create-appointment-page/create-appointment-page.component';
import { LoginComponent } from './auth/component/login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Office', component: OfficePageComponent },
  { path: 'Patient', component: PatientPageComponent },
  { path: 'Appointment', component: CreateAppointmentPageComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
