import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddPatientComponent } from './components/add/add-patient.component';
import { AddOfficeComponent } from './components/add/add-office.component';
import { TablePatientComponent } from './components/table/table-patient.component';
import { TableOfficeComponent } from './components/table/table-office.component';
import { FormsModule } from '@angular/forms';
import { PatientPageComponent } from './pages/patient-page/patient-page.component';
import { OfficePageComponent } from './pages/office-page/office-page.component';
import { CreateAppointmentPageComponent } from './pages/create-appointment-page/create-appointment-page.component';
import { AddAppointmentComponent } from './components/add/add-appointment.component';
import { TableAppointmentComponent } from './components/table/table-appointment.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/NavBar/nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [ListComponent,AddPatientComponent, AddOfficeComponent,AddAppointmentComponent, TablePatientComponent,TableOfficeComponent,TableAppointmentComponent, PatientPageComponent, OfficePageComponent, CreateAppointmentPageComponent, DashboardComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule, 
    AppRoutingModule
  ],
  exports:[
    PatientPageComponent,
    OfficePageComponent,
    CreateAppointmentPageComponent,
    DashboardComponent,
    NavBarComponent
    
]
})
export class ConsultaModule { }
