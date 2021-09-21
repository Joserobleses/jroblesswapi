import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  
  private url: string = "https://swapi.dev/api/people/?search=";
  
  private url2: string = "https://swapi.dev/api/people/";

  
  
  private bucle;
  
  constructor(private http : HttpClient){}
  
  getPersonajes(name : string){
   
    return this.http.get(this.url+name);
    
  }
  getTodosLosPersonajes(){
    return this.http.get(this.url2);
    
  }
  getPeliculasPersonajes(name : any){
    
    this.bucle = this.http.get(name);
    
   return this.http.get(name);
    
  }
}
