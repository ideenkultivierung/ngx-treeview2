import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import cities from "./cities";

export interface City {
  id: number;
  name: string;
  postCode: number;
}

@Injectable()
export class CityService {
  constructor(
  ) { }

  getCities(): Observable<City[]> {
    return of(cities as unknown as City[]);
  }
}
