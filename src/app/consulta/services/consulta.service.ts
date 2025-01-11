import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class ConsultaService {

    public characters: Character[]=
    [
        {id:uuid(), name:'krillin',power:1000},
        {id:uuid(), name:'Goku',power:9500},
        {id:uuid(), name:'Vegeta',power:9500}
    ]

    public addCharacter(character:Character):void{
        const newCharacter:Character={id:uuid(), ...character}
        this.characters.push(newCharacter);
    }

    deleteCharacterById( id:any){
        console.log(id)
        this.characters= this.characters.filter(character => character.id !== id);
    }

    
    //public onDeleteCharacter(id:number):void{        this.characters.splice(id,1); }
    
    constructor() { }
    
}