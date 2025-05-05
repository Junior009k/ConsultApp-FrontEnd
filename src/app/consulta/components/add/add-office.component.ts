import { Component, Output, Input,EventEmitter } from '@angular/core';
import { Object, Office } from '../../interfaces/Object.interface';

@Component({
    selector: 'consulta-add-office',
    templateUrl: `./add-office.component.html`,
})
export class AddOfficeComponent { 
    
    
    @Input() 
    public title:string=''

    @Output()
    public onNewObject: EventEmitter<Office> = new EventEmitter();
    
    public object:Office= 
    {
      name:'',
      place:''
    }

    public  emitObject():void{
       if(this.object.name.length === 0)return;
       this.onNewObject.emit(this.object)
       this.object = { name:'',place:''};
    }
}
