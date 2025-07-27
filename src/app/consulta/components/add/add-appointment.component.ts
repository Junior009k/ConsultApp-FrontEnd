import { Component, Output, Input,EventEmitter } from '@angular/core';
import { Appointment, Object, Office, Patient } from '../../interfaces/Object.interface';
import { ConsultaService } from '../../services/consulta.service';

@Component({
    selector: 'consulta-add-appointment',
    templateUrl: `./add-appointment.component.html`,
})
export class AddAppointmentComponent { 
    
   constructor(private consultaService:ConsultaService){}
    
    @Input() 
    public title:string=''

    @Output()
    public onNewObject: EventEmitter<Appointment> = new EventEmitter();
    
    get Patients():Patient[]{
      return [...this.consultaService.patients];
  }
    get Offices():Office[]{
    return [...this.consultaService.offices];
    }
  
    public patient:Patient= 
    {
      name:'',
      lastName:'',
      age:0
    }

    public office:Office= 
    {
      name:'',
      place:''
    }

    public object: Appointment=
    {
      patient:this.patient, 
      office:this.office,
      date:'',
      description:''
    }
    
    onChangeOffice(e: any) 
    {
      this.object.office=this.Offices.filter((office)=>office.id==e.target.value)[0];
    }

    onChangePatient(e: any) 
    {
      console.log(e.target.value)
      this.object.patient=this.Patients.filter((patient)=>patient.id==e.target.value)[0];
    }
    
    public  emitObject():void
    {
      if(this.object.description.length === 0 || this.object.office.name.length===0 || this.object.patient.name.length===0 )return;

       this.onNewObject.emit(this.object)
       this.object.patient={name:'',lastName:'',age:0}
       this.object.office= {name:'', place:''}
       this.object =  {patient:this.patient, office:this.office,date:'',description:''}
      ;
    }
}
