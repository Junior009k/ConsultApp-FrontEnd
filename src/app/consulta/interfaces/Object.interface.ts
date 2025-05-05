export interface Object{
    id?:string;
    name:string;
    power:number;
}

export interface Patient{
    id?:string;
    name:string;
    lastName:string;
    age:number;
}

export interface Office{
    id?:string;
    name:string;
    place:string;
}

export interface Appointment{
    id?:string;
    patient:Patient;
    office:Office;
    date:string,
    description:string
}