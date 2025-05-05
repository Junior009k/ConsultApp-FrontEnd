import { Component, Output, Input,EventEmitter } from '@angular/core';
import { Object, Patient } from '../../interfaces/Object.interface';

@Component({
    selector: 'consulta-add-patient',
    templateUrl: `./add-patient.component.html`,
})
export class AddPatientComponent { 
    
    
    @Input() 
    public title:string=''

    @Output()
    public onNewObject: EventEmitter<Patient> = new EventEmitter();
    
    public object:Patient= 
    {
      name:'',
      lastName:'',
      age:0
    }

    public  emitObject():void{
       if(this.object.name.length === 0)return;
       this.onNewObject.emit(this.object)
       this.object = {name:'',lastName:'',age:0};
    }
}
