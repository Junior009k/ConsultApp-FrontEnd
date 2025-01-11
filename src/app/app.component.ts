import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consultApp';
  isPatients= false;
  isOffices= false;


  loadView(option:number):void{

    if(option==1){
      this.isPatients= true;
      this.isOffices= false;
    }

    if(option==2){
      this.isPatients= false;
      this.isOffices= true;
    }

  }
}
