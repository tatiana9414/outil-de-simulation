import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

 private apiUrl='http://localhost:3000/api/paesi';
  constructor(private http:HttpClient) {}

  getPaesi():Observable<any[]>{
    console.log('Appel de getPaesi()');
    return this.http.get<any[]>(this.apiUrl);
  }

  
}


