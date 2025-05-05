import { Component } from '@angular/core';
import { Office } from '../../interfaces/Object.interface';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'consulta-office-page',
  templateUrl: './office-page.component.html',
  styles: ``
})
export class OfficePageComponent {
    /*patientA:Office={
    name:'Consultorio A',
    place:'27 de Febrero',
    }
    
    listsPacients=[this.patientA]
    */
    listTitle=['#','Nombre','Lugar']

    constructor(private consultaService:ConsultaService){
    }

    get offices():Office[]{
        return [...this.consultaService.offices];
    }

    onDeleteObject(id:string):void{
        this.consultaService.deleteObjectById(id)
    }

    onNewObject(object:Office){
        //console.log(object)
        this.consultaService.addOffice(object)
    }
}
