import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Appointment, Object, Office, Patient } from '../interfaces/Object.interface';

@Injectable({providedIn: 'root'})
export class ConsultaService {
    public objects: Object[]=[]
    public patients: Patient[]=[]
    public offices: Office[]=[]
    public appointments: Appointment[]=[]


    public addPantient(object:Patient):void{
        const newObject:Patient={id:uuid(), ...object}
        this.addObjectFirebase("Patient",newObject)
        this.patients.push(newObject);
    }
    public addOffice(object:Office):void{
        const newObject:Office={id:uuid(), ...object}
       this.addObjectFirebase("Office",newObject)
        this.offices.push(newObject);
    }
    public addAppointment(object:Appointment):void{
        const newObject:Appointment={id:uuid(), ...object}
        this.addObjectFirebase("Appointment",newObject)
        this.appointments.push(newObject);
    }
    public addObject(object:Object):void{
        const newObject:Object={id:uuid(), ...object}
        
        this.objects.push(newObject);
    }

    deleteObjectById( id:any){
        console.log(id)
        this.objects= this.objects.filter(object => object.id !== id);
    }

    public async initFirebase()
    {



        console.log('iniciando firebase')
       this.loadAppointmentFromFirestore();
        this.loadOfficeFromFirestore();
        this.loadPatientFromFirestore();
    }

    public async loadPatientFromFirestore()
    {
        const docRef = query(collection(db, "Patient"));
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            this.patients.push({id:doc.data()['id'], name:doc.data()['name'],lastName:doc.data()['lastName'],age:doc.data()['age']});
          });
    }
    public async loadOfficeFromFirestore()
    {
        const docRef = query(collection(db, "Office"));
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            this.offices.push({id:doc.data()['id'], name:doc.data()['name'],place:doc.data()['place']});
          });
    }
    public async loadAppointmentFromFirestore()
    {
        const docRef = query(collection(db, "Appointment"));
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            this.appointments.push({id:doc.data()['id'], patient:doc.data()['patient'],office:doc.data()['office'],date:doc.data()['date'],description:doc.data()['description']});
        });
    }
   

    public async addObjectFirebase(colecction:string,object:any)
    {
        setDoc(doc(db,colecction, object.id),object);
    }

    public async deleteObjectFirebase(colecction:string,id:string){
        
        deleteDoc(doc(db, colecction, id));
        
    
        }
    public async updateOfficeFirebase(id:any,object:any)
    {
        await updateDoc(doc(db,"Office",id),{"name":object.name,"place":object.place});
    }
    public async updatePatientFirebase(id:any,object:any)
    {
        await updateDoc(doc(db,"Patient",id),{"name":object.name,"lastName":object.lastName, "age":object.age});
    }
    public async updateAppointmentFirebase(id:any,object:any)
    {
        await updateDoc(doc(db,"Appointment",id),{"patient":object.patient,"office":object.office,"date":object.date,"description":object.description});
    }

    public getAppointmentAttended()
    {
        return this.appointments.filter(appointment =>this.compararFecha(appointment.date)==true)
    }

    public getAppointmentInAttend()
    {
        return this.appointments.filter(appointment =>this.compararFecha(appointment.date)!=true)
    }
    public compararFecha(fechaComparar:string) 
    {
        let fecha = new Date(fechaComparar);
        let fechaActual = new Date();
        if (fechaActual >= fecha)return true;
        else return false;
    }
    
    constructor() { }
    
}