import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IModels } from '../Interfaces/IModels';
import { IOptions } from '../Interfaces/IOptions';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getModel(): Observable<IModels[]> {
    return this.http.get<IModels[]>('/models');
  }

  public getOptions(model: string): Observable<IOptions> {
    return this.http.get<IOptions>(`/options/${model}`);
  }
}
