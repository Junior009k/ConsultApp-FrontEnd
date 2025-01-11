import { Component, OnInit, Input} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { ConsultaService } from '../services/consulta.service';

@Component({
    selector: 'app-consulta-page',
    templateUrl: 'main-page.component.html'
})


export class mainPageComponent {

    @Input()
    public title:string=''

    constructor(private consultaService:ConsultaService){
    }

    get characters():Character[]{
        return [...this.consultaService.characters];
    }

    onDeleteCharacter(id:string):void{
        this.consultaService.deleteCharacterById(id)
    }

    onNewCharacter(character:Character){
        this.consultaService.addCharacter(character)
    }

    
}