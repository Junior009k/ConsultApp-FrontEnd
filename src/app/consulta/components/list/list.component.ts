import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input, Output ,EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'consulta-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent { 
    @Output()
    public onDeleteId: EventEmitter<number> = new EventEmitter();
    @Output()
    public onDeleteById: EventEmitter<string> = new EventEmitter();
    @Input()
    public characterList:Character[]=[
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
    public characterTemplate:Character= {name:'',power:0};
    onDeleteByIdCharacter(character:Character):void{
        //Emitir el id del personaje
        //console.log(character)
        this.characterTemplate= character 
        //console.log(this.characterTemplate.id)
        this.onDeleteById.emit(this.characterTemplate.id)
    }
}
