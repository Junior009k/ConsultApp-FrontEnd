import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input, Output ,EventEmitter} from '@angular/core';
import { Object } from '../../interfaces/Object.interface';

@Component({
    selector: 'consulta-list',
    templateUrl: './list.component.html'
})
export class ListComponent { 
    @Output()
    public onDeleteId: EventEmitter<number> = new EventEmitter();
    @Output()
    public onDeleteById: EventEmitter<string> = new EventEmitter();
    @Input()
    public objectList:Object[]=[
        {
            name:'Trunks', 
            power:10
        }
    ]
    /*public index:number= 0; 
    onDeleteCharacter(id:number):void{
        //Emitir el id del personaje
        console.log(id+1)
        this.index= id 
        console.log(this.index)
        this.onDeleteId.emit(this.index)
    }
*/
    public objectTemplate:Object= {name:'',power:0};
    onDeleteByIdObject(object:Object):void{
        //Emitir el id del personaje
        //console.log(character)
        this.objectTemplate= object 
        //console.log(this.characterTemplate.id)
        this.onDeleteById.emit(this.objectTemplate.id)
    }
}
