import { Component, Input } from '@angular/core';
import { Appointment, Office, Patient } from '../../interfaces/Object.interface';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'consulta-table-appointment',
  templateUrl: './table-appointment.component.html',
  styles: ``
})
export class TableAppointmentComponent 
{
  constructor(private consultaService:ConsultaService){}
  @Input()
  listTitle:string[]=[]

  @Input()
  objectList:Appointment[]=[]

  public index:number= 0;
  public id:string | undefined;
  public idPatient:any;
  public idOffice:any;
  public isSaved          = true;
  public patient:Patient= {name:'',lastName:'',age:0}
  public office:Office= {name:'',place:''}
  public object: Appointment={patient:this.patient, office:this.office,date:'27-02-2025',description:'esta es una colonoscopia'}
  
  objectOffice(e:any) 
  {
    const officeTable=this.consultaService.offices.filter((office)=>office.id==e)[0];
    return officeTable.name
  }

  objectPatient(e:any) 
  {
    const patientTable=this.consultaService.patients.filter((patient)=>patient.id==e)[0];
    return patientTable.name + " " + patientTable.lastName
  }

  get Patients():Patient[]{return [...this.consultaService.patients];}
  get Offices():Office[]{return [...this.consultaService.offices];}

  public updateAppointment(appointment:Appointment):void
  {
  
    if(this.isSaved)
    {
      this.isSaved=false
      this.id=appointment.id
      this.object.office=appointment.office
      this.object.patient=appointment.patient
      
      return;
    }
    appointment.office=this.object.office
    appointment.patient=this.object.patient
    console.log(appointment)
    this.consultaService.updateAppointmentFirebase(this.id,appointment)
    this.isSaved=true
    this.id=undefined
  }

  onChangeOffice(e: any) 
  {
    this.object.office=this.Offices.filter((office)=>office.id==e.target.value)[0];
  }
  onChangePatient(e: any) 
  {
    this.object.patient=this.Patients.filter((patient)=>patient.id==e.target.value)[0];
  }

  public deleteAppointment(appoint:Appointment):void
  {
    if(appoint.id!=null)  
    {
      this.consultaService.deleteObjectFirebase("Appointment",appoint.id)
      this.consultaService.appointments= this.consultaService.appointments.filter(appointment => appointment.id !== appoint.id);
    }
}

}