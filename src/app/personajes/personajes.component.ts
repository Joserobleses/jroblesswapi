import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { PersonajesService } from '../services/personajes.service';
import {map, catchError} from "rxjs/operators";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  datos;
  datos2;
  datos3;
  datos4;
  datos5;
  datos6;
  datos7;
  datos8;
  
  name : string
  bucle;
  
  
  constructor(private personajesService: PersonajesService){}

  ngOnInit() {
    this.personajesService.getTodosLosPersonajes().subscribe((data:any) =>{
      this.datos = data;

    })
  }

  listar(){
    this.personajesService.getPersonajes(this.name).subscribe(data =>{
      
      this.datos2 = data
      
    });
  }
    listar2(valor: any){
      let x : number;
      

  
  this.bucle =="";
  valor.forEach( (x) => {
    alert(x);
    Object.keys(x).forEach( (p) => {
        this.bucle = x[p];
        
        
        switch(p) { 
          case "0": { 
            this.personajesService.getPeliculasPersonajes(this.bucle).subscribe((data:any) =>{
             
              this.datos3="";   
              this.datos3 = data.title;
              
        
              this.datos3 = Array.of(this.datos3);
        
               });
               
             break; 
          } 
          case "1": { 
            this.personajesService.getPeliculasPersonajes(this.bucle).subscribe((data:any) =>{
              
              this.datos4="";   
              this.datos4 = data.title;
              
        
              this.datos4 = Array.of(this.datos4);
                 
               });
               
             break; 
          } 
          case "3": { 
            this.personajesService.getPeliculasPersonajes(this.bucle).subscribe((data:any) =>{
             
              this.datos5="";   
              this.datos5 = data.title;
              
        
              this.datos5 = Array.of(this.datos5);
                 
               });
            break; 
         }
         case "4": { 
          this.personajesService.getPeliculasPersonajes(this.bucle).subscribe((data:any) =>{
            
            this.datos6="";   
            this.datos6 = data.title;
            
               this.datos6 = Array.of(this.datos6);

        
             });
             
          break; 
       }
       case "5": { 
        this.personajesService.getPeliculasPersonajes(this.bucle).subscribe((data:any) =>{
          
          this.datos7="";   
          this.datos7 = data.title;
          
        
          this.datos7 = Array.of(this.datos7);
              
           });
           
        break; 
     }
     case "6": { 
      this.personajesService.getPeliculasPersonajes(this.bucle).subscribe((data:any) =>{
        
        this.datos8="";   
        this.datos8 = data.title;
        
        this.datos8 = Array.of(this.datos8);
           
         });
      break; 
   }
          default: { 
             //statements; 
             break; 
          } 
       } 

    });
  })
  }
}
