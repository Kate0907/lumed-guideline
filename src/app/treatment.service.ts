import { Injectable } from '@angular/core';
import { Treatment } from './treatment';
import { TREATMENT } from './mock-treatment';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor() { }

  getAllTreatment(): Observable<Treatment[]> {
    return of(TREATMENT);
  }

  getTreatment(id: number): Observable<Treatment> {
    return of(TREATMENT.find(treatment => treatment.id === id));
}


}
