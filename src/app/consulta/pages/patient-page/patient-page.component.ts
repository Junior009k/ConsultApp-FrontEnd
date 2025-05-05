import { Component } from '@angular/core';
import { Patient } from '../../interfaces/Object.interface';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'consulta-patient-page',
  templateUrl: './patient-page.component.html',
  styles: ``
})
export class PatientPageComponent {
/*
    patientA:Patient={
    name:'Junior',
    lastName:'Aquino',
    age:27
    }
    
    listsPacients=[this.patientA]
    */
    listTitle=['#','Nombre','Apellido','Edad']

    constructor(private consultaService:ConsultaService){
    }

    get Patients():Patient[]{
        return [...this.consultaService.patients];
    }

    onDeleteObject(id:string):void{
        this.consultaService.deleteObjectById(id)
    }

    onNewObject(object:Patient){
        //console.log(object)
        this.consultaService.addPantient(object)
    }

}
