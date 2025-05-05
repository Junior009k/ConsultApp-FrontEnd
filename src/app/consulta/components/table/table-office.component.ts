import { Component, Input } from '@angular/core';
import { Office } from '../../interfaces/Object.interface';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'consulta-table-office',
  templateUrl: './table-office.component.html',
  styles: ``
})
export class TableOfficeComponent {
  
  constructor(private consultaService:ConsultaService){}
  @Input()
  listTitle:string[]=[]

  @Input()
  objectList:Office[]=[]

  public index:number= 0;
  public id:string | undefined;
  public isSaved          = true;

  public updateOffice(office:Office):void{
    if(this.isSaved){
      this.isSaved=false
      this.id=office.id
      return;
    }
   
    this.consultaService.updateOfficeFirebase(this.id,office)
    this.isSaved=true
    this.id=undefined
  }

  public deleteOffice(offic:Office):void{
    if(offic.id!=null){
      this.consultaService.deleteObjectFirebase("Office",offic.id)
      this.consultaService.offices= this.consultaService.offices.filter(office => office.id !== offic.id);
    }
  }
}
