import { Component, Input } from '@angular/core';
import { Patient } from '../../interfaces/Object.interface';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'consulta-table-patient',
  templateUrl: './table-patient.component.html',
  styles: ``
})
export class TablePatientComponent {
  constructor(private consultaService:ConsultaService){}
  @Input()
  listTitle:string[]=[]

  @Input()
  objectList:Patient[]=[]

  public index:number= 0;
  public id:string | undefined;
  public isSaved          = true;


  public updatePatient(patient:Patient):void{
    if(this.isSaved){
      this.isSaved=false
      this.id=patient.id
      return;
    }
   
    this.consultaService.updatePatientFirebase(this.id,patient)
    this.isSaved=true
    this.id=undefined
  }
  
  public deletePatient(pat:Patient):void{
    if(pat.id!=null){
      this.consultaService.deleteObjectFirebase("Patient",pat.id)
      this.consultaService.patients= this.consultaService.patients.filter(patient => patient.id !== pat.id);
    }
  }

}
