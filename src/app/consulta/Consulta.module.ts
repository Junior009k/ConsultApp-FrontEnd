import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPageComponent } from './pages/main-page.component';
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
@NgModule({
  declarations: [mainPageComponent,ListComponent,AddPatientComponent, AddOfficeComponent,AddAppointmentComponent, TablePatientComponent,TableOfficeComponent,TableAppointmentComponent, PatientPageComponent, OfficePageComponent, CreateAppointmentPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  exports:[
    mainPageComponent,
    PatientPageComponent,
    OfficePageComponent,
    CreateAppointmentPageComponent
    
]
})
export class ConsultaModule { }
