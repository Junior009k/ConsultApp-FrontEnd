import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './consulta/services/consulta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private consultaService:ConsultaService){}
  ngOnInit(){
    this.consultaService.initFirebase();
  }
  title = 'consultApp';
  isNothing          = false;
  isPatients         = false;
  isOffices          = false;
  isCreateAppointment= false;

//Esto esta mal, solo es construyendo algo basico
  loadView(option:number):void{
    this.isNothing= false;
    this.isOffices= false;
    this.isPatients= false;
    this.isCreateAppointment= false;
    if(option==0)this.isNothing= true;
    if(option==1)this.isPatients= true;
    if(option==2)this.isOffices= true;
    if(option==3)this.isCreateAppointment= true;

  }
}
