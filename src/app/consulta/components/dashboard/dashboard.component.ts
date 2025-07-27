import { Component } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';

import { Appointment, Office, Patient } from '../../interfaces/Object.interface';

@Component({
  selector: 'consulta-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  
  citasAgenda    :Appointment[]=[];
  citasAtendidas :Appointment[]=[];

  constructor(private consultaService:ConsultaService) { }

  ngOnInit(): void {
    this.citasAgenda = this.consultaService.getAppointmentInAttend();
    this.citasAtendidas = this.consultaService.getAppointmentAttended();
  }

    

}
