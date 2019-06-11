import { Injectable } from '@angular/core';
import { Illness } from './illness';
import { ILLNESSES } from './mock-illness';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IllnessService {

  constructor() { }

  getIllnesses(): Observable<Illness[]>{
    return of(ILLNESSES);
  }

  getIllness(id: number): Observable<Illness> { 
    return of(ILLNESSES.find(illness => illness.id === id));
}
}
