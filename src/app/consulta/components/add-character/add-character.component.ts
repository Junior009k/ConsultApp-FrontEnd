import { Component, Output, input,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'consulta-add-character',
    templateUrl: `./add-character.component.html`,
    styleUrl: './add-character.component.css',
})
export class AddCharacterComponent { 
    
    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();
    
    public character: Character= {
        name:'', 
        power:0
    }

    public  emitCharacter():void{
       console.log("Add Character")
       console.log(this.character)
       if(this.character.name.length === 0)return;
       this.onNewCharacter.emit(this.character)
       this.character = { name: '', power: 0 };
    }
}
