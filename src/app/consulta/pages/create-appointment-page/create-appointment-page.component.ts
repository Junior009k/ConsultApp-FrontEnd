import { Component } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';
import { Appointment } from '../../interfaces/Object.interface';

@Component({
  selector: 'consulta-create-appointment-page',
  templateUrl: './create-appointment-page.component.html',
  styles: ``
})
export class CreateAppointmentPageComponent {

  /*
    id?:string;
    patient:Patient;
    office:Office;
    date:string,
    description:string
    listsPacients=[this.patientA]
    */
    listTitle=['#','Paciente','Oficina','Fecha','descripcion']

  constructor(private consultaService:ConsultaService){
  }

  get Appointments():Appointment[]{
      return [...this.consultaService.appointments];
  }

  onDeleteObject(id:string):void{
      this.consultaService.deleteObjectById(id)
  }

  onNewObject(object:Appointment){
      //console.log(object)
      this.consultaService.addAppointment(object)
  }

}
